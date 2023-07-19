import { FunctionComponent } from "react";
import styles from "./Splash.module.css";
const Splash: FunctionComponent = () => {
  return (
    <div className={styles.splash}>
      <div className={styles.section}>
        <img
          className={styles.logoHorizontalIcon}
          alt=""
          src="/logohorizontal.svg"
        />
      </div>
    </div>
  );
};

export default Splash;
