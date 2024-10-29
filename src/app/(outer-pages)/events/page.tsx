import { getAllEvents } from "@/helpers/get-all-events"
import Image from "next/image"
import {
  Card,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/helpers/cn"

const EventsPage = async () => {
  const events = await getAllEvents()
  console.log(events)
  return (
    <div className="space-y-12 container mx-auto mt-16 h-full w-full min-h-screen">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Techfest
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Lorem ipsum dolor sit amet.
        </h2>
      </div>
      {
        events?.length === 0 ? (
          <p>No events found</p>
        ) : (
          events.map((event, i) => (
            <Card className="p-6 grid grid-cols-1 lg:grid-cols-7 bg-card/30 gap-9" key={i}>
              <div className={cn("space-y-4 lg:col-span-4", i % 2 == 0 ? "lg:order-1" : "lg:order-2")}>
                <h2 className={"text-2xl lg:text-4xl font-bold tracking-tight"}>{event.title}</h2>

                {event.category && event.category.length !== 0 &&
                  <div className="flex flex-wrap gap-2">
                    {event.category?.map((category, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className=" text-xs lg:text-sm font-normal"
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                }
                <div>
                  {event.content}
                </div>
              </div>
              <Image src={event.image} alt={event.title} width={800} height={800} className={cn("w-full h-full object-cover object-center lg:col-span-3 rounded-lg", i % 2 == 0 ? "order-2" : "order-1")} />
            </Card>
          )))
      }

    </div >
  )
}
export default EventsPage
