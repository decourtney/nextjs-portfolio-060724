
const verbs = ["make", "develop", "design", "build", "create", "making"];
const nouns = ["stuff", "art", "products", "experiences", "solutions", "stuff"];

const HomeSVGScroll = () => {

  // This needs to adjust columns based on screen size SO i need to structure columns differently
  return (
    // <div ref={targetRef} className="flex flex-col bg-slate-500">
     

      <div className="grid grid-cols-2 h-full overflow-y-hidden">
        <div className="col-span-1">
          <div className="relative h-[100dvh]">
            <div className="absolute bottom-0 right-0">
              {/* <DevelopSVG /> */}
            </div>
          </div>
          <div className="relative h-[115dvh]">
            <div className="absolute bottom-0 right-0">
              {/* <DevelopSVG /> */}
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative h-[155dvh]">
            <div className="absolute bottom-0 left-0">
              {/* <DevelopSVG /> */}
            </div>
          </div>
          <div className="relative h-[115dvh]">
            <div className="absolute bottom-0 left-0">
              {/* <DevelopSVG /> */}
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default HomeSVGScroll;
