import { useRef, useEffect, useState } from "react";

function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [heroHeight, setHeroHeight] = useState(0);

  useEffect(() => {
    if (heroRef.current) {
      setHeroHeight(heroRef.current.clientHeight);
    }
  }, []);

  useEffect(() => {
    if (scrollY > heroHeight - 80) {
      console.log("hero chiqib ketdi");
    }
  }, [scrollY, heroHeight]);

  const svgPattern = `
<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27">
  <rect width="27" height="27" fill="#FBFBFB"/>
  <path d="M27 0 L0 0 L0 27" fill="none" stroke="#002DDA" stroke-width="0.2"/>
</svg>
`;

  return (
    <>
      <section className="relative top-0 left-0 w-full h-screen ">
        <div
          className="w-full h-full"
          style={{
            backgroundColor: "#FBFBFB",
            backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
              svgPattern
            )}")`,
          }}
        >
          <div className=" w-full h-full flex items-end justify-center">
            <h1 className="text-[336px] tracking-tighter leading-[0.66]">
              <span className="font-serif">maykl</span>
              <span className="font-serif italic">s</span>
              <span className="font-sans tracking-[-20px]">tudio</span>
            </h1>
            {/* <h1 className="font-serif text-[256px] tracking-tight">maykl§</h1>
            <h1 className="text-[256px] tracking-tighter">tudio</h1> */}
          </div>

          {/* <div className="w-full h-full flex items-center justify-evenly bg-[#fbfbfb]">
            <div className="h-full border-l-[0.5px] border-[#002DDA] border-solid"></div>
            <div className="h-full border-l-[0.5px] border-[#002DDA] border-solid"></div>
            <div className="h-full border-l-[0.5px] border-[#002DDA] border-solid"></div>
            <div className="h-full border-l-[0.5px] border-[#002DDA] border-solid"></div>
            <div className="h-full border-l-[0.5px] border-[#002DDA] border-solid"></div>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Hero;
