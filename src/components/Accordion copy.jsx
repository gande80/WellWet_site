import React, { useState } from "react";
import hand from './../assets/paw-print.svg'
const Accordion = ({ title, answer,  }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2 my-4 bg-[#C5E8EE] rounded-xl">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between gap-3  text-center w-full  px-4 py-3 "
      >
        <span className="text-center">{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <img
          className=""
          src={hand}
        >
        </img>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="text-sm overflow-hidden py-1 px-4" >{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
