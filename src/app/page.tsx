"use client";
import Landing, { CodeBox } from "@/components/Landing";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
export default function Home() {
  return (
    <>
      <button
        className="btn-primary"
        onClick={() => {
          document.documentElement.setAttribute(
            "data-theme",
            document.documentElement.getAttribute("data-theme") === "light"
              ? "dark"
              : "light"
          );
        }}
      >
        Toggle
      </button>
      <Landing />
      <section className=" md:w-6xl justify-evenly  mx-auto px-3 mt-7 flex  items-center">
        <button className="btn btn-primary  px-5 py-6 rounded-xl text-[16px] ">
          Connect with Me
        </button>
        <button className="btn bg-accent ml-3 px-5 py-6 rounded-xl text-[16px] ">
          Download my CV
        </button>
        <button className="btn btn-circle ml-2 bg-black ">
          <FaLinkedin className="size-25 p-2 " color="white" />
        </button>
        <button className="btn btn-circle ml-2 bg-black ">
          <FaLinkedin className="size-25 p-2 " color="white" />
        </button>
        <button className="btn btn-circle ml-2 bg-black ">
          <FaLinkedin className="size-25 p-2 " color="white" />
        </button>
      </section>
      <div className="md:w-7xl m-auto flex flex-col md:flex-row mt-7 gap-5 mx-4">
        <section className="px-7 py-6 bg-accent rounded-xl flex-3/4 font-dm-sans font-semibold text-base-300">
          <span className="font-extrabold text-2xl font-kumbha-sans">
            Experience
          </span>
          <section className="flex mt-7 ">
            <span className="w-[150px] font-extrabold text-lg font-kumbha-sans">
              Confirmed
            </span>
            <div className="flex-1 ml-8">
              <span className="p-2 bg-base-200 rounded-sm text-primary border-2 border-b-4 border-y-amber-950 shadow-amber-950 ">
                Python
              </span>
              <span className="p-2 bg-base-200 rounded-sm text-primary border-2 border-b-4 border-y-amber-950 shadow-amber-950 ml-2">
                Django
              </span>
              <span className="p-2 bg-base-200 rounded-sm text-primary border-2 border-b-4 border-y-amber-950 shadow-amber-950 ml-2">
                React.js
              </span>
              <span className="p-2 bg-base-200 rounded-sm text-primary border-2 border-b-4 border-y-amber-950 shadow-amber-950 ml-2">
                SQL
              </span>
              <span className="p-2 bg-base-200 rounded-sm text-primary border-2 border-b-4 border-y-amber-950 shadow-amber-950 ml-2">
                REST
              </span>
              <span className="p-2 bg-base-200 rounded-sm text-primary border-2 border-b-4 border-y-amber-950 shadow-amber-950 ml-2">
                Git
              </span>
            </div>
          </section>
          <section className="flex flex-col md:flex-row mt-7">
            <span className="w-[150px] font-extrabold text-lg font-kumbha-sans">
              Intermediate
            </span>
            {/* <div className="divider"></div> */}
            
            <div className="flex-1 md:ml-8 mt-5 md:mt-0">
              <span className="p-2 bg-base-200 rounded-sm text-primary border-2 border-b-4 border-y-amber-950 shadow-amber-950 ">
                Tailwind
              </span>
              <span className="p-2 bg-base-200 rounded-sm text-primary border-2 border-b-4 border-y-amber-950 shadow-amber-950 ml-2">
                CI/CD
              </span>
              <span className="p-2 bg-base-200 rounded-sm text-primary border-2 border-b-4 border-y-amber-950 shadow-amber-950 ml-2">
                Next.js
              </span>
              <span className="p-2 bg-base-200 rounded-sm text-primary border-2 border-b-4 border-y-amber-950 shadow-amber-950 ml-2">
                MongoDB
              </span>
              <span className="p-2 bg-base-200 rounded-sm text-primary border-2 border-b-4 border-y-amber-950 shadow-amber-950 ml-2">
                Docker
              </span>
            </div>
          </section>
          <section className="flex mt-7">
            <span className="w-[150px]  font-extrabold text-lg font-kumbha-sans">
              Novice
            </span>
            <div className="flex-1 ml-8">
              <span className="p-2 bg-base-200 rounded-sm text-primary border-2 border-b-4 border-y-amber-950 shadow-amber-950 ">
                Node
              </span>
              <span className="p-2 bg-base-200 rounded-sm text-primary border-2 border-b-4 border-y-amber-950 shadow-amber-950 ml-2">
                Next.js
              </span>
              <span className="p-2 bg-base-200 rounded-sm text-primary border-2 border-b-4 border-y-amber-950 shadow-amber-950 ml-2">
                MongoDB
              </span>
            </div>
          </section>
        </section>
        <section className="flex-1/4">
          <CodeBox
            code={`class Skills(){
          constructor(){
          this.confirmed=[
          "Python","Django",
          "React.js","SQL",
          "REST","Git"]}
          }`}
          />
        </section>
      </div>
      <div className="md:w-7xl mx-4 m-auto flex flex-col md:flex-row mt-7 gap-5">
        <section className="flex-1/4">
          <CodeBox
            code={`class Skills(){
          constructor(){
          this.confirmed=["Python",
          "Django",
          "React.js","SQL",
          "REST","Git"]}
          }`}
          />
        </section>
        <section className="px-7 py-6 bg-accent rounded-xl flex-3/4 font-dm-sans font-semibold text-base-300">
          <span className="font-extrabold text-2xl font-kumbha-sans">
            About
          </span>
          <p className="font-quicksand-sans ">
            After my degree in Computer Science. I started my developer role and
            its been 4+ years. What I appreciate in programming is problem
            solving and always trying to find them ost optimal solution. Today
            my favourite frameworks are Django, React.js/NextJS. I also worked
            on Node.js,PHP and many others.
            <br />
            Apart from the code, I have other passions like playing
            guitar,swimming.
          </p>
        </section>
      </div>
      <div className="md:w-7xl m-auto flex mt-7 gap-5 mx-4">
        <section className="px-7 py-6 bg-accent rounded-xl flex-1 font-dm-sans font-semibold text-base-300">
          <span className="font-extrabold text-2xl font-kumbha-sans">
            Personal Projects
          </span>
          <div></div>
        </section>
      </div>
    </>
  );
}
