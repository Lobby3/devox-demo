import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./LogoHorizontalDarkModeIcon.module.css";

type LogoHorizontalDarkModeIconType = {
  logoHorizontalDarkModeIco?: string;

  /** Style props */
  logoHorizontalDarkModeIcoWidth?: Property.Width;
  logoHorizontalDarkModeIcoHeight?: Property.Height;
  logoHorizontalDarkModeIcoFlexShrink?: Property.FlexShrink;
};

const LogoHorizontalDarkModeIcon: FunctionComponent<
  LogoHorizontalDarkModeIconType
> = ({
  logoHorizontalDarkModeIco,
  logoHorizontalDarkModeIcoWidth,
  logoHorizontalDarkModeIcoHeight,
  logoHorizontalDarkModeIcoFlexShrink,
}) => {
  const logoHorizontalDarkModeIconStyle: CSS.Properties = useMemo(() => {
    return {
      width: logoHorizontalDarkModeIcoWidth,
      height: logoHorizontalDarkModeIcoHeight,
      flexShrink: logoHorizontalDarkModeIcoFlexShrink,
    };
  }, [
    logoHorizontalDarkModeIcoWidth,
    logoHorizontalDarkModeIcoHeight,
    logoHorizontalDarkModeIcoFlexShrink,
  ]);

  return (
    <img
      className={styles.logoHorizontalDarkModeIcon}
      alt=""
      src={logoHorizontalDarkModeIco}
      style={logoHorizontalDarkModeIconStyle}
    />
  );
};

export default LogoHorizontalDarkModeIcon;
