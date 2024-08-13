import AboutContent from "./AboutContent";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative w-full sm:w-[90%] mx-auto pt-16 min-h-[100dvh]"
    >
      <div className="w-full h-24 text-center text-[hsl(var(--nextui-primary-100))] text-5xl font-bold">
        <h1>ABOUT</h1>
      </div>
      <AboutContent />
    </section>
  );
};

export default AboutSection;
