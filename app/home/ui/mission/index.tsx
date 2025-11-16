import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Mission() {
  return (
    <section>
      <div className="flex flex-col overflow-hidden">
        <div className="p-5 lg:p-10 grid grid-cols-1 lg:grid-cols-2">
          <div className="w-2/3 flex items-start">
            <div className="w-full flex items-center justify-between">
              <h1 className="text-5xl lg:text-6xl font-serif font-semibold">
                Mission
              </h1>
              <p className="text-sm tracking-tight hidden lg:block">
                What is
                <br />
                <span className="font-serif">maykls</span>.studio ?
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <div className="lg:w-4/5 mt-5">
              <p className="text-2xl lg:text-3xl tracking-tight font-medium leading-[110%] lg:leading-[130%] text-justify">
                <span className="lg:pl-20">At </span>
                <span className="font-serif tracking-tight">maykls</span>.
                <span className="font-sans tracking-tighter">studio</span>,
                we’re on the mission to create websites and brand design that
                spark excitement – just like a Grand Slam Tennis match.
                Partnering with exceptional brands that share our ambition for
                good design. It’s not just about your
                <span className="font-serif tracking-tight italic">
                  website
                </span>
                . It’s about game, set, and match for your brand.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-full overflow-hidden pr-[2%]">
          <h1 className="big-title text-[48vw] leading-[80%] font-serif tracking-tighter text-center">
            maykls
          </h1>
        </div>
      </div>
    </section>
  );
}
export default Mission;
