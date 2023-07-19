import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Splash1.module.css";
const Splash1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSectionContainerClick = useCallback(() => {
    navigate("/home-list");
  }, [navigate]);

  return (
    <div className={styles.splash}>
      <div className={styles.section} onClick={onSectionContainerClick}>
        <img
          className={styles.logoHorizontalIcon}
          alt=""
          src="/logohorizontal1.svg"
        />
      </div>
    </div>
  );
};

export default Splash1;
