import { FunctionComponent } from "react";
import TypePrimarySizemdStateA from "./TypePrimarySizemdStateA";
import styles from "./PeopleContainer.module.css";

type PeopleContainerType = {
  heroiconsOutlineenvelope?: boolean;
};

const PeopleContainer: FunctionComponent<PeopleContainerType> = ({
  heroiconsOutlineenvelope,
}) => {
  return (
    <div className={styles.section}>
      <b className={styles.thePeoplesPolitical}>
        THE PEOPLE’S POLITICAL ACCESS
      </b>
      <div className={styles.supportPeopleWho}>
        Support people who support us!
      </div>
      <TypePrimarySizemdStateA
        heroiconsOutlineenvelope="/heroiconsoutlineenvelope2.svg"
        text="Discover Campaigns"
        heroiconsOutlinearrowRigh="/heroiconsoutlinearrowright1.svg"
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

export default PeopleContainer;
