'use client'
import LeftSidebar from "@/components/LeftSidebar"

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftSidebar />
        {/* <main>home</main>
        <section>right </section> */}
      </div>

    </div>
  );
}
