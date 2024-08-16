"use client"

import { CommandIcon, FileTextIcon, SearchIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { page_routes } from "@/lib/routes-config"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useEffect, useMemo, useState } from "react"
import Anchor from "./anchor"

export default function Search() {
  const [searchedInput, setSearchedInput] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault()
        setIsOpen(true)
      }
    }
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const filteredResults = useMemo(
    () =>
      page_routes.filter((item) =>
        item.title.toLowerCase().includes(searchedInput.toLowerCase())
      ),
    [searchedInput]
  )

  return (
    <div>
      <Dialog
        open={isOpen}
        onOpenChange={(open) => {
          if (!open) setSearchedInput("")
          setIsOpen(open)
        }}
      >
        <DialogTrigger asChild>
          <div className="relative min-w-[150px] max-w-md flex-1 cursor-pointer sm:min-w-[300px] md:min-w-[300px] lg:min-w-[350px]">
            <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500 dark:text-neutral-400" />
            <Input
              className="h-9 w-full rounded-md border bg-muted pl-10 pr-4 text-sm shadow-sm "
              placeholder="Search documentation..."
              type="search"
            />
            <div className="absolute right-2 top-1/2 hidden -translate-y-1/2 items-center gap-0.5 rounded-sm bg-zinc-200 p-1 font-mono text-xs font-medium dark:bg-neutral-700 sm:flex">
              <CommandIcon className="h-3 w-3" />
              <span>k</span>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="top-[45%] max-w-[650px] p-0 sm:top-[38%]">
          <DialogHeader>
            <input
              value={searchedInput}
              onChange={(e) => setSearchedInput(e.target.value)}
              placeholder="Type something to search..."
              autoFocus
              className="h-14 border-b bg-transparent px-4 text-[15px] outline-none"
            />
          </DialogHeader>
          {filteredResults.length == 0 && searchedInput && (
            <p className="mx-auto mt-2 text-sm text-muted-foreground">
              No results found for{" "}
              <span className="text-primary">{`"${searchedInput}"`}</span>
            </p>
          )}
          <ScrollArea className="max-h-[350px]">
            <div className="flex flex-col items-start gap-0.5 overflow-y-auto px-1 pb-4 sm:px-3">
              {filteredResults.map((item) => (
                <DialogClose
                  onChange={(val) => console.log(val)}
                  key={item.href}
                  asChild
                >
                  <Anchor
                    className="flex w-full items-center gap-2.5 rounded-sm p-2.5 px-3 text-[15px] hover:bg-neutral-100 dark:hover:bg-neutral-900"
                    href={`/docs/${item.href}`}
                    activeClassName="dark:bg-neutral-900 bg-neutral-100"
                  >
                    <FileTextIcon className="h-[1.1rem] w-[1.1rem]" />{" "}
                    {item.title}
                  </Anchor>
                </DialogClose>
              ))}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  )
}
