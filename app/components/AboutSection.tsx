import React from "react";
import { useStateContext } from "../hooks/useStateContex";

const AboutSection = ({ toggleKey }: { toggleKey: string }) => {
  const { state } = useStateContext();

  return (
    <section id="about" className="w-full h-dvh bg-orange-900">
      {state.toggles[toggleKey] ? (
        <div>Content is now enabled!</div>
      ) : (
        <div>Waiting for completion...</div>
      )}
    </section>
  );
};

export default AboutSection;
