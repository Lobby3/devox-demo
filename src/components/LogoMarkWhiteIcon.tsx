import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./LogoMarkWhiteIcon.module.css";

type LogoMarkWhiteIconType = {
  logoMarkWhiteIconLogoMark?: string;

  /** Style props */
  logoMarkWhiteIconWidth?: Property.Width;
  logoMarkWhiteIconHeight?: Property.Height;
  logoMarkWhiteIconFlexShrink?: Property.FlexShrink;
};

const LogoMarkWhiteIcon: FunctionComponent<LogoMarkWhiteIconType> = ({
  logoMarkWhiteIconLogoMark,
  logoMarkWhiteIconWidth,
  logoMarkWhiteIconHeight,
  logoMarkWhiteIconFlexShrink,
}) => {
  const logoMarkWhiteIconStyle: CSS.Properties = useMemo(() => {
    return {
      width: logoMarkWhiteIconWidth,
      height: logoMarkWhiteIconHeight,
      flexShrink: logoMarkWhiteIconFlexShrink,
    };
  }, [
    logoMarkWhiteIconWidth,
    logoMarkWhiteIconHeight,
    logoMarkWhiteIconFlexShrink,
  ]);

  return (
    <img
      className={styles.logoMarkWhiteIcon}
      alt=""
      src={logoMarkWhiteIconLogoMark}
      style={logoMarkWhiteIconStyle}
    />
  );
};

export default LogoMarkWhiteIcon;
