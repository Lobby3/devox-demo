import { FunctionComponent, useCallback } from "react";
import Navbar from "../components/Navbar";
import PeopleContainer from "../components/PeopleContainer";
import RestrictActContainer from "../components/RestrictActContainer";
import TrendingCampaignsContainer from "../components/TrendingCampaignsContainer";
import OpinionContainer from "../components/OpinionContainer";
import styles from "./HomeList.module.css";
const HomeList: FunctionComponent = () => {
  const onButtonContainer9Click = useCallback(() => {
    // Please sync "Discover" to the project
  }, []);

  return (
    <div className={styles.homeList}>
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
      <RestrictActContainer />
      <TrendingCampaignsContainer
        campaignIds="/heroiconsoutlineenvelope3.svg"
        campaignText="See More Funded Campaigns"
        campaignImageIds="/heroiconsoutlinearrowright4.svg"
        heroiconsMinicheck={false}
        heroiconsMinicheck1={false}
        heroiconsMinicheck2={false}
        heroiconsOutlineenvelope1={false}
      />
      <OpinionContainer
        productIds="/logomarkwhite11.svg"
        heroiconsOutlinechevronDo={false}
        helpText={false}
        hintText={false}
        heroiconsOutlineenvelope={false}
        heroiconsOutlinearrowRigh={false}
      />
    </div>
  );
};

export default HomeList;
