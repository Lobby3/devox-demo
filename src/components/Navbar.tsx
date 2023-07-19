import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import LogoHorizontalDarkModeIcon from "./LogoHorizontalDarkModeIcon";
import TypePrimarySizemdStateA from "./TypePrimarySizemdStateA";
import styles from "./Navbar.module.css";

type NavbarType = {
  logoHorizontalDarkMode?: string;
  required?: string;
  heroiconsMiniglobeAsiaAus?: string;
  heroiconsOutlinearrowRigh?: string;
  heroiconsSolidchatBubbleB?: string;
  heroiconsOutlinearrowRigh2?: string;
  heroiconsSolidfaceSmile?: string;
  heroiconsOutlinearrowRigh4?: string;
  heroiconsMiniwallet?: string;
  heroiconsOutlinearrowRigh6?: string;
  heroiconsOutlinearrowRigh1?: boolean;
  heroiconsOutlinearrowRigh3?: boolean;
  heroiconsOutlinearrowRigh5?: boolean;
  heroiconsOutlinearrowRigh7?: boolean;

  /** Style props */
  navbarFlexShrink?: Property.FlexShrink;
  navbarZIndex?: Property.ZIndex;
  heroiconsMiniwalletPosition?: Property.Position;
  heroiconsMiniwalletBorderRadius?: Property.BorderRadius;
  heroiconsMiniwalletObjectFit?: Property.ObjectFit;
};

