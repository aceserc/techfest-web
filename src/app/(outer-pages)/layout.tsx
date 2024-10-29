import { Header } from "@/components/globals/header"
import { buttonVariants } from "@/components/ui/button"
import { currentTechfest } from "@/data/techfest"
import { cn } from "@/helpers/cn"
import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

type Props = {
  children: React.ReactNode
}
const Layout = ({ children }: Props) => {

  return (
    <div>
      <Header
        routes={[
          {
            href: "/#hero",
            label: "Home",
          },
          {
            href: "/#techfest",
            label: "Techfests",
          },
          {
            href: "/#highlights",
            label: "Highlights",
          },
          {
            href: "/#welcome-message",
            label: "Welcome Message",
          },
          {
            href: "/events",
            label: "Events",
          },
        ]}
        rightContent={
          <Link href={currentTechfest.path} className={cn(buttonVariants({ variant: "secondary" }), "min-w-32 group/arrow max-lg:w-full")} >
            {currentTechfest.label}  <ArrowRightIcon className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
          </Link>
        }
      />
      <main className="mt-14 overflow-y-auto overflow-x-hidden">
        {children}
      </main>
    </div>
  )
}
export default Layout