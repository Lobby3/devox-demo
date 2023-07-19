import { FunctionComponent } from "react";
import LogoMarkWhiteIcon from "./LogoMarkWhiteIcon";
import InputTypeRegularCornersSh from "./InputTypeRegularCornersSh";
import TypePrimarySizemdStateA from "./TypePrimarySizemdStateA";
import styles from "./OpinionContainer.module.css";

type OpinionContainerType = {
  productIds?: string;
  heroiconsOutlinechevronDo?: boolean;
  helpText?: boolean;
  hintText?: boolean;
  heroiconsOutlineenvelope?: boolean;
  heroiconsOutlinearrowRigh?: boolean;
};

const OpinionContainer: FunctionComponent<OpinionContainerType> = ({
  productIds,
  heroiconsOutlinechevronDo,
  helpText,
  hintText,
  heroiconsOutlineenvelope,
  heroiconsOutlinearrowRigh,
}) => {
  return (
    <div className={styles.footer}>
      <div className={styles.cards}>
        <div className={styles.contentBox}>
          <LogoMarkWhiteIcon
            logoMarkWhiteIconLogoMark="/logomarkwhite11.svg"
            logoMarkWhiteIconWidth="91.43px"
            logoMarkWhiteIconHeight="80px"
            logoMarkWhiteIconFlexShrink="0"
          />
          <b className={styles.itsHowYou}>
            We believe people deserve more robust opportunities to voice their
            opinions and advocate their beliefs.
          </b>
          <div className={styles.itsHowYou1}>© DeVox 2023</div>
        </div>
        <div className={styles.contentBox1}>
          <div className={styles.itsHowYou2}>Discover</div>
          <div className={styles.itsHowYou2}>Start a Campaign</div>
          <div className={styles.itsHowYou2}>About Us</div>
          <div className={styles.itsHowYou2}>Terms of Services</div>
          <div className={styles.itsHowYou2}>Privacy Policy</div>
          <div className={styles.affiliateProgram}>Affiliate Program</div>
        </div>
        <div className={styles.contentBox2}>
          <b className={styles.itsHowYou}>STAY IN THE LOOP!</b>
          <InputTypeRegularCornersSh
            regularText="hello@devox.com"
            heroiconsOutlinechevronDo="/heroiconsoutlinechevrondown1.svg"
            helpText="Helping text for user"
            regularleadIcon
            regulartrailIcon={false}
            showLabel
            showHelp={false}
            showHintText={false}
            inputTypeRegularCornersShPosition="unset"
            emailColor="#fff"
          />
          <TypePrimarySizemdStateA
            heroiconsOutlineenvelope="/heroiconsoutlineenvelope.svg"
            text="Subscribe"
            heroiconsOutlinearrowRigh="/heroiconsoutlinearrowright.svg"
            rightIcon={false}
            leftIcon={false}
            typePrimarySizemdStateAPosition="unset"
            typePrimarySizemdStateABackgroundColor="#dab5ff"
            typePrimarySizemdStateAPadding="var(--padding-xs) var(--padding-xl)"
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
    </div>
  );
};

export default OpinionContainer;
