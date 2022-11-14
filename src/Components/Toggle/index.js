import React from 'react'
import styles from './Toggle.module.scss'
import { useState } from 'react';
import cn from "classnames";

const Toggle = () => {


    const [deactive, setDeactive] = useState(false);
  const ToggleDeactive = (active) => {
    setDeactive(!active);

  };
  return (


    <div className={cn(styles.container, deactive ? styles.actives : " ")}>
        <div className={cn(styles.content , `${deactive ? styles.active : ""}`)} onClick={() => ToggleDeactive(deactive)} >
            <span className={cn(styles.menus, deactive ? styles.onactive : " ")}></span>
        </div>
    </div>
  )
}

export default Toggle