'use client'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Video from "./Video"
import { PlayCircle } from "lucide-react"
  

const Modal = () => {
  return (
    <AlertDialog>
    <AlertDialogTrigger className="7xl"><PlayCircle className='flex justify-center items-center text-yellow-500 w-full mt-10 h-20' /> </AlertDialogTrigger>
    <AlertDialogHeader></AlertDialogHeader>
    <AlertDialogContent>
    <AlertDialogCancel>x</AlertDialogCancel>
     <video width="1980" height="100" controls autoPlay muted>
    <source src="/images/vid.mp4" type="video/mp4" />
 
</video>
    </AlertDialogContent>
  </AlertDialog>
  
  )
}

export default Modal