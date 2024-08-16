import { Leftbar } from "@/components/leftbar"

export default function DocsLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Leftbar />
      {children}
    </>
  )
}
