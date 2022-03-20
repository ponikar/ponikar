import { Section } from "../Section";

const StackTech = () => {
  return (
    <Section title="Tech Stack">
      <section
        id="stack-tech"
        className="lg:p-14 lg:mt-0 mt-6 p-0 grid md:grid-cols-5 grid-cols-1"
      >
        <div className="col-span-2 w-10/12 lg:mx-0 mx-auto">
          <ReactIcon />
          <CssIcon />
          <CPPIcon />
          <MongoIcon />
        </div>
        <div className="flex lg:my-0 my-12 flex-col justify-between">
          <MySqlIcon />
          <JSIcon />
          <FigmaIcon />
        </div>
        <div className="col-span-2 lg:my-0 my-12 lg:ml-14 mx-auto  w-10/12">
          <NodejsIcon />
          <LaravelIcon />
          <PhpIcon />
          <ExpressIcon />
          <Firebase />
        </div>
      </section>
    </Section>
  );
};

export default StackTech;
