import Hero from "./Hero";
import BeforeAfter from "./before-after/BeforeAfter";
import Services from "./services/Services";
import WhyUs from "./why-us/WhyUs";

export default async function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <div className="px-5">
        <WhyUs />
      </div>
      <div className="px-5">
        <Services />
      </div>
      <div className="px-5">
        <BeforeAfter />
      </div>
    </div>
  );
}
