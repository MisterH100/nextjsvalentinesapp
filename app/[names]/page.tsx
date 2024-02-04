'use client'
import Image from "next/image"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./bubble.module.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
const axios = require('axios');



export default function Love({params: {names}}: {params: {names:string}}) {
  const girl = names.substring(0,names.indexOf("-"));
  const boy = names.slice(names.indexOf("-")+1);
  const [index,setIndex] = useState(0);
  const {toast} = useToast();
  const router = useRouter();
  const messages = ["You sure?,press the red button instead","I think you missed it,it's the one on the left","I made it bigger it will be easier to see","You can't tell the difference between right and left?","Lets just remove the annoying button"]
  const buttonSize = [" w-[200px]"," w-[80px] h-[40px] text-xs py-0"]
  const buttonColor = ["w-[250px]","bg-yellow-800"]
  const buttonSate = [" w-[350px]","hidden"]


  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center p-4">
      <div>
        <div className="relative w-full h-56 rounded-xl bg-white overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center p-2">
            <h1 className="w-full text-center font-semibold text-xl truncate">To the beautiful <span className="capitalize girl_name text-rose-600">{girl}❤️</span><br/><span className="font-light text-base capitalize">from {boy}</span></h1>
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
          <BubbleText text="Be my Valentine forever."/>
          <p className="pt-2" title="Poem By Belinda Galea">
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
        <div className={`flex ${index ==4&&"flex-row-reverse"} justify-between items-center gap-10 pt-10`}>
          <Dialog>
            <DialogTrigger asChild>
              <button 
                onClick={()=>{
                  axios.post("https://misterh-api-server.onrender.com/api/valentines/new",{
                    girl: girl,
                    boy: boy
                  }).then(()=> {
                    console.log("sweet");
                  })
                  .catch((error: any)=> {
                    console.log(error);
                  })
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
                  <span className="capitalize">{boy}</span> says "in my heart there is a place
                  For a special girl like you"
                </p>
              </DialogHeader>
              <div className="w-20 h-20 mx-auto">
                <Image
                  className="w-full h-full object-cover"
                  src="/happydance.gif"
                  alt="hearts"
                  width={100}
                  height={100}
                  priority
                />
              </div>
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
            className={`bg-green-800 p-4 border border-white rounded-xl text-white ${index > 2&&buttonSize[1]} ${index ==4&&buttonColor[1]} ${index ==5 &&buttonSate[1]}`}>no i will not
          </button>
        </div>
      </div>

    </main> 
  );
}

const BubbleText = ({text}:{text:string}) => {
  return (
    <h3 className="text-3xl font-thin text-rose-600 cursor-pointer">
      {text.split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h3>
  );
};