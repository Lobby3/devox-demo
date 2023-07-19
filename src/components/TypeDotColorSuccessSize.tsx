import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import SizeSmall from "./SizeSmall";
import styles from "./TypeDotColorSuccessSize.module.css";

type TypeDotColorSuccessSizeType = {
  text: string;
  dot: boolean;

  /** Style props */
  typeDotColorSuccessSizePosition?: Property.Position;
};

const TypeDotColorSuccessSize: FunctionComponent<
  TypeDotColorSuccessSizeType
> = ({ text = "Label", dot = true, typeDotColorSuccessSizePosition }) => {
  const typeDotColorSuccessSizeStyle: CSS.Properties = useMemo(() => {
    return {
      position: typeDotColorSuccessSizePosition,
    };
  }, [typeDotColorSuccessSizePosition]);

  return (
    <div
      className={styles.typedotColorsuccessSize}
      style={typeDotColorSuccessSizeStyle}
    >
      <div className={styles.badgeLayer}>
        <SizeSmall
          sizeSmallPosition="unset"
          ellipseDivBackgroundColor="#53b483"
        />
        <div className={styles.label}>{text}</div>
      </div>
    </div>
  );
};

export default TypeDotColorSuccessSize;
