import Image from "next/image";

function Hero() {
  const svgPattern = `
<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27">
  <rect width="27" height="27" fill="#FBFBFB"/>
  <path d="M27 0 L0 0 L0 27" fill="none" stroke="#002DDA" stroke-width="0.2"/>
</svg>
`;

  return (
    <section className="w-full h-screen flex items-end justify-end">
      <div className="relative w-full overflow-hidden ">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="block h-full w-full object-cover"
        >
          <source src="/hero-showreel.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default Hero;
