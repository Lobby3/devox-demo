import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TypeDotColorSuccessSize from "./TypeDotColorSuccessSize";
import TypePrimarySizemdStateA from "./TypePrimarySizemdStateA";
import styles from "./RestrictActContainer.module.css";
const RestrictActContainer: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainer9Click = useCallback(() => {
    // Please sync "Discover" to the project
  }, []);

  const onHeroiconsOutlineglobeAltClick = useCallback(() => {
    navigate("/home-map-1");
  }, [navigate]);

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <div className={styles.itsHowYouGetWorWrapper}>
          <b className={styles.itsHowYou}>CAMPAIGNS NEAR ME</b>
        </div>
        <div className={styles.heroiconsMinilistBulletParent}>
          <img
            className={styles.heroiconsMinilistBullet}
            alt=""
            src="/heroiconsminilistbullet1.svg"
          />
          <img
            className={styles.heroiconsOutlineglobeAlt}
            alt=""
            src="/heroiconsoutlineglobealt1.svg"
            onClick={onHeroiconsOutlineglobeAltClick}
          />
        </div>
      </div>
      <div className={styles.cardHero}>
        <div className={styles.content}>
          <TypeDotColorSuccessSize
            text="FUNDED"
            dot
            typeDotColorSuccessSizePosition="unset"
          />
          <b className={styles.itsHowYou1}>
            The TikTok ban bill, aka The Restrict Act
          </b>
          <b className={styles.itsHowYou2}>20 miles from you</b>
          <div className={styles.itsHowYou3}>
            The RESTRICT Act, aka “TikTok Ban Bill”, is as distracting and
            misleading as “The Patriot Act”, and is effectively The Patriot Act
            2.0. With draconian Orwellian punishments, such as 20 year jail
            sentences for using VPNs, and unprecedented power to the Department
            ...
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
        <div className={styles.image}>
          <img className={styles.image20Icon} alt="" src="/image-20@2x.png" />
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
          </div>
          <TypeDotColorSuccessSize
            text="FUNDED"
            dot
            typeDotColorSuccessSizePosition="unset"
          />
          <b className={styles.itsHowYouContainer}>
            <p className={styles.digitalAssetsRegulation}>
              Digital Assets Regulation
            </p>
            <p className={styles.digitalAssetsRegulation}>Act (DARA)</p>
          </b>
          <b className={styles.itsHowYou4}>East palestine, OH</b>
          <div className={styles.itsHowYou5}>
            Illinois Bill HB3479 attacks personal property by eliminating the
            “exchanging, transferring or storing of a digital asset”.
          </div>
          <TypePrimarySizemdStateA
            heroiconsOutlineenvelope="/heroiconsminicheck.svg"
            text="You’ve donated, go participate!"
            heroiconsOutlinearrowRigh="/heroiconsoutlinearrowright.svg"
            rightIcon
            leftIcon
            typePrimarySizemdStateAPosition="unset"
            typePrimarySizemdStateABackgroundColor="#dab5ff"
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
        <div className={styles.card}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img className={styles.image15Icon} alt="" src="/image-15@2x.png" />
          </div>
          <TypeDotColorSuccessSize
            text="FUNDED"
            dot
            typeDotColorSuccessSizePosition="unset"
          />
          <b className={styles.itsHowYouContainer}>
            <p className={styles.digitalAssetsRegulation}>
              California “DAO” Bill 1229
            </p>
            <p className={styles.digitalAssetsRegulation}>to keep building</p>
          </b>
          <b className={styles.itsHowYou4}>Youngstown, OH</b>
          <div className={styles.itsHowYou5}>
            Assembly member Matt Haney, with support from investment firm
            Andreessen Horowitz and the Crypto ...
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
        <div className={styles.card}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img className={styles.image14Icon} alt="" src="/image-14@2x.png" />
          </div>
          <TypeDotColorSuccessSize
            text="FUNDED"
            dot
            typeDotColorSuccessSizePosition="unset"
          />
          <b className={styles.itsHowYouContainer}>
            Flint Michigan Water Crisis AND CANCER RATES
          </b>
          <b className={styles.itsHowYou4}>NEW Middletown, OH</b>
          <div className={styles.itsHowYou5}>
            Little Miss Flint: “9 Years. Over half of my life. Service lines
            still not complete. Cancer rates are through the roof ...
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
        onButtonContainer9Click={onButtonContainer9Click}
      />
    </div>
  );
};

export default RestrictActContainer;
