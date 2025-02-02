import { Button } from "@/components/ui/button";
import Search from "@/components/Search";
import { Filter, Heart, Lightbulb } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-40 md:h-screen md:w-screen">
      <div className="md:px-0 px-5">
        <h1 className="text-5xl text-white capitalize font-semibold text-center mb-3">
          Business Name Generator
        </h1>
        <p className="text-white text-center text-xl p-1">
          Generate the perfect Business name by our ai-powered business
          generator tool!
        </p>
        <Search />
      </div>
      <div className="md:flex justify-between gap-10 px-56 mt-28 ">
        <div className="md:mb-0 mb-10">
          <Lightbulb className="text-primary mb-3" size={30} />
          <h4 className="text-white text-xl font-semibold">Generate Idea</h4>
          <p className="text-white">
            Struggling to find the perfect name for your business? Just share a
            few keywords or describe your vision, and our AI will generate
            unique, creative, and catchy name ideas in seconds. Whether you want
            something trendy, classic, or out-of-the-box, we’ve got you covered!
          </p>
        </div>
        <div className="md:mb-0 mb-10">
          <Filter className="text-primary mb-3" size={30} />
          <h4 className="text-white text-xl font-semibold">Filter Result</h4>
          <p className="text-white">
            Too many options? No problem! Use our smart filters to narrow down
            your results based on industry, style, length, and availability.
            Finding the right name shouldn’t feel overwhelming—our filtering
            system helps you focus on what truly fits your brand.
          </p>
        </div>
        <div className="md:mb-0 mb-10">
          <Heart className="text-primary mb-3" size={30} />
          <h4 className="text-white text-xl font-semibold">Save Name</h4>
          <p className="text-white">
            Found a name you love. Save it with a single click and keep track of
            your favorite options. No more losing great ideas—come back anytime
            to review, compare, and finalize the perfect name for your business.
          </p>
        </div>
      </div>
    </div>
  );
}
