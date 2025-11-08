export default function Process() {
  return (
    <section>
      <div className="px-5 lg:px-10 mt-10">
        <div className="lg:hidden ">
          <h1 className="text-5xl lg:text-6xl font-serif font-semibold">
            Process
          </h1>
        </div>
        <div className="mt-5">
          <p className="text-2xl lg:text-5xl font-medium tracking-tight leading-[110%] lg:leading-[130%] text-justify">
            <span className="lg:pl-40">From </span>
            baseline to breakthrough. Our process follows a straight game plan.
            Starting with clear{" "}
            <span className="font-serif italic tracking-tight">strategy</span>,
            moving through award-winning{" "}
            <span className="font-serif italic tracking-tight">design</span>,
            and finishing with high-performance{" "}
            <span className="font-serif italic tracking-tight">
              development
            </span>
            . Step by step, we craft websites that do more than just look good,
            but serve a purpose, spark emotions, and drive real business impact.
          </p>
        </div>
        <div className="mt-20 lg:mt-40 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="border-t border-[#002BBA]">
            <div className="flex items-center justify-between py-4">
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
            <div className="flex items-center justify-between py-4">
              <div>
                <h3 className="text-2xl font-medium tracking-tight">Design</h3>
              </div>
              <p className="text-xs tracking-tight">3-4 weeks</p>
            </div>
            <p className="text-base ">
              Building on the strategic foundation, we serve the winning shot –
              the web design. Every detail is carefully crafted to create an
              immersive experience. It captivates your target audience, sparking
              excitement with your brand, just like a perfect ace on the court.
            </p>
          </div>
          <div className="border-t border-[#002BBA]">
            <div className="flex items-center justify-between py-4">
              <div>
                <h3 className="text-2xl font-medium tracking-tight">
                  Development
                </h3>
              </div>
              <p className="text-xs tracking-tight">3-4 weeks</p>
            </div>
            <p>
              Your website will be developed with Webflow. With the precision of
              a champion’s serve, we focus on performance-driven development,
              ensuring your site delivers a seamless, fast, and reliable
              experience that keeps your brand at the top of its game.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
