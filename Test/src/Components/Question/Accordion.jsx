import React, { useState } from 'react';


function AccordionSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      <ol>
        <li className={activeIndex === 1 ? 'active' : ''} onClick={() => handleClick(1)}>
          <div className="accordion-header">Section 1</div>
          <div className={`accordion-content ${activeIndex === 1 ? 'open' : ''}`}>
            Content for section 1
          </div>
        </li>
        <li className={activeIndex === 2 ? 'active' : ''} onClick={() => handleClick(2)}>
          <div className="accordion-header">Section 2</div>
          <div className={`accordion-content ${activeIndex === 2 ? 'open' : ''}`}>
            Content for section 2
          </div>
        </li>
        <li className={activeIndex === 3 ? 'active' : ''} onClick={() => handleClick(3)}>
          <div className="accordion-header">Section 3</div>
          <div className={`accordion-content ${activeIndex === 3 ? 'open' : ''}`}>
            Content for section 3
          </div>
        </li>
        <li className={activeIndex === 4 ? 'active' : ''} onClick={() => handleClick(4)}>
          <div className="accordion-header">Section 4</div>
          <div className={`accordion-content ${activeIndex === 4 ? 'open' : ''}`}>
            Content for section 4
          </div>
        </li>
        <li className={activeIndex === 5 ? 'active' : ''} onClick={() => handleClick(5)}>
          <div className="accordion-header">Section 5</div>
          <div className={`accordion-content ${activeIndex === 5 ? 'open' : ''}`}>
            Content for section 5
          </div>
        </li>
      </ol>
    </div>
  );
}

export default AccordionSection;
