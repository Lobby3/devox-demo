import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./SizeSmall.module.css";

type SizeSmallType = {
  /** Style props */
  sizeSmallPosition?: Property.Position;
  ellipseDivBackgroundColor?: Property.BackgroundColor;
};

const SizeSmall: FunctionComponent<SizeSmallType> = ({
  sizeSmallPosition,
  ellipseDivBackgroundColor,
}) => {
  const sizeSmallStyle: CSS.Properties = useMemo(() => {
    return {
      position: sizeSmallPosition,
    };
  }, [sizeSmallPosition]);

  const ellipseDivStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: ellipseDivBackgroundColor,
    };
  }, [ellipseDivBackgroundColor]);

  return (
    <div className={styles.sizesmall} style={sizeSmallStyle}>
      <div className={styles.sizesmallChild} style={ellipseDivStyle} />
    </div>
  );
};

export default SizeSmall;
