import HomeWordScroll from "./HomeWordScroll";
import { NameSVG } from "../svgs";

const HomeSection = () => {
  return (
    <section id="home" className="mx-auto font-montserrat">
      <div className="w-[80%] lg:w-[60%] pt-16 mx-auto">
        <NameSVG />
      </div>

      <HomeWordScroll />
    </section>
  );
};

export default HomeSection;
