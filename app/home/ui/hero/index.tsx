import Image from "next/image";

function Hero() {
  const svgPattern = `
<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27">
  <rect width="27" height="27" fill="#FBFBFB"/>
  <path d="M27 0 L0 0 L0 27" fill="none" stroke="#002DDA" stroke-width="0.2"/>
</svg>
`;

  return (
    <>
      <section className="relative top-0 left-0 w-full h-screen ">
        <div className="w-full h-full absolute top-0 left-0">
          <div className="relative top-0 left-0 w-full h-full flex">
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className="font-serif   tracking-tight">
                <span className="text-7xl italic tracking-tight">turning</span>
                <br />
                <span className="text-6xl italic tracking-tight">
                  ideas into
                </span>
                <br />
                <span className="text-[140px] leading-[0.9]">ART</span>
              </p>
            </div> */}
            <div className="w-full h-full flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className="w-[85%] lg:w-[54%] text-xl lg:text-[42px] font-medium tracking-tight text-center leading-[110%] ">
                We create modern digital experiences that combine thoughtful
                design, clean development, and innovative solutions to help
                brands grow and stand out in the digital world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
