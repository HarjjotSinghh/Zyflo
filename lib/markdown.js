import { compileMDX } from "next-mdx-remote/rsc"
import path from "path"
import { promises as fs } from "fs"
import remarkGfm from "remark-gfm"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import rehypeCodeTitles from "rehype-code-titles"
import { page_routes } from "./routes-config"
import { visit } from "unist-util-visit"
// custom components imports
import Pre from "@/components/pre"
import Note from "@/components/note"
import { Stepper, StepperItem } from "@/components/ui/stepper"
import rehypePrism from "rehype-prism-plus"
import RehypeMDXCode from "rehype-mdx-code-props"
// custom components imports
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ComponentSource } from "@/components/component-source"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import ZyfloAlert from "@/components/zyflo/alert"
import { zyfloComponents } from "@/config/site"
import { AllComponents } from "@/components/all-components"
import ZyfloWindowMockup from "@/components/zyflo/window-mockup"
import ZyfloFileContent from "@/components/zyflo/file-content"

const components = {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  pre: Pre,
  Note,
  Stepper,
  StepperItem,
  ComponentSource,
  Button,
  Image,
  ZyfloAlert,
  zyfloComponents,
  AllComponents,
  ZyfloWindowMockup,
  ZyfloFileContent
}

export async function getMarkdownForSlug(slug) {
  try {
    const contentPath = getContentPath(slug)
    const rawMdx = await fs.readFile(contentPath, "utf-8")
    return await compileMDX({
      source: rawMdx,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [
            preProcess,
            rehypeCodeTitles,
            rehypeSlug,
            rehypeAutolinkHeadings,
            postProcess,
            rehypePrism
          ],
          remarkPlugins: [remarkGfm]
        }
      },
      components
    })
  } catch (err) {
    console.log(err)
  }
}

export function getInnerText(htmlString) {
  const match = htmlString.match(/<[^>]+>(.*?)<\/[^>]+>/)

  if (match && match[1]) {
    return match[1]
  } else {
    return htmlString
  }
}

export async function getTocs(slug) {
  const contentPath = getContentPath(slug)
  const rawMdx = await fs.readFile(contentPath, "utf-8")

  // captures between ## - ## can modify accordingly
  const headingsRegex = /^(#{2,4})\s(.+)$/gm
  let match
  const extractedHeadings = []
  while ((match = headingsRegex.exec(rawMdx)) !== null) {
    const headingLevel = match[1].length
    const headingText = match[2].trim()
    const innnerText = getInnerText(headingText)
    const slug = sluggify(innnerText)
    extractedHeadings.push({
      level: headingLevel,
      text: innnerText,
      href: `#${slug}`
    })
  }
  return extractedHeadings
}

export function getPreviousNext(path) {
  const index = page_routes.findIndex(({ href }) => href == path)
  return {
    prev: page_routes[index - 1],
    next: page_routes[index + 1]
  }
}

function sluggify(text) {
  const slug = text.toLowerCase().replace(/\s+/g, "-")
  return slug.replace(/[^a-z0-9-]/g, "")
}

function getContentPath(slug) {
  return path.join(process.cwd(), "/contents/docs/", `${slug}.mdx`)
}

// for copying the code
const preProcess = () => (tree) => {
  visit(tree, (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      const [codeEl] = node.children
      if (codeEl.tagName !== "code") return
      node.raw = codeEl.children?.[0].value
    }
  })
}

const postProcess = () => (tree) => {
  visit(tree, "element", (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      node.properties["raw"] = node.raw
      // console.log(node);
    }
  })
}
