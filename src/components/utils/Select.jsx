import { useState, useEffect, useRef } from 'react';

import { IoMdArrowDropdown } from "react-icons/io";


const Select = ({ className, options, onChange }) => {

  const defaultValue = options[0];

  const [selected, setSelected] = useState(defaultValue);
  const [showOptions, setShowOptions] = useState(false);
  const selectRef = useRef(null);


  const handleOptionClick = option => {

    onChange(option);
    setSelected(option);
    setShowOptions(false);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div ref={selectRef} className={`${className} relative inline-block`}>
      <div
        className={`
          wrapper
          flex justify-between items-center border
          rounded cursor-pointer
          bg-white
        `}
        onClick={() => setShowOptions(!showOptions)}
      >
        <div className="select-selected w-full py-2 px-4 text-black">
          <span
            className={`${selected === defaultValue ? "opacity-50" : ""}`}
          >
            {selected}
          </span>
        </div>
        <div className="down-arrow text-xs me-5 font-semibold">
          <IoMdArrowDropdown/>
        </div>
      </div>

      {showOptions && (
        <div className="select-items absolute top-full left-0 right-0 border bg-white">
          {options.map((option, index) => (
            <div
              key={index}
              className={`
                py-2 px-4
                cursor-pointer
                text-black hover:bg-secondaryLight
                ${selected === option ? 'bg-primaryLight' : ''}
              `}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
