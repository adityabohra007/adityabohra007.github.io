const Landing = () => {
  const experience = new Date().getFullYear() - 2020;
  const stack = ["Python(Django)", "Javascript(React.js)"];
  const code = ` 
  class Person(){
  constructor(){
    this.name = "Aditya Bohra";
    this.experience = new Date().getFullYear()-2020;
    }
  }`;

  return (
    <>
      <div className="px-5 py-3 flex-col md:flex-row flex justify-between md:w-7xl m-auto  ">
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

export const CodeBox = ({ code }) => {
  return (
    <div className="mockup-code min-h-full" id="Receiption">
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};
export default Landing;
