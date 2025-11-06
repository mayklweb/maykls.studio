import Image from "next/image";

export default function Home() {
  return (
    <div className="relative top-0 left-0">
      <section className="relative top-0 left-0 w-full h-screen overflow-hidden">
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
      <section className="">
        <div className="p-10 flex">
          <div className="w-1/2 flex items-start justify-between">
            <div className="w-2/3 flex justify-between items-center">
              <h1 className="text-6xl font-serif">Mission</h1>
              <p className="text-sm tracking-tight">
                What is
                <br />
                <span className="font-serif">maykls</span>.studio ?
              </p>
            </div>
          </div>

          <div className="w-1/2">
            <p className="w-3/4 text-3xl tracking-tight font-medium">
              At <span className="font-serif tracking-tight">maykls</span>.
              <span className="font-sans tracking-tighter">studio</span>, we’re
              on the mission to create websites and brand design that spark
              excitement – just like a Grand Slam Tennis match. Partnering with
              exceptional brands that share our ambition for good design. It’s
              not just about your{" "}
              <span className="font-serif tracking-tight italic"> website</span>
              . It’s about game, set, and match for your brand.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="relative">
          <div>
            <Image
              width={1400}
              height={574}
              src={"/maykls.svg"}
              alt="maykls svg"
              className="w-full h-full"
            />
          </div>
          <div className="bg-[#002BBA] text-[#FBFBFB] py-5">
            <div className="w-full p-10 flex items-center justify-between">
              <h1 className="text-6xl font-serif tracking-tight">
                Selected work <sup>03</sup>
              </h1>
              <p className="w-1/4 text-2xl tracking-tighter">
                We helped more than 70+ brands, start-ups and agencies to level
                up their{" "}
                <span className="font-serif italic tracking-tight">
                  website
                </span>{" "}
                game!
              </p>
            </div>
            <div className="mt-10">
              <div className="w-full border-b border-solid border-[#FBFBFB] cursor-pointer group">
                <div className="px-10 py-10 flex items-end justify-between relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:z-[-1] after:bg-[#FBFBFB] z-1 group-hover:text-[#002BBA] group-hover:after:h-full after:transition-all after:ease-out after:duration-300 transition-all ease-out duration-300">
                  <p className="text-lg tracking-tighter">Agency</p>
                  <p className="text-lg tracking-tighter">Website</p>
                  <h1 className="text-8xl font-serif">Ondevi</h1>
                  <p className="text-lg tracking-tighter">Year</p>
                  <p className="text-lg tracking-tighter">2025</p>
                </div>
              </div>
              <div className="w-full border-b border-solid border-[#FBFBFB] cursor-pointer group">
                <div className="px-10 py-10 flex items-end justify-between relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:z-[-1] after:bg-[#FBFBFB] z-1 group-hover:text-[#002BBA] group-hover:after:h-full after:transition-all after:ease-out after:duration-300 transition-all ease-out duration-300">
                  <p className="text-lg tracking-tighter">Agency</p>
                  <p className="text-lg tracking-tighter">Website</p>
                  <h1 className="text-8xl font-serif">Ondevi</h1>
                  <p className="text-lg tracking-tighter">Year</p>
                  <p className="text-lg tracking-tighter">2025</p>
                </div>
              </div>
              <div className="w-full border-b border-solid border-[#FBFBFB] cursor-pointer group">
                <div className="px-10 py-10 flex items-end justify-between relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:z-[-1] after:bg-[#FBFBFB] z-1 group-hover:text-[#002BBA] group-hover:after:h-full after:transition-all after:ease-out after:duration-300 transition-all ease-out duration-300">
                  <p className="text-lg tracking-tighter">Agency</p>
                  <p className="text-lg tracking-tighter">Website</p>
                  <h1 className="text-8xl font-serif">Ondevi</h1>
                  <p className="text-lg tracking-tighter">Year</p>
                  <p className="text-lg tracking-tighter">2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-20 px-10">
          <div>
            <p className="text-5xl font-medium tracking-tighter leading-[120%]">
              <span className="pl-[10%]">From </span>
              baseline to breakthrough. Our process follows a straight game
              plan. Starting with clear{" "}
              <span className="font-serif italic tracking-tight">strategy</span>
              , moving through award-winning{" "}
              <span className="font-serif italic tracking-tight">design</span>,
              and finishing with high-performance{" "}
              <span className="font-serif italic tracking-tight">
                development
              </span>
              . Step by step, we craft websites that do more than just look
              good, but serve a purpose, spark emotions, and drive real business
              impact.
            </p>
          </div>
          <div className="mt-40 grid grid-cols-3 gap-16">
            <div className="border-t border-[#002BBA]">
              <div className="flex items-center justify-between py-5">
                <div>
                  <h3 className="text-2xl font-medium tracking-tight">
                    Strategy
                  </h3>
                </div>
                <p className="text-xs tracking-tight">3-4 weeks</p>
              </div>
              <p>
                In a comprehensive workshop, we’ll set the baseline together. By
                analyzing your business, we develop a clear website strategy and
                compelling copywriting – forming a psychological storytelling
                concept that’s finely tuned to your business goals.
              </p>
            </div>
            <div className="border-t border-[#002BBA]">
              <div className="flex items-center justify-between py-5">
                <div>
                  <h3 className="text-2xl font-medium tracking-tight">
                    Design
                  </h3>
                </div>
                <p className="text-xs tracking-tight">3-4 weeks</p>
              </div>
              <p className="text-base ">
                Building on the strategic foundation, we serve the winning shot
                – the web design. Every detail is carefully crafted to create an
                immersive experience. It captivates your target audience,
                sparking excitement with your brand, just like a perfect ace on
                the court.
              </p>
            </div>
            <div className="border-t border-[#002BBA]">
              <div className="flex items-center justify-between py-5">
                <div>
                  <h3 className="text-2xl font-medium tracking-tight">
                    Development
                  </h3>
                </div>
                <p className="text-xs tracking-tight">3-4 weeks</p>
              </div>
              <p>
                Your website will be developed with Webflow. With the precision
                of a champion’s serve, we focus on performance-driven
                development, ensuring your site delivers a seamless, fast, and
                reliable experience that keeps your brand at the top of its
                game.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <hr />
          <div className="overflow-hidden">
            <div className="w-full h-full">
              <Image
                width={2800}
                height={525}
                src={"/maykls.svg"}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <hr />
          <div className="overflow-hidden">
            <div className="w-full h-full">
              <Image
                width={2800}
                height={525}
                src={"/studio.svg"}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <hr />
        </div>
      </section>
      <section>
        <div>
          <div>
            <h1>About US</h1>
          </div>
          <div className="relative">
            <div className="w-full h-screen">
              <Image
                src={"/about.avif"}
                alt=""
                width={1980}
                height={1080}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-full flex items-end justify-end absolute top-0 left-0 p-10">
              <div className="w-full border-t border-[#FBFBFB] flex items-start justify-between pt-5">
                <div>
                  <h1 className="text-[#FBFBFB] text-6xl  tracking-tight">
                    <span className="font-snas italic">
                      Were
                    </span>{" "}
                    <span className="font-serif">maykls</span>.studio
                  </h1>
                </div>
                <div className="w-[40%]">
                  <p className="text-[#FBFBFB] text-3xl font-medium tracking-tight">
                    <span className="pl-20">A</span> creative boutique studio
                    crafting exceptional
                    <span className="font-serif italic"> websites</span> with sharp
                    messaging, award-winning design, and smooth animations. All
                    delivered with the precision, passion, and dedication of a
                    Grand Slam Tennis match.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
