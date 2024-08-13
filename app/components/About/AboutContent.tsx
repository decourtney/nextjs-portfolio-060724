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

      <div className="mt-12 lg:mt-16 text-medium space-y-4 lg:space-y-0">
        <p className="lg:ml-[20%] xl:ml-[20%] text-3xl lg:text-4xl text-left font-medium">
          A few more bytes...
        </p>
        <p className="lg:w-[40%] xl:w-[35%] ml-auto xl:mr-[15%] text-center lg:-translate-y-[30%]">
          In recent years, I've focused on building web applications using HTML,
          CSS, and JavaScript. On the front end, I primarily leverage React
          frameworks to create dynamic and smooth user experiences, while on the
          backend, I work with MySQL or MongoDB depending on the project's
          requirements. For cloud computing, hosting, and storage, I rely on AWS
          services.
        </p>
        <p className="lg:w-[45%] xl:w-[40%] lg:ml-[15%] xl:mr-6 text-center lg:-translate-y-[0%]">
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
