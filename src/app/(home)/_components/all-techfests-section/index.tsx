import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { currentTechfest, techfestData } from "@/data/techfest"
import Link from "next/link"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { buttonVariants } from "@/components/ui/button"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import Floating3DModels from "./floating-3d-models"


const AllTechfestSection = () => {
  const regex = /(?<=v)\d+(\.\d+)?/
  const match = (currentTechfest.label).match(regex)
  if (!match) return null
  const v = Number(match[0])
  if (!v) return null
  return (
    <section id="techfest" className="container py-24 sm:py-32 max-w-4xl relative">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Techfest
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Lorem ipsum dolor sit amet.
        </h2>
      </div>


      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 z-10 relative">
        {
          Array.from({ length: v }).map((_, i) => {

            const version = v - i
            const data = techfestData[`v${version}.0`]
            if (i == 0) return (
              <Link
                key={i}
                className="col-span-2 row-span-4 relative group"
                href={currentTechfest.path}
              >
                <Badge variant="outline" className="absolute top-2 right-2">
                  Current
                </Badge>
                <Card
                  className="bg-muted/50 group-hover:bg-muted transition-all"
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="flex gap-4 items-end text-3xl">
                      <Image src={"/assets/images/illustrations/space-tech.png"} width={100} height={100} alt="space-tech" />
                      <span className="mb-5">
                        {`v${version}.0`}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis deleniti dolores sint.
                  </CardContent>
                </Card>
              </Link>
            )

            if (!data) {
              return (
                <AlertDialog
                  key={i}
                >
                  <AlertDialogTrigger className={buttonVariants({ variant: "outline" })}>
                    {`v${version}.0`}
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>No Data!</AlertDialogTitle>
                      <AlertDialogDescription>
                        There is no data available for techfest <span className="font-semibold">{`v${version}.0`}</span> but it was far better than your imagination.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogAction className={buttonVariants({ size: "sm", className: "min-w-32" })}>Got it!</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>)

            }
            return (
              <Link href={data.path}
                key={i}
                className={buttonVariants({ variant: "outline" })}
              >
                {`v${version}.0`}
              </Link>
            )
          })
        }
      </div>
      <Floating3DModels />
    </section >
  )
}
export default AllTechfestSection