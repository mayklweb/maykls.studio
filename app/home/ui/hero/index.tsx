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
        <div
          className="w-full h-full"
          style={{
            backgroundColor: "#FBFBFB",
            backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
              svgPattern
            )}")`,
          }}
        >
          {/* <div className="w-full h-full flex items-start lg:items-end justify-center">
            <h1 className="text-[92px] lg:text-[336px] tracking-tighter leading-[0.66]">
              <span className="font-serif">maykl</span>
              <span className="font-serif italic">s</span>
              <span className="font-sans tracking-tighter lg:tracking-[-20px]">
                tudio
              </span>
            </h1>
          </div> */}

          <div className="w-full h-full absolute top-0 left-0">
            <div className="relative top-0 left-0 w-full h-full flex">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <p className="font-serif   tracking-tight">
                  <span className="text-7xl italic tracking-tight">
                    turning
                  </span>
                  <br />
                  <span className="text-6xl italic tracking-tight">
                    ideas into
                  </span>
                  <br />
                  <span className="text-[140px] leading-[0.9]">ART</span>
                </p>
              </div>
              {/* <div className="absolute top-1/10 left-1/10 lg:top-1/6 lg:left-1/6">
                <Image
                  src="/about.avif"
                  alt=""
                  width={1920 / 12}
                  height={1080 / 12}
                />
              </div>
              <div className="absolute top-2/10 right-1/10 lg:top-1/6 lg:right-1/6">
                <Image
                  src="/about.avif"
                  alt=""
                  width={1920 / 12}
                  height={1080 / 12}
                />
              </div>
              <div className="absolute bottom-2/10 left-1/10 lg:bottom-2/6 lg:left-1/8">
                <Image
                  src="/about.avif"
                  alt=""
                  width={1920 / 12}
                  height={1080 / 12}
                />
              </div>
              <div className="absolute bottom-1/10 right-1/10 lg:bottom-2/6 lg:right-1/8">
                <Image
                  src="/about.avif"
                  alt=""
                  width={1920 / 12}
                  height={1080 / 12}
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
