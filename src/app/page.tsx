"use client";
import { ContactUs } from "@/components/Email";
import Landing, { CodeBox } from "@/components/Landing";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { AiOutlineRobot } from "react-icons/ai";
import { BiAtom } from "react-icons/bi";
import { FiBookOpen } from "react-icons/fi";
import { AiFillProject } from "react-icons/ai";
const Navigation = () => {
  return (
    <section className=" md:w-7xl justify-evenly  mx-auto md:px-3 md:py-2 mt-7 flex  md:flex-row  items-center border-2 border-b-4 rounded-lg border-gray-800 fixed md:static bottom-0 w-full bg-base-300 text-accent z-200 ">
      <a
        className="hover:bg-accent-content p-2 md:px-5 md:py-4 md:border-2 md:border-gray-700 rounded-xl flex-1/4 flex justify-center md:gap-10"
        href="#Receiption"
      >
        <AiOutlineRobot size={30} />
        <span className="hidden md:block">Reception</span>
      </a>
      <a
        className="hover:bg-accent-content p-2 md:px-5 md:py-4 md:border-2 md:border-gray-700 rounded-xl flex-1/4 flex justify-center md:gap-10"
        href="#Skills"
      >
        <BiAtom size={30} />
        <span className="hidden md:block">Skills</span>
      </a>
      <a
        className="hover:bg-accent-content p-2 md:px-5 md:py-4 md:border-2 md:border-gray-700 rounded-xl flex-1/4 flex justify-center md:gap-10"
        href="#About"
      >
        <FiBookOpen size={30} />
        <span className="hidden md:block">About</span>
      </a>
      <a
        className="hover:bg-accent-content  p-2 md:px-5 md:py-4 md:border-2 md:border-gray-700 rounded-xl flex-1/4 flex justify-center md:gap-10"
        href="#Projects"
      >
        <AiFillProject size={30} />
        <span className="hidden md:block">Projects</span>
      </a>
      {/* <div>Skills,About Projects</div> */}
    </section>
  );
};
const scrollToElement = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
export default function Home() {
  const [toast, setToast] = useState({ title: "", visible: false });
  return (
    <>
      {toast.visible && (
        <div className="toast z-300">
          <div className="alert alert-success">
            <span>Mail sent successfully.</span>
          </div>
        </div>
      )}

      {/* <button
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
      </button> */}
      <Navigation />
      <Landing />
      <section className=" md:w-6xl justify-evenly  mx-auto px-3 mt-7 flex flex-col md:flex-row  items-center">
        <a
          className="btn btn-primary  px-5 py-6 rounded-xl text-[16px]  "
          href="#Contact"
        >
          Connect with Me
        </a>
        <button className="btn bg-accent md:ml-3 mt-4 md:mt-0 px-5 py-6 rounded-xl text-[16px]">
          Download my CV
        </button>
        <div className="flex md:w-[300px] justify-between mt-8 md:mt-0 gap-10">
          <button className="btn btn-circle  bg-black ">
            <FaLinkedin className="size-25 p-2 " color="white" />
          </button>
          <button className="btn btn-circle  bg-black ">
            <FaLinkedin className="size-25 p-2 " color="white" />
          </button>
          <button className="btn btn-circle bg-black ">
            <FaLinkedin className="size-25 p-2 " color="white" />
          </button>
        </div>
      </section>
      {/* Tech knowledge */}
      <div
        className="md:w-7xl mx-auto px-3  py-5 flex flex-col md:flex-row mt-7 gap-5 "
        id="Skills"
      >
        <section className="px-7 py-6 bg-accent rounded-xl flex-3/4 font-dm-sans font-semibold text-base-300">
          <span className="font-extrabold text-2xl font-kumbha-sans">
            Experience
          </span>
          <section className="flex mt-7 flex-col md:flex-row ">
            <span className="w-[150px] font-extrabold text-lg font-kumbha-sans">
              Confirmed
            </span>
            <div className="flex-1 md:ml-8 flex flex-wrap mt-5 md:mt-0">
              <span className="p-2 bg-base-200 rounded-sm text-primary border-2 border-b-4 border-y-amber-950 shadow-amber-950 mt-5 md:mt-0 ">
                Python
              </span>
              <span className="p-2 bg-base-200 rounded-sm text-primary border-2 border-b-4 border-y-amber-950 shadow-amber-950 ml-2 mt-5 md:mt-0">
                Django
              </span>
              <span className="p-2 bg-base-200 rounded-sm text-primary border-2 border-b-4 border-y-amber-950 shadow-amber-950 ml-2 mt-5 md:mt-0">
                React.js
              </span>
              <span className="p-2 bg-base-200 rounded-sm text-primary border-2 border-b-4 border-y-amber-950 shadow-amber-950 ml-2 mt-5 md:mt-0">
                SQL
              </span>
              <span className="p-2 bg-base-200 rounded-sm text-primary border-2 border-b-4 border-y-amber-950 shadow-amber-950 ml-2 mt-5 md:mt-0">
                REST
              </span>
              <span className="p-2 bg-base-200 rounded-sm text-primary border-2 border-b-4 border-y-amber-950 shadow-amber-950 ml-2 mt-5 md:mt-0">
                Git
              </span>
            </div>
          </section>
          <section className="flex flex-col md:flex-row mt-7">
            <span className="w-[150px] font-extrabold text-lg font-kumbha-sans">
              Intermediate
            </span>
            {/* <div className="divider"></div> */}

            <div className="flex-1 md:ml-8 mt-5 md:mt-0 flex flex-wrap  ">
              <span className="p-2 bg-base-200 rounded-sm text-primary border-2 border-b-4 border-y-amber-950 shadow-amber-950 mt-5 md:mt-0 ">
                Tailwind
              </span>
              <span className="p-2 bg-base-200 rounded-sm text-primary border-2 border-b-4 border-y-amber-950 shadow-amber-950 ml-2 mt-5 md:mt-0">
                CI/CD
              </span>
              <span className="p-2 bg-base-200 rounded-sm text-primary border-2 border-b-4 border-y-amber-950 shadow-amber-950 ml-2 mt-5 md:mt-0">
                Next.js
              </span>
              <span className="p-2 bg-base-200 rounded-sm text-primary border-2 border-b-4 border-y-amber-950 shadow-amber-950 ml-2 mt-5 md:mt-0">
                MongoDB
              </span>
              <span className="p-2 bg-base-200 rounded-sm text-primary border-2 border-b-4 border-y-amber-950 shadow-amber-950 ml-2 mt-5 md:mt-0">
                Docker
              </span>
            </div>
          </section>
          <section className="flex mt-7 flex-col md:flex-row">
            <span className="w-[150px]  font-extrabold text-lg font-kumbha-sans">
              Novice
            </span>
            <div className="flex-1 md:ml-8 flex flex-wrap">
              <span className="p-2 bg-base-200 rounded-sm text-primary border-2 border-b-4 border-y-amber-950 shadow-amber-950 mt-5 md:mt-0  ">
                Node
              </span>
              <span className="p-2 bg-base-200 rounded-sm text-primary border-2 border-b-4 border-y-amber-950 shadow-amber-950 ml-2 mt-5 md:mt-0">
                Next.js
              </span>
              <span className="p-2 bg-base-200 rounded-sm text-primary border-2 border-b-4 border-y-amber-950 shadow-amber-950 ml-2 mt-5 md:mt-0">
                MongoDB
              </span>
            </div>
          </section>
        </section>
        <section className="flex-1/4">
          <CodeBox
            code={`class Skills{
          constructor(){
          this.confirmed=[
          "Python","Django",
          "React.js","SQL",
          "REST","Git"];
            this.novice=[
          "Node","Next.js",
          "MongoDB"]
          }
          }`}
          />
        </section>
      </div>
      <div
        className="md:w-7xl  px-3 py-5 m-auto flex flex-col md:flex-row mt-7 gap-5"
        id="About"
      >
        <section className="flex-1/4">
          <CodeBox
            code={`class About{
          constructor(){
          this.education=[
          "Computer Science Degree",
          "Django","React.js"]}
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
      <div className="md:w-7xl mx-auto px-3 py-5 flex mt-7 gap-5 ">
        <section
          className="px-7 py-6 bg-accent rounded-xl flex-1 font-dm-sans font-semibold text-base-300"
          id="Projects"
        >
          <span className="font-extrabold text-2xl font-kumbha-sans">
            Personal Projects
          </span>
          <div className="flex flex-col md:flex-row mt-5 justify-around gap-10 ">
            <div className=" flex-1/2 bg-base-100 text-indigo-700 rounded-xl border-amber-950 border-2 border-b-4 px-4 py-6">
              <p className="text-zinc-900">Pomodoro Timer</p>
              <span>Create productive time block </span>
              <div className="flex-1  mt-13">
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
            </div>
            <div className="flex-1/2 bg-base-100 text-indigo-700 rounded-xl border-amber-950 border-2 border-b-4 px-4 py-6">
              <p className="text-zinc-900">Pomodoro Timer</p>
              <span>Create productive time block </span>
              <div className="flex-1  mt-7">
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
            </div>
          </div>
        </section>
      </div>
      {/* Experience */}
      <div className="md:w-7xl mx-auto px-3 py-5 flex flex-col md:flex-row mt-7 gap-5 mb-5">
        <section className="px-7 py-6 bg-accent rounded-xl font-dm-sans font-semibold text-base-300 flex-[70%] ">
          <span className="font-extrabold text-2xl font-kumbha-sans">
            Job Experience
          </span>
          <div className="flex gap-10 mt-10">
            <span className="flex-[20%]">2019-2023</span>
            <div className="flex-2/3">
              <p className="font-kumbha-sans font-extrabold text-xl">
                Geekybuddha Technologies
              </p>
              <span className="font-medium">
                FullStack Python Developer| Django,React.js
              </span>
            </div>
          </div>
        </section>
        <section className="flex-[30%]">
          <CodeBox
            code={`class Skills{
          constructor(){
          this.confirmed=[
          "Python","Django",
          "React.js","SQL",
          "REST","Git"]}
          }`}
          />
        </section>
      </div>
      {/* Contact */}
      <div className="md:w-7xl mx-auto px-3 py-5 flex-col md:flex-row flex mt-7 gap-5 mb-5 pb-20 md:pb-0">
        <section className="flex-[30%]">
          <CodeBox
            code={`class Contact{
          constructor(){
          this.email='';
          this.username='';
          this.message='';
          }
        }`}
          />
        </section>
        <section
          id="Contact"
          className="px-7 py-6 bg-accent rounded-xl font-dm-sans font-semibold text-base-300 flex-[70%] flex-col md:flex-row "
        >
          <span className="font-extrabold text-2xl font-kumbha-sans">
            Contact
          </span>
          <ContactUs onEmailSuccess={setToast} />
        </section>
      </div>
    </>
  );
}
