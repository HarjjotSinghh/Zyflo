import { GlobeIcon } from "lucide-react"

export default function ZyfloWindowMockup({
  children
}: React.PropsWithChildren<{}>) {
  return (
    <div className="w-full rounded-lg bg-gradient-to-br from-primary/[0.03] from-50% to-primary/[0.08] shadow-2xl shadow-primary/10 ease-linear zyflo-transition dark:from-primary/5 dark:to-primary/15 dark:shadow-primary/15">
      <div className="relative flex h-12 w-full items-center justify-start gap-1.5 rounded-t-lg border-b-2 border-primary/10 px-4">
        <span className="h-3 w-3 rounded-full border-2 border-transparent bg-red-400 dark:border-red-400 dark:bg-transparent "></span>
        <span className="h-3 w-3 rounded-full border-2 border-transparent bg-yellow-400 dark:border-yellow-400 dark:bg-transparent"></span>
        <span className="h-3 w-3 rounded-full border-2 border-transparent bg-green-400 dark:border-green-400 dark:bg-transparent"></span>
        <span className="absolute left-1/2 top-1/2 inline-flex w-fit -translate-x-1/2 -translate-y-1/2 items-center gap-1 text-center text-xs">
          Zyflo Window Preview{" "}
        </span>
        <GlobeIcon className="ml-auto size-4 text-foreground/80" />
      </div>
      <div className="w-full rounded-b-lg border-t-0 px-4 py-16 lg:px-8">
        {children}
      </div>
    </div>
  )
}