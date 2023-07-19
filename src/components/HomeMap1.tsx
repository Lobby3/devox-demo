import { FunctionComponent, useCallback } from "react";
import Navbar from "./Navbar";
import PeopleContainer from "./PeopleContainer";
import { useNavigate } from "react-router-dom";
import TypePrimarySizemdStateA from "./TypePrimarySizemdStateA";
import TrendingCampaignsContainer from "./TrendingCampaignsContainer";
import OpinionContainer from "./OpinionContainer";
import styles from "./HomeMap1.module.css";
const HomeMap1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainer5Click = useCallback(() => {
    // Please sync "Discover" to the project
  }, []);

  const onHeroiconsMinilistBulletClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMapZoomOutClick = useCallback(() => {
    // Please sync "Home Map 2" to the project
  }, []);

  return (
    <div className={styles.homeMap1}>
      <Navbar
        logoHorizontalDarkMode="/logohorizontaldarkmode2.svg"
        required="/required1.svg"
        heroiconsMiniglobeAsiaAus="/heroiconsminiglobeasiaaustralia1.svg"
        heroiconsOutlinearrowRigh="/heroiconsoutlinearrowright3.svg"
        heroiconsSolidchatBubbleB="/heroiconssolidchatbubblebottomcentertext1.svg"
        heroiconsOutlinearrowRigh2="/heroiconsoutlinearrowright3.svg"
        heroiconsSolidfaceSmile="/heroiconssolidfacesmile1.svg"
        heroiconsOutlinearrowRigh4="/heroiconsoutlinearrowright3.svg"
        heroiconsMiniwallet="/avatars@2x.png"
        heroiconsOutlinearrowRigh6="/heroiconsoutlinearrowright3.svg"
        heroiconsOutlinearrowRigh1={false}
        heroiconsOutlinearrowRigh3={false}
        heroiconsOutlinearrowRigh5={false}
        heroiconsOutlinearrowRigh7={false}
        navbarFlexShrink="0"
        navbarZIndex="4"
        heroiconsMiniwalletPosition="unset"
        heroiconsMiniwalletBorderRadius="100px"
        heroiconsMiniwalletObjectFit="cover"
      />
      <PeopleContainer heroiconsOutlineenvelope={false} />
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.itsHowYouGetWorWrapper}>
            <b className={styles.itsHowYou}>CAMPAIGNS NEAR ME</b>
          </div>
          <div className={styles.heroiconsMinilistBulletParent}>
            <img
              className={styles.heroiconsMinilistBullet}
              alt=""
              src="/heroiconsminilistbullet.svg"
              onClick={onHeroiconsMinilistBulletClick}
            />
            <img
              className={styles.heroiconsOutlineglobeAlt}
              alt=""
              src="/heroiconsoutlineglobealt.svg"
            />
          </div>
        </div>
        <img
          className={styles.mapZoomOut}
          alt=""
          src="/map-zoom-out.svg"
          onClick={onMapZoomOutClick}
        />
        <TypePrimarySizemdStateA
          heroiconsOutlineenvelope="/heroiconsoutlineenvelope3.svg"
          text="See more campaigns near me!"
          heroiconsOutlinearrowRigh="/heroiconsoutlinearrowright4.svg"
          rightIcon
          leftIcon={false}
          typePrimarySizemdStateAPosition="unset"
          typePrimarySizemdStateABackgroundColor="#fff"
          typePrimarySizemdStateAPadding="var(--padding-lg) var(--padding-7xl)"
          typePrimarySizemdStateABoxShadow="unset"
          typePrimarySizemdStateACursor="pointer"
          typePrimarySizemdStateABorder="1px solid var(--primary-black)"
          typePrimarySizemdStateABoxSizing="border-box"
          stateLayerGap="12px"
          heroiconsOutlineenvelopeWidth="24px"
          heroiconsOutlineenvelopeHeight="24px"
          heroiconsOutlineenvelopePosition="relative"
          heroiconsOutlineenvelopeBorderRadius="unset"
          heroiconsOutlineenvelopeObjectFit="unset"
          buttonFontSize="18px"
          buttonLineHeight="28px"
          buttonColor="#000"
          heroiconsOutlinearrowRighWidth="24px"
          heroiconsOutlinearrowRighHeight="24px"
          onButtonContainer9Click={onButtonContainer5Click}
        />
      </div>
      <TrendingCampaignsContainer
        campaignIds="/heroiconsoutlineenvelope2.svg"
        campaignText="See more trending campaigns"
        campaignImageIds="/heroiconsoutlinearrowright1.svg"
        heroiconsMinicheck={false}
        heroiconsMinicheck1={false}
        heroiconsMinicheck2={false}
        heroiconsOutlineenvelope1={false}
      />
      <OpinionContainer
        productIds="/logomarkwhite1.svg"
        heroiconsOutlinechevronDo={false}
        helpText={false}
        hintText={false}
        heroiconsOutlineenvelope={false}
        heroiconsOutlinearrowRigh={false}
      />
    </div>
  );
};

export default HomeMap1;
