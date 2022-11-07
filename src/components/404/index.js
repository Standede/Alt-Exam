import React from "react";
import style from "./404.module.css";
import { LostCountIllustration, BackIcon } from "../../assets/svg";

const NoMatch = () => {
  return (
    <main className={style.NoMatch}>
      <section className={style.NoMatch_container}>
        <div>
          <h1>
            <b>Oops!</b> <br /> you've lost count
          </h1>
          <a href="/"> <BackIcon/> go back to counter</a>
        </div>
        <LostCountIllustration className={style.NoMatch_icon} />
      </section>
    </main>
  );
};

export default NoMatch;
