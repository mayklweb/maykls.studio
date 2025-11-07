import { Header } from "@/app/widgets";
import { useRef } from "react";

function Hero() {
  const bannerRef = useRef<HTMLElement | null>(null);

  return (
    <>
      <Header heroRef={bannerRef} />
      <section
        ref={bannerRef}
        className="relative top-0 left-0 w-full h-screen overflow-hidden"
      >
        <video
          className="absolute top-0 w-full h-full object-cover"
          src="https://cdn.prod.website-files.com/67fcd4974b30a00d13095550%2F682209dcc6a9b4d97675e143_DoublePlay_Loop_FullHD-transcode.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Build your website</h1>
        </div>
      </section>
    </>
  );
}

export default Hero;
