"use client";

import { useRef } from "react";
import AboutBio from "./AboutBio";
import { useInView } from "framer-motion";

const AboutContent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "some", once: false });

  return (
    <div className="w-[90%] lg:w-full h-full mx-auto text-xl text-primary-100">
      <div className="grid grid-cols-5 w-full lg:w-full xl:w-[70%] mx-auto gap-4">
        <div
          ref={ref}
          className="col-span-5 lg:col-span-3 max-h-[300px] xl:max-h-[300px] mx-auto lg:ml-auto lg:mr-0 rounded-xl shadow-md shadow-[hsl(var(--nextui-primary-100))]"
          style={{
            scale: isInView ? 1 : 0.98,
            transition: "all 0.5s ease",
          }}
        >
          <img
            src={"/images/profilepic.jpg"}
            className="w-full h-full rounded-xl object-cover"
            alt="Lake"
          />
        </div>

        <p className="col-span-5 lg:col-span-2 lg:text-xl xl:text-xl font-normal leading-tight xl:leading-relaxed">
          I'm a software developer passionate about creating engaging user
          experiences and visually appealing designs. With a rich history in IT
          and a solid foundation in web development, I'm always seeking new
          opportunities to learn and grow as a developer.
        </p>
      </div>

      <div className="mt-6 lg:mt-12 text-medium space-y-4 lg:space-y-0">
        <p className="lg:ml-24 xl:ml-44 text-3xl lg:text-4xl text-left font-medium">
          A few more bytes...
        </p>
        <p className="lg:w-[40%] xl:w-[35%] ml-auto xl:mr-24 text-left lg:-translate-y-[25%]">
          I developed a love for technology at a young age when we got our first
          family PC — Pentium 286 running Windows 2.1. My love of coding came
          later as a teenager from the excitement of piecing together HTML to
          create my first GeoCities fansite (Diablo 1, of course).
        </p>
        <p className="lg:w-[45%] xl:w-[40%] text-left xl:ml-6 lg:-translate-y-[40%]">
          Then I joined the US Marine Corps and fell into cybersecurity. I've
          remained in this field but have always kept programming within reach
          through traditional college courses, online learning, and writing
          automation scripts. To advance my understanding of programming
          concepts, I dove deep into the Unity3D game engine, producing numerous
          small projects for my kids. I even published a Flappy Bird clone to
          experience the full start-to-publish process. Additionally, I enjoy
          being artistic, so I dabble in 3D modeling, texturing, and animation.
        </p>
        <p className="lg:w-[45%] xl:w-[45%] ml-auto xl:mr-6 text-left lg:-translate-y-[100%]">
          As I continue to evolve as a developer, I'm excited to take on new
          challenges and collaborate with like-minded individuals who are
          equally passionate about technology. Whether it's building innovative
          web applications, exploring new programming paradigms, or creating
          captivating digital experiences, I'm driven by the endless
          possibilities that coding offers. I'm eager to bring my unique blend
          of skills and experiences to new projects and make a meaningful
          impact.
        </p>
      </div>
    </div>
  );
};

export default AboutContent;
