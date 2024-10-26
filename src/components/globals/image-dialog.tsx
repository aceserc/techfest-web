import { cn } from "@/helpers/cn"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

type Props = {
  src: string;
  className?: string;
  height?: number;
  width?: number;
}
const ImageDialog = ({ src, className, height = 1000, width = 1000 }: Props) => {
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Image
          src={src}
          className={cn("w-full h-full object-cover object-center rounded-lg cursor-pointer", className)}
          height={height}
          width={width}
          alt=""
          quality={100}
        />
      </DialogTrigger>
      <DialogContent className="p-0 border-none">
        <Image
          src={src}
          className={cn("w-full h-full object-cover object-center rounded-lg", className)}
          height={height}
          width={width}
          quality={100}
          alt=""
        />
      </DialogContent>
    </Dialog>


  )
}
export default ImageDialog