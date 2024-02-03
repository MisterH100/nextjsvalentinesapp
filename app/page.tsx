import Image from "next/image"

export default function Home() {
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
    </main>
  );
}
