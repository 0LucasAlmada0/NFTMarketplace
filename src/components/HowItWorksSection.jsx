import HowItWorksCard from "./HowItWorksCard";

export default function HowItWorksSection() {
  return (
    <section className="py-10 mx-[10%]">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold">How it Works</h1>
        <p className="text-2xl ">Find Out How To Get Started</p>
      </div>
      <div className="flex justify-between">
        <HowItWorksCard/>
        <HowItWorksCard/>
        <HowItWorksCard/>
      </div>
    </section>
  );
}
