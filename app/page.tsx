'use client'
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useToast } from "@/components/ui/use-toast"

export default function Home() {
  const [girl,setGirl] = useState("");
  const [boy,setBoy] = useState("");
  const [url,setUrl] = useState("");
  const linkRef = useRef<HTMLInputElement>(null);
  const {toast} = useToast();

  useEffect(()=>{
    if(typeof window.location !== undefined){
      setUrl(`${window.location.hostname}:${window.location.port}`)
    }
  },[])

  return (
    <main className="bg-white text-red-600 min-h-screen p-10">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-3xl mb-4">Happy Valentines Day</h1>
        <p>I'm sending you a Valentine wish With hugs and kisses too</p>
      </div>
      <div className="w-full flex justify-center">
        <Image
          src="/flyinghearts.gif"
          alt="flying hearts"
          width={200}
          height={200}
        />
      </div>
      <div className="w-full flex flex-col items-center gap-4">
        <h3>Create Link</h3>
        <div className="flex flex-col">
          <label htmlFor="girl">girl's name:</label>
          <input
            onChange={(e)=>setGirl(e.target.value)}
            className="w-full md:w-[320px] border border-gray-500 p-2"
            type="text" id="girl" 
            placeholder="eg: lola"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="boy">boy's name:</label>
          <input 
            onChange={(e)=>setBoy(e.target.value)}
            className="w-full md:w-[320px] border border-gray-500 p-2"
            type="text" id="boy" 
            placeholder="eg: buggs"/>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-2 mt-5">
        <label htmlFor="link">Copy this link and send it to her</label>
        <div className="flex flex-col md:flex-row gap-2">
          <input 
            ref={linkRef}
            className="border border-gray-500 p-2 w-full md:w-[500px]"
            type="text" 
            id="link"
            value={`${url}/${girl}-${boy}`}
            disabled
          />
          <button 
            onClick={() => {
              toast({
                variant:"default",
                title:"Link Copied",
                className:"bg-blue-800 text-white" 
              })
              navigator.clipboard.writeText(linkRef.current?linkRef.current.value:"")
            }}
            disabled={!girl || !boy?true:false}
            className="disabled:bg-gray-500 w-full md:w-fit flex bg-blue-800 items-center justify-center p-2 rounded text-white">
            copy
            <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 4h3c.6 0 1 .4 1 1v15c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1V5c0-.6.4-1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z"/>
            </svg>
          </button>
        </div>
      </div> 
    </main>
  );
}
