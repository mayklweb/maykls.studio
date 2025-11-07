import Link from "next/link";
import React from "react";

function Contact() {
  return (
    <section>
      <div className="w-full h-screen p-10 flex items-center justify-center">
        <div className=" flex flex-col items-center gap-10">
          <h1 className="text-5xl lg:text-9xl font-serif text-center font-semibold">
            Ready for your
            <br />
            game-changing
            <br />
            <span className="italic">website?</span>
          </h1>
          <p className="text-center tracking-tight">
            Step on the Double Play court and
            <br />
            request a project with a few clicks.
          </p>
          <Link href={"/#"} className="text-sm">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Contact;
