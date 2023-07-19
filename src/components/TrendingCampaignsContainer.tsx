import { FunctionComponent } from "react";
import TypeDotColorSuccessSize from "./TypeDotColorSuccessSize";
import TypePrimarySizemdStateA from "./TypePrimarySizemdStateA";
import styles from "./TrendingCampaignsContainer.module.css";

type TrendingCampaignsContainerType = {
  campaignIds?: string;
  campaignText?: string;
  campaignImageIds?: string;
  heroiconsMinicheck?: boolean;
  heroiconsMinicheck1?: boolean;
  heroiconsMinicheck2?: boolean;
  heroiconsOutlineenvelope1?: boolean;
};

const TrendingCampaignsContainer: FunctionComponent<
  TrendingCampaignsContainerType
> = ({
  campaignIds,
  campaignText,
  campaignImageIds,
  heroiconsMinicheck,
  heroiconsMinicheck1,
  heroiconsMinicheck2,
  heroiconsOutlineenvelope1,
}) => {
  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <b className={styles.itsHowYou}>Trending campaigns</b>
      </div>
      <div className={styles.cards}>
        <div className={styles.contentBox}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img className={styles.image16Icon} alt="" src="/image-16@2x.png" />
          </div>
          <TypeDotColorSuccessSize
            text="FUNDED"
            dot
            typeDotColorSuccessSizePosition="unset"
          />
          <b className={styles.itsHowYouContainer}>
            <p className={styles.theRailwaySafety}>The Railway Safety Act</p>
            <p className={styles.theRailwaySafety}>of 2023</p>
          </b>
          <b className={styles.itsHowYou1}>East Palestine, OH</b>
          <div className={styles.itsHowYou2}>
            A response to the Ohio train derailment in East Palestine, this act
            would, “create more stringent safety requirements for ...
          </div>
          <TypePrimarySizemdStateA
            heroiconsOutlineenvelope="/heroiconsminicheck.svg"
            text="Donate Now To Participate"
            heroiconsOutlinearrowRigh="/heroiconsoutlinearrowright.svg"
            rightIcon
            leftIcon={false}
            typePrimarySizemdStateAPosition="unset"
            typePrimarySizemdStateABackgroundColor="#fff"
            typePrimarySizemdStateAPadding="var(--padding-3xs) var(--padding-lg)"
            typePrimarySizemdStateABoxShadow="0px 2px 5px rgba(103, 110, 118, 0.08), 0px 0px 0px 1px rgba(103, 110, 118, 0.16), 0px 1px 1px rgba(0, 0, 0, 0.12)"
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
        <div className={styles.contentBox}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img className={styles.image17Icon} alt="" src="/image-17@2x.png" />
          </div>
          <TypeDotColorSuccessSize
            text="FUNDED"
            dot
            typeDotColorSuccessSizePosition="unset"
          />
          <b className={styles.itsHowYouContainer}>
            <p className={styles.theRailwaySafety}>
              FL HB 1557 “Don’t say gay”
            </p>
            <p className={styles.theRailwaySafety}>censorship</p>
          </b>
          <b className={styles.itsHowYou1}>Salem, OH</b>
          <div className={styles.itsHowYou2}>
            Florida's “Don't Say Gay” and "Stop WOKE" Act are a cornerstone of
            Governor Ron DeSantis' censorship​ ...
          </div>
          <TypePrimarySizemdStateA
            heroiconsOutlineenvelope="/heroiconsminicheck.svg"
            text="Donate Now To Participate"
            heroiconsOutlinearrowRigh="/heroiconsoutlinearrowright.svg"
            rightIcon
            leftIcon={false}
            typePrimarySizemdStateAPosition="unset"
            typePrimarySizemdStateABackgroundColor="#fff"
            typePrimarySizemdStateAPadding="var(--padding-3xs) var(--padding-lg)"
            typePrimarySizemdStateABoxShadow="0px 2px 5px rgba(103, 110, 118, 0.08), 0px 0px 0px 1px rgba(103, 110, 118, 0.16), 0px 1px 1px rgba(0, 0, 0, 0.12)"
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
        <div className={styles.contentBox}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img className={styles.image17Icon} alt="" src="/image-23@2x.png" />
          </div>
          <TypeDotColorSuccessSize
            text="FUNDED"
            dot
            typeDotColorSuccessSizePosition="unset"
          />
          <b className={styles.itsHowYouContainer}>
            IN This Corner: Coinbase vs The SEC
          </b>
          <b className={styles.itsHowYou1}>Waynesburg, OH</b>
          <div className={styles.itsHowYou2}>
            Coinbase has taken legal action against the SEC, asking a federal
            judge to force the regulator to share its answer on ...
          </div>
          <TypePrimarySizemdStateA
            heroiconsOutlineenvelope="/heroiconsminicheck.svg"
            text="Donate Now To Participate"
            heroiconsOutlinearrowRigh="/heroiconsoutlinearrowright.svg"
            rightIcon
            leftIcon={false}
            typePrimarySizemdStateAPosition="unset"
            typePrimarySizemdStateABackgroundColor="#fff"
            typePrimarySizemdStateAPadding="var(--padding-3xs) var(--padding-lg)"
            typePrimarySizemdStateABoxShadow="0px 2px 5px rgba(103, 110, 118, 0.08), 0px 0px 0px 1px rgba(103, 110, 118, 0.16), 0px 1px 1px rgba(0, 0, 0, 0.12)"
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
      <TypePrimarySizemdStateA
        heroiconsOutlineenvelope="/heroiconsoutlineenvelope3.svg"
        text="See More Funded Campaigns"
        heroiconsOutlinearrowRigh="/heroiconsoutlinearrowright4.svg"
        rightIcon
        leftIcon={false}
        typePrimarySizemdStateAPosition="unset"
        typePrimarySizemdStateABackgroundColor="#fff"
        typePrimarySizemdStateAPadding="var(--padding-lg) var(--padding-7xl)"
        typePrimarySizemdStateABoxShadow="unset"
        typePrimarySizemdStateACursor="unset"
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
      />
    </div>
  );
};

export default TrendingCampaignsContainer;
