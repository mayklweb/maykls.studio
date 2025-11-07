"use client";
import App from "./home";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative top-0 left-0">
      <App />

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
    </div>
  );
}
