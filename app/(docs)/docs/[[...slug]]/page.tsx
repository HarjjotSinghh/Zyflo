import DocsBreadcrumb from "@/components/docs-breadcrumb"
import Pagination from "@/components/pagination"
import { page_routes } from "@/lib/routes-config"
import { notFound, usePathname } from "next/navigation"
import { getMarkdownForSlug, getTocs } from "@/lib/markdown"
import { PropsWithChildren } from "react"
import { cache } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import TocObserver from "@/components/toc-observer"

type PageProps = {
  params: { slug: string[] }
}

const cachedGetMarkdownForSlug = cache(getMarkdownForSlug)

export default async function DocsPage({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/")
  const res: any = await cachedGetMarkdownForSlug(pathName)
  const tocs = await getTocs(pathName)

  if (!res) notFound()
  return (
    <div className="flex w-full items-start gap-8 ">
      <div className=" max-w-2xl px-0 pt-10 xxxxs:pl-0.5 xxxxs:pr-4 xxxs:pl-1 xxxs:pr-4 xxs:pl-0.5 xxs:pr-4 xs:px-0 sm:px-0 md:px-0 lg:px-0 xl:px-0">
        <DocsBreadcrumb paths={slug} />
        <Markdown>
          <h2 className="mb-8">{res.frontmatter.title}</h2>
          <p className="text-[16.5px] text-muted-foreground">
            {res.frontmatter.description}
          </p>
          <div>{res.content}</div>
          <Pagination pathname={pathName} />
        </Markdown>
      </div>
      <div className="toc sticky top-[88px] hidden h-[95.95vh] min-w-fit py-8 lg:flex">
        <div className="flex w-full flex-col gap-2.5">
          <h5 className="text-sm font-medium">On this page</h5>
          <ScrollArea className="pb-4 pt-0.5">
            <TocObserver data={tocs} />
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

function Markdown({ children }: PropsWithChildren) {
  return (
    <div className="prose-code:font-code prose prose-zinc w-fit max-w-2xl max-w-[100dvw] shrink grow-0 pt-2 dark:prose-invert prose-headings:scroll-m-20 prose-headings:text-balance prose-h2:mb-[0.8rem] prose-h2:mt-[1.5rem] prose-h5:text-foreground prose-h6:text-foreground prose-p:text-pretty prose-code:rounded-md prose-code:bg-transparent prose-code:p-1  prose-code:text-sm prose-code:leading-6 prose-code:text-neutral-800 prose-code:before:content-none prose-code:after:content-none prose-pre:border-[2px] prose-pre:border-primary/[0.03] prose-pre:bg-neutral-100 dark:prose-code:bg-neutral-900 dark:prose-code:bg-transparent dark:prose-code:text-white sm:mx-auto">
      {children}
    </div>
  )
}

export async function generateMetadata({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/")
  const res = await cachedGetMarkdownForSlug(pathName)
  if (!res) return null as any
  const { frontmatter } = res
  return {
    title: frontmatter.title as string,
    description: frontmatter.description as string,
    openGraph: {
      title: frontmatter.title as string,
      description: frontmatter.description as string,
      url: `https://zyflo.co/docs/${pathName}`,
      images: [
        {
          url: "https://zyflo.co/og.png",
          width: 1200,
          height: 630
        }
      ]
    }
  }
}

export function generateStaticParams() {
  return page_routes.map((item) => ({
    slug: item.href.split("/")
  }))
}
