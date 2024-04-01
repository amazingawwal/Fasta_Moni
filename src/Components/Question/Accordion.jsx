import React, { useState } from 'react';
import CapitalText from '../Texts/CapitalText';


function AccordionSection() {


const [activeIndex, setActiveIndex] = useState(null);

  const content = {
    1: <CapitalText className="trusted" text="There are many variation of available but many have suffered alteration"/>,
    2: "Content for section 2",
    3: "Content for section 3",
    4: "Content for section 4",
    5: "Content for section 5"
  };

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const getToggleSymbol = (index) => {
    return activeIndex === index ? '-' : '+';
  };

  return (
    <div className="accordion">
      <ol>
        {[1, 2, 3, 4, 5].map((index) => (
          <li key={index} className={activeIndex === index ? 'active' : ''} onClick={() => handleClick(index)}>
            <div className="accordion-header">Section {index} {getToggleSymbol(index)}</div>
            <div className={`accordion-content ${activeIndex === index ? 'open' : ''}`}>
              {content[index]}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default AccordionSection;
