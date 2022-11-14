import React from "react";
import styles from "./Drop.module.scss";
import { useState } from "react";
import cn from "classnames";

const DropDownSelect = ({icon, options }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const setSelectedThenCloseDropdown = (index) => {
    setSelectedOption(index);
    setIsOptionsOpen(false);
  };

  const handleKeyDown = (index) => (e) => {
    switch (e.key) {
      case " ":
      case "SpaceBar":
      case "Enter":
        e.preventDefault();
        setSelectedThenCloseDropdown(index);
        break;
      default:
        break;
    }
  };

  const handleListKeyDown = (e) => {
    switch (e.key) {
      case "Escape":
        e.preventDefault();
        setIsOptionsOpen(false);
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedOption(
          selectedOption - 1 >= 0 ? selectedOption - 1 : options.length - 1
        );
        break;
      case "ArrowDown":
        e.preventDefault();
        setSelectedOption(
          selectedOption == options.length - 1 ? 0 : selectedOption + 1
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <button type="button" aria-haspopup='listbox' aria-expanded={isOptionsOpen} onClick={toggleOptions} className={isOptionsOpen ? cn(styles.tabs, styles['expended']) : ''} onkeyDown={handleKeyDown}  >
          {options[selectedOption] }{icon}
        </button>
        <ul className={ isOptionsOpen ? cn(styles.option ,styles['show']) : "" } role="listbox" aria-activedescendant={options[selectedOption]} tabIndex={-1} onKeyDown={handleListKeyDown} >
          {options.map((option, index) => (
            <li id={option} role='option' aria-selected={selectedOption == index}  tabIndex={0} onKeyDown={handleKeyDown(index)} onClick={() => {setSelectedThenCloseDropdown(index);}} >{option}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDownSelect;
