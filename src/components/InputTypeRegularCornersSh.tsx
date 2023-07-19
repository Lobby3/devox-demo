import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./InputTypeRegularCornersSh.module.css";

type InputTypeRegularCornersShType = {
  regularText: string;
  heroiconsOutlinechevronDo?: string;
  helpText: string;
  regularleadIcon: boolean;
  regulartrailIcon: boolean;
  showLabel: boolean;
  showHelp: boolean;
  showHintText?: boolean;

  /** Style props */
  inputTypeRegularCornersShPosition?: Property.Position;
  emailColor?: Property.Color;
};

const InputTypeRegularCornersSh: FunctionComponent<
  InputTypeRegularCornersShType
> = ({
  regularText = "hussain@finesse.com",
  heroiconsOutlinechevronDo,
  helpText = "Helping text for user",
  regularleadIcon = true,
  regulartrailIcon = false,
  showLabel = true,
  showHelp = true,
  showHintText,
  inputTypeRegularCornersShPosition,
  emailColor,
}) => {
  const inputTypeRegularCornersShStyle: CSS.Properties = useMemo(() => {
    return {
      position: inputTypeRegularCornersShPosition,
    };
  }, [inputTypeRegularCornersShPosition]);

  const emailStyle: CSS.Properties = useMemo(() => {
    return {
      color: emailColor,
    };
  }, [emailColor]);

  return (
    <div
      className={styles.inputTyperegularCornerssh}
      style={inputTypeRegularCornersShStyle}
    >
      <div className={styles.inputStateLayer}>
        <div className={styles.inputStateLayer}>
          {showLabel && (
            <div className={styles.email} style={emailStyle}>
              Email
            </div>
          )}
          <div className={styles.inputLayer}>
            <div className={styles.input}>
              {regularleadIcon && (
                <img
                  className={styles.heroiconsOutlineenvelope}
                  alt=""
                  src="/heroiconsoutlineenvelope1.svg"
                />
              )}
              <div className={styles.hussainfinessecom}>{regularText}</div>
            </div>
            {regulartrailIcon && (
              <img
                className={styles.heroiconsOutlinechevronDown}
                alt=""
                src={heroiconsOutlinechevronDo}
              />
            )}
          </div>
        </div>
        {showHelp && (
          <div className={styles.helpText}>
            <img
              className={styles.heroiconsOutlinequestionMar}
              alt=""
              src="/heroiconsoutlinequestionmarkcircle.svg"
            />
            {showHintText && <div className={styles.hintText}>{helpText}</div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputTypeRegularCornersSh;
