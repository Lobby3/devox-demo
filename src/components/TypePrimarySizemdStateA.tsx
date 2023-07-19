import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./TypePrimarySizemdStateA.module.css";

type TypePrimarySizemdStateAType = {
  heroiconsOutlineenvelope?: string;
  text: string;
  heroiconsOutlinearrowRigh?: string;
  rightIcon: boolean;
  leftIcon: boolean;

  /** Style props */
  typePrimarySizemdStateAPosition?: Property.Position;
  typePrimarySizemdStateABackgroundColor?: Property.BackgroundColor;
  typePrimarySizemdStateAPadding?: Property.Padding;
  typePrimarySizemdStateABoxShadow?: Property.BoxShadow;
  typePrimarySizemdStateACursor?: Property.Cursor;
  typePrimarySizemdStateABorder?: Property.Border;
  typePrimarySizemdStateABoxSizing?: Property.BoxSizing;
  stateLayerGap?: Property.Gap;
  heroiconsOutlineenvelopeWidth?: Property.Width;
  heroiconsOutlineenvelopeHeight?: Property.Height;
  heroiconsOutlineenvelopePosition?: Property.Position;
  heroiconsOutlineenvelopeBorderRadius?: Property.BorderRadius;
  heroiconsOutlineenvelopeObjectFit?: Property.ObjectFit;
  buttonFontSize?: Property.FontSize;
  buttonLineHeight?: Property.LineHeight;
  buttonColor?: Property.Color;
  heroiconsOutlinearrowRighWidth?: Property.Width;
  heroiconsOutlinearrowRighHeight?: Property.Height;

  /** Action props */
  onButtonContainer9Click?: () => void;
};

const TypePrimarySizemdStateA: FunctionComponent<
  TypePrimarySizemdStateAType
> = ({
  heroiconsOutlineenvelope,
  text = "Button",
  heroiconsOutlinearrowRigh,
  rightIcon = true,
  leftIcon = true,
  typePrimarySizemdStateAPosition,
  typePrimarySizemdStateABackgroundColor,
  typePrimarySizemdStateAPadding,
  typePrimarySizemdStateABoxShadow,
  typePrimarySizemdStateACursor,
  typePrimarySizemdStateABorder,
  typePrimarySizemdStateABoxSizing,
  stateLayerGap,
  heroiconsOutlineenvelopeWidth,
  heroiconsOutlineenvelopeHeight,
  heroiconsOutlineenvelopePosition,
  heroiconsOutlineenvelopeBorderRadius,
  heroiconsOutlineenvelopeObjectFit,
  buttonFontSize,
  buttonLineHeight,
  buttonColor,
  heroiconsOutlinearrowRighWidth,
  heroiconsOutlinearrowRighHeight,
  onButtonContainer9Click,
}) => {
  const typePrimarySizemdStateAStyle: CSS.Properties = useMemo(() => {
    return {
      position: typePrimarySizemdStateAPosition,
      backgroundColor: typePrimarySizemdStateABackgroundColor,
      padding: typePrimarySizemdStateAPadding,
      boxShadow: typePrimarySizemdStateABoxShadow,
      cursor: typePrimarySizemdStateACursor,
      border: typePrimarySizemdStateABorder,
      boxSizing: typePrimarySizemdStateABoxSizing,
    };
  }, [
    typePrimarySizemdStateAPosition,
    typePrimarySizemdStateABackgroundColor,
    typePrimarySizemdStateAPadding,
    typePrimarySizemdStateABoxShadow,
    typePrimarySizemdStateACursor,
    typePrimarySizemdStateABorder,
    typePrimarySizemdStateABoxSizing,
  ]);

  const stateLayerStyle: CSS.Properties = useMemo(() => {
    return {
      gap: stateLayerGap,
    };
  }, [stateLayerGap]);

  const heroiconsOutlineenvelopeStyle: CSS.Properties = useMemo(() => {
    return {
      width: heroiconsOutlineenvelopeWidth,
      height: heroiconsOutlineenvelopeHeight,
      position: heroiconsOutlineenvelopePosition,
      borderRadius: heroiconsOutlineenvelopeBorderRadius,
      objectFit: heroiconsOutlineenvelopeObjectFit,
    };
  }, [
    heroiconsOutlineenvelopeWidth,
    heroiconsOutlineenvelopeHeight,
    heroiconsOutlineenvelopePosition,
    heroiconsOutlineenvelopeBorderRadius,
    heroiconsOutlineenvelopeObjectFit,
  ]);

  const buttonStyle: CSS.Properties = useMemo(() => {
    return {
      fontSize: buttonFontSize,
      lineHeight: buttonLineHeight,
      color: buttonColor,
    };
  }, [buttonFontSize, buttonLineHeight, buttonColor]);

  const heroiconsOutlinearrowRightStyle: CSS.Properties = useMemo(() => {
    return {
      width: heroiconsOutlinearrowRighWidth,
      height: heroiconsOutlinearrowRighHeight,
    };
  }, [heroiconsOutlinearrowRighWidth, heroiconsOutlinearrowRighHeight]);

  return (
    <div
      className={styles.typeprimarySizemdStatea}
      style={typePrimarySizemdStateAStyle}
      onClick={onButtonContainer9Click}
    >
      <div className={styles.stateLayer} style={stateLayerStyle}>
        {leftIcon && (
          <img
            className={styles.heroiconsOutlineenvelope}
            alt=""
            src={heroiconsOutlineenvelope}
            style={heroiconsOutlineenvelopeStyle}
          />
        )}
        <div className={styles.button} style={buttonStyle}>
          {text}
        </div>
        {rightIcon && (
          <img
            className={styles.heroiconsOutlineenvelope}
            alt=""
            src={heroiconsOutlinearrowRigh}
            style={heroiconsOutlinearrowRightStyle}
          />
        )}
      </div>
    </div>
  );
};

export default TypePrimarySizemdStateA;
