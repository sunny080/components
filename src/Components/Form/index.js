import React from "react";
import styles from "./Form.module.scss";
import Input from "../Input";
const From = () => {
  return (
    <div className={styles.container}>
        <h1>Create Account</h1>
      <form action="">
        <div className={styles.from}>
          <Input Name={"First Name"} placeholder={"Username"} className={styles.feild} />
          <Input Name={"Last Name"} placeholder={"Last Name"} className={styles.feild} />
        </div>
        <div className={styles.from}>
          <Input Name={"Email Address"} placeholder={"Enter Your Email"} className={styles.feild} />
          <Input Name={"Compnay Url"} placeholder={"Url"} className={styles.feild} />
        </div>
      </form>
    </div>
  );
};

export default From;