const Navbar: FunctionComponent<NavbarType> = ({
  logoHorizontalDarkMode,
  required,
  heroiconsMiniglobeAsiaAus,
  heroiconsOutlinearrowRigh,
  heroiconsSolidchatBubbleB,
  heroiconsOutlinearrowRigh2,
  heroiconsSolidfaceSmile,
  heroiconsOutlinearrowRigh4,
  heroiconsMiniwallet,
  heroiconsOutlinearrowRigh6,
  heroiconsOutlinearrowRigh1,
  heroiconsOutlinearrowRigh3,
  heroiconsOutlinearrowRigh5,
  heroiconsOutlinearrowRigh7,
  navbarFlexShrink,
  navbarZIndex,
  heroiconsMiniwalletPosition,
  heroiconsMiniwalletBorderRadius,
  heroiconsMiniwalletObjectFit,
}) => {
  const navbarStyle: CSS.Properties = useMemo(() => {
    return {
      flexShrink: navbarFlexShrink,
      zIndex: navbarZIndex,
    };
  }, [navbarFlexShrink, navbarZIndex]);

  const heroiconsOutlineenvelopeStyle: CSS.Properties = useMemo(() => {
    return {
      position: heroiconsMiniwalletPosition,
      borderRadius: heroiconsMiniwalletBorderRadius,
      objectFit: heroiconsMiniwalletObjectFit,
    };
  }, [
    heroiconsMiniwalletPosition,
    heroiconsMiniwalletBorderRadius,
    heroiconsMiniwalletObjectFit,
  ]);

  return (
    <div className={styles.navbar} style={navbarStyle}>
      <div className={styles.logo}>
        <LogoHorizontalDarkModeIcon
          logoHorizontalDarkModeIco="/logohorizontaldarkmode1.svg"
          logoHorizontalDarkModeIcoWidth="93.43px"
          logoHorizontalDarkModeIcoHeight="24px"
          logoHorizontalDarkModeIcoFlexShrink="0"
        />
        <div className={styles.input}>
          <img className={styles.requiredIcon} alt="" src={required} />
          <div className={styles.text}>
            <div className={styles.downloadChimnneyFo}>Search</div>
          </div>
        </div>
      </div>
      <div className={styles.navigation}>
        <TypePrimarySizemdStateA
          heroiconsOutlineenvelope="/heroiconsminiglobeasiaaustralia.svg"
          text="Discover"
          heroiconsOutlinearrowRigh="/heroiconsoutlinearrowright2.svg"
          rightIcon={false}
          leftIcon
          typePrimarySizemdStateAPosition="unset"
          typePrimarySizemdStateABackgroundColor="unset"
          typePrimarySizemdStateAPadding="unset"
          typePrimarySizemdStateABoxShadow="unset"
          typePrimarySizemdStateACursor="unset"
          typePrimarySizemdStateABorder="unset"
          typePrimarySizemdStateABoxSizing="unset"
          stateLayerGap="8px"
          heroiconsOutlineenvelopeWidth="18px"
          heroiconsOutlineenvelopeHeight="18px"
          heroiconsOutlineenvelopePosition="relative"
          heroiconsOutlineenvelopeBorderRadius="unset"
          heroiconsOutlineenvelopeObjectFit="unset"
          buttonFontSize="14px"
          buttonLineHeight="20px"
          buttonColor="#ced2d6"
          heroiconsOutlinearrowRighWidth="18px"
          heroiconsOutlinearrowRighHeight="18px"
        />
        <TypePrimarySizemdStateA
          heroiconsOutlineenvelope="/heroiconssolidchatbubblebottomcentertext.svg"
          text="Create Campaign"
          heroiconsOutlinearrowRigh="/heroiconsoutlinearrowright2.svg"
          rightIcon={false}
          leftIcon
          typePrimarySizemdStateAPosition="unset"
          typePrimarySizemdStateABackgroundColor="unset"
          typePrimarySizemdStateAPadding="unset"
          typePrimarySizemdStateABoxShadow="unset"
          typePrimarySizemdStateACursor="unset"
          typePrimarySizemdStateABorder="unset"
          typePrimarySizemdStateABoxSizing="unset"
          stateLayerGap="8px"
          heroiconsOutlineenvelopeWidth="18px"
          heroiconsOutlineenvelopeHeight="18px"
          heroiconsOutlineenvelopePosition="relative"
          heroiconsOutlineenvelopeBorderRadius="unset"
          heroiconsOutlineenvelopeObjectFit="unset"
          buttonFontSize="14px"
          buttonLineHeight="20px"
          buttonColor="#ced2d6"
          heroiconsOutlinearrowRighWidth="18px"
          heroiconsOutlinearrowRighHeight="18px"
        />
        <TypePrimarySizemdStateA
          heroiconsOutlineenvelope="/heroiconssolidfacesmile.svg"
          text="About Us"
          heroiconsOutlinearrowRigh="/heroiconsoutlinearrowright2.svg"
          rightIcon={false}
          leftIcon
          typePrimarySizemdStateAPosition="unset"
          typePrimarySizemdStateABackgroundColor="unset"
          typePrimarySizemdStateAPadding="unset"
          typePrimarySizemdStateABoxShadow="unset"
          typePrimarySizemdStateACursor="unset"
          typePrimarySizemdStateABorder="unset"
          typePrimarySizemdStateABoxSizing="unset"
          stateLayerGap="8px"
          heroiconsOutlineenvelopeWidth="18px"
          heroiconsOutlineenvelopeHeight="18px"
          heroiconsOutlineenvelopePosition="relative"
          heroiconsOutlineenvelopeBorderRadius="unset"
          heroiconsOutlineenvelopeObjectFit="unset"
          buttonFontSize="14px"
          buttonLineHeight="20px"
          buttonColor="#ced2d6"
          heroiconsOutlinearrowRighWidth="18px"
          heroiconsOutlinearrowRighHeight="18px"
        />
        <TypePrimarySizemdStateA
          heroiconsOutlineenvelope="/heroiconsminiwallet.svg"
          text="Connected"
          heroiconsOutlinearrowRigh="/heroiconsoutlinearrowright2.svg"
          rightIcon={false}
          leftIcon
          typePrimarySizemdStateAPosition="unset"
          typePrimarySizemdStateABackgroundColor="#dab5ff"
          typePrimarySizemdStateAPadding="var(--padding-3xs) var(--padding-lg)"
          typePrimarySizemdStateABoxShadow="unset"
          typePrimarySizemdStateACursor="unset"
          typePrimarySizemdStateABorder="1px solid var(--primary-black)"
          typePrimarySizemdStateABoxSizing="border-box"
          stateLayerGap="8px"
          heroiconsOutlineenvelopeWidth="18px"
          heroiconsOutlineenvelopeHeight="18px"
          heroiconsOutlineenvelopePosition="relative"
          heroiconsOutlineenvelopeBorderRadius="unset"
          heroiconsOutlineenvelopeObjectFit="unset"
          buttonFontSize="14px"
          buttonLineHeight="20px"
          buttonColor="#000"
          heroiconsOutlinearrowRighWidth="18px"
          heroiconsOutlinearrowRighHeight="18px"
        />
      </div>
    </div>
  );
};

export default Navbar;
