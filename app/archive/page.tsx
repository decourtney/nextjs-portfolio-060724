import React from "react";

const sampleData = [
  "Archive 1",
  "Archive 2",
  "Archive 3",
  "Archive 4",
  "Archive 5",
  "Archive 6",
  "Archive 7",
  "Archive 8",
  "Archive 9",
  "Archive 10",
  "Archive 11",
];

const ArchivePage = () => {
  return (
    <section className="w-full min-h-dvh">
      <div className="h-[300px] content-center text-6xl text-center text-[hsl(var(--nextui-primary-100))]">
        <h1>Archived Versions</h1>
      </div>
      <div className="bg-blue-600 grid grid-cols-10 gap-2">
        {sampleData.map((data, index) => (
          <div
            key={index}
            className="col-span-1 h-[100px] bg-green-600"
          ><h2 className="text-center">{data}</h2></div>
        ))}
      </div>
    </section>
  );
};

export default ArchivePage;
