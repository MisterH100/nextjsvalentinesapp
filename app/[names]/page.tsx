'use client'
import Image from "next/image"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"



export default function Love({params: {names}}: {params: {names:string}}) {
  const girl = names.substring(0,names.indexOf("-"));
  const boy = names.slice(names.indexOf("-")+1);
  const [index,setIndex] = useState(0);
  const {toast} = useToast();
  const router = useRouter();
  const messages = ["You sure?,press the red one instead","I think you missed it,it's the left one","I made it bigger it will be easier to see","You must be color blind let's try different colors","Lets just remove the annoying button"]
  const buttonSize = ["w-[200px]","w-[80px] h-[40px] text-small p-0"]
  const buttonColor = ["bg-blue-800 w-[250px]","bg-yellow-800"]
  const buttonSate = ["w-[350px]","hidden"]

  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center p-4">
      <div>
        <div className="relative w-full md:w-96 h-56 rounded-xl bg-white overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center p-2">
            <h1 className="w-full text-center font-semibold text-xl truncate">To the beautiful <span className="capitalize girl_name">{girl}❤️</span><br/><span className="text-base capitalize">from {boy}</span></h1>
          </div>
          <Image
            className="w-full h-full object-cover"
            src="/butterflyhearts.gif"
            alt="hearts"
            width={100}
            height={100}
            priority
          />
        </div>
        <div className="pt-4">
          <h2 className="">Its the month of love,here is a poem</h2>
          <h3 className="text-2xl md:text-3xl font-medium">Be my Valentine forever.</h3>
          <p className="pt-2" title="Poem Belinda Galea">
            I love you for a lifetime,<br/>
            Not only for a day.<br/>
            I love you for who you are,<br/>
            Not what you do or say.<br/>
            I love the way you love me back,<br/>
            So there is only one thing I can say.<br/>
            I love you baby with my heart and soul and every other way.<br/>
            So will you be my Valentine, not only for one day?<br/>
          </p>
        </div>
        <div className="flex justify-between items-center gap-10 pt-10">
          <Dialog>
            <DialogTrigger asChild>
              <button 
                onClick={()=>{
                  setTimeout(()=>{
                      router.push("/")
                  },20000)
                }}
                className={`bg-red-500 p-4 border border-white rounded-xl text-white ${index ==2 && "animate-bounce"} ${index > 2&&buttonSize[0]} ${index ==4&&buttonColor[0]} ${index ==5&&buttonSate[0]}`}>yes i will
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  You are the sweetest
                </DialogTitle>
                <DialogDescription><span className="capitalize">{boy}</span> will be notified of your descision</DialogDescription>
                <p>
                  <span className="capitalize">{boy}</span> says "in my heart there's a place
                  For a special girl like you❤️"
                </p>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <button 
            onClick={() => {
              setIndex((prev)=>prev+1)
              toast({
                variant: "destructive",
                description: messages[index],
              })
            }}
            className={`bg-green-600 p-4 border border-white rounded-xl text-white ${index > 2&&buttonSize[1]} ${index ==4&&buttonColor[1]} ${index ==5 &&buttonSate[1]}`}>no i won't
          </button>
        </div>
      </div>

    </main> 
  );
}