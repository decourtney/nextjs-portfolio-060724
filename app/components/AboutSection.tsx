import AboutContent from "./AboutContent";

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full pt-24 min-h-[100dvh]">
      <div className="w-full h-24 mb-12 text-center text-[hsl(var(--nextui-primary-100))] text-5xl font-bold">
        <h1>ABOUT</h1>
      </div>
      <div>
        <AboutContent />
      </div>
    </section>
  );
};

export default AboutSection;
