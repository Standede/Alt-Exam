import React from "react";
import style from "./FallBack.module.css";
import { BackIcon } from "../../assets/svg";

const FallBack = ({error}) => {
  return (
    <main className={style.FallBack}>
      <section className={style.FallBack_container}>
        <div>
          <h1>
            <b>Oops!</b> <br />
            {error.message}
          </h1>
          <a href="/"> <BackIcon/> go back to counter</a>
        </div>
      </section>
    </main>
  );
};

export default FallBack;
