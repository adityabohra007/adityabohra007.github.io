const Landing = () => {
  const experience = new Date().getFullYear() - 2020;
  const stack = ["Python(Django)", "Javascript(React.js)"];
  const code = ` 
  class Person{
  constructor(){
    this.name = "Aditya Bohra";
    this.experience = new Date().getFullYear()-2020;
    }
  }`;

  return (
    <>
      {/* Here need tp remove mt-10 and create new container of this and assign padding to it  */}
      <div className=" px-5 py-3 flex-col md:flex-row flex justify-between md:w-7xl m-auto  " id="Intro">
        <section className="   shadow-sm rounded-xl bg-primary px-8 py-6 text-primary-content flex-1  font-quicksand-sans font-semibold text-[22px]">
          My name is Aditya Bohra, I am a fullstack developer for {experience}+
          years.
          <br />
          My stack is {stack.join(" + ")}.
        </section>
        <section
          className="mt-3 md:mt-1 md:ml-4"
          // className=" shadow-sm rounded-xl  px-6 py-3 text-accent-content flex-1  font-dm-sans font-semibold text-[17px] ml-10 bg-[conic-gradient(at_top_left,_#f3f4f6_25%,_transparent_25%)] bg-[length:20px_20px]"
        >
          <CodeBox code={code} />
        </section>
      </div>
    </>
  );
};

type CodeType = {
  code: string;
};
export const CodeBox = ({ code }: CodeType) => {
  return (
    <div
      className="mockup-code min-h-full bg-base-300 text-amber-900"
      
    >
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};
export default Landing;
