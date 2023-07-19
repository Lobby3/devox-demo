import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeMap1.module.css";
const HomeMap1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHeroiconsMinilistBulletClick = useCallback(() => {
    navigate("/home-list");
  }, [navigate]);

  const onMapZoomOutClick = useCallback(() => {
    // Please sync "Home Map 2" to the project
  }, []);

  const onButtonContainer5Click = useCallback(() => {
    // Please sync "Discover" to the project
  }, []);

  return (
    <div className={styles.homeMap1}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img
            className={styles.logoHorizontalDarkModeIcon}
            alt=""
            src="/logohorizontaldarkmode2.svg"
          />
          <div className={styles.input}>
            <img className={styles.requiredIcon} alt="" src="/required1.svg" />
            <div className={styles.text}>
              <div className={styles.downloadChimnneyFo}>Search</div>
            </div>
          </div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.button}>
            <div className={styles.stateLayer}>
              <img
                className={styles.heroiconsMiniglobeAsiaAust}
                alt=""
                src="/heroiconsminiglobeasiaaustralia1.svg"
              />
              <div className={styles.button1}>Discover</div>
              <img
                className={styles.heroiconsOutlinearrowRight}
                alt=""
                src="/heroiconsoutlinearrowright3.svg"
              />
            </div>
          </div>
          <div className={styles.button}>
            <div className={styles.stateLayer}>
              <img
                className={styles.heroiconsMiniglobeAsiaAust}
                alt=""
                src="/heroiconssolidchatbubblebottomcentertext1.svg"
              />
              <div className={styles.button1}>Create Campaign</div>
              <img
                className={styles.heroiconsOutlinearrowRight}
                alt=""
                src="/heroiconsoutlinearrowright3.svg"
              />
            </div>
          </div>
          <div className={styles.button}>
            <div className={styles.stateLayer}>
              <img
                className={styles.heroiconsMiniglobeAsiaAust}
                alt=""
                src="/heroiconssolidfacesmile1.svg"
              />
              <div className={styles.button1}>About Us</div>
              <img
                className={styles.heroiconsOutlinearrowRight}
                alt=""
                src="/heroiconsoutlinearrowright3.svg"
              />
            </div>
          </div>
          <div className={styles.button6}>
            <div className={styles.stateLayer}>
              <img
                className={styles.avatarsIcon}
                alt=""
                src="/avatars@2x.png"
              />
              <div className={styles.button1}>Connected</div>
              <img
                className={styles.heroiconsOutlinearrowRight}
                alt=""
                src="/heroiconsoutlinearrowright3.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <b className={styles.thePeoplesPolitical}>
          THE PEOPLE’S POLITICAL ACCESS
        </b>
        <div className={styles.supportPeopleWho}>
          Support people who support us!
        </div>
        <div className={styles.button8}>
          <div className={styles.stateLayer4}>
            <img
              className={styles.heroiconsOutlineenvelope}
              alt=""
              src="/heroiconsoutlineenvelope2.svg"
            />
            <div className={styles.button9}>Discover Campaigns</div>
            <img
              className={styles.heroiconsOutlinearrowRight4}
              alt=""
              src="/heroiconsoutlinearrowright1.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.section1}>
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
        <div className={styles.button10} onClick={onButtonContainer5Click}>
          <div className={styles.stateLayer4}>
            <img
              className={styles.heroiconsOutlineenvelope}
              alt=""
              src="/heroiconsoutlineenvelope3.svg"
            />
            <div className={styles.button9}>See more campaigns near me!</div>
            <img
              className={styles.heroiconsOutlinearrowRight4}
              alt=""
              src="/heroiconsoutlinearrowright4.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.sectionHeader1}>
          <b className={styles.itsHowYou}>Trending campaigns</b>
        </div>
        <div className={styles.cards}>
          <div className={styles.contentBox}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.image16Icon}
                alt=""
                src="/image-16@2x.png"
              />
            </div>
            <div className={styles.badge}>
              <div className={styles.badgeLayer}>
                <div className={styles.dots}>
                  <div className={styles.dotsChild} />
                </div>
                <div className={styles.label}>FUNDED</div>
              </div>
            </div>
            <b className={styles.itsHowYouContainer}>
              <p className={styles.theRailwaySafety}>The Railway Safety Act</p>
              <p className={styles.theRailwaySafety}>of 2023</p>
            </b>
            <b className={styles.itsHowYou2}>East Palestine, OH</b>
            <div className={styles.itsHowYou3}>
              A response to the Ohio train derailment in East Palestine, this
              act would, “create more stringent safety requirements for ...
            </div>
            <div className={styles.button12}>
              <div className={styles.stateLayer}>
                <img
                  className={styles.heroiconsOutlinearrowRight}
                  alt=""
                  src="/heroiconsminicheck.svg"
                />
                <div className={styles.button1}>Donate Now To Participate</div>
                <img
                  className={styles.heroiconsMiniglobeAsiaAust}
                  alt=""
                  src="/heroiconsoutlinearrowright.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.contentBox}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.image17Icon}
                alt=""
                src="/image-17@2x.png"
              />
            </div>
            <div className={styles.badge}>
              <div className={styles.badgeLayer}>
                <div className={styles.dots}>
                  <div className={styles.dotsChild} />
                </div>
                <div className={styles.label}>FUNDED</div>
              </div>
            </div>
            <b className={styles.itsHowYouContainer}>
              <p className={styles.theRailwaySafety}>
                FL HB 1557 “Don’t say gay”
              </p>
              <p className={styles.theRailwaySafety}>censorship</p>
            </b>
            <b className={styles.itsHowYou2}>Salem, OH</b>
            <div className={styles.itsHowYou3}>
              Florida's “Don't Say Gay” and "Stop WOKE" Act are a cornerstone of
              Governor Ron DeSantis' censorship​ ...
            </div>
            <div className={styles.button12}>
              <div className={styles.stateLayer}>
                <img
                  className={styles.heroiconsOutlinearrowRight}
                  alt=""
                  src="/heroiconsminicheck.svg"
                />
                <div className={styles.button1}>Donate Now To Participate</div>
                <img
                  className={styles.heroiconsMiniglobeAsiaAust}
                  alt=""
                  src="/heroiconsoutlinearrowright.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.contentBox}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.image17Icon}
                alt=""
                src="/image-23@2x.png"
              />
            </div>
            <div className={styles.badge}>
              <div className={styles.badgeLayer}>
                <div className={styles.dots}>
                  <div className={styles.dotsChild} />
                </div>
                <div className={styles.label}>FUNDED</div>
              </div>
            </div>
            <b className={styles.itsHowYouContainer}>
              IN This Corner: Coinbase vs The SEC
            </b>
            <b className={styles.itsHowYou2}>Waynesburg, OH</b>
            <div className={styles.itsHowYou3}>
              Coinbase has taken legal action against the SEC, asking a federal
              judge to force the regulator to share its answer on ...
            </div>
            <div className={styles.button12}>
              <div className={styles.stateLayer}>
                <img
                  className={styles.heroiconsOutlinearrowRight}
                  alt=""
                  src="/heroiconsminicheck.svg"
                />
                <div className={styles.button1}>Donate Now To Participate</div>
                <img
                  className={styles.heroiconsMiniglobeAsiaAust}
                  alt=""
                  src="/heroiconsoutlinearrowright.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.button18}>
          <div className={styles.stateLayer4}>
            <img
              className={styles.heroiconsOutlineenvelope}
              alt=""
              src="/heroiconsoutlineenvelope2.svg"
            />
            <div className={styles.button9}>See more trending campaigns</div>
            <img
              className={styles.heroiconsOutlinearrowRight4}
              alt=""
              src="/heroiconsoutlinearrowright1.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.cards1}>
          <div className={styles.contentBox3}>
            <img
              className={styles.logoMarkWhiteIcon}
              alt=""
              src="/logomarkwhite1.svg"
            />
            <b className={styles.itsHowYou9}>
              We believe people deserve more robust opportunities to voice their
              opinions and advocate their beliefs.
            </b>
            <div className={styles.itsHowYou10}>© DeVox 2023</div>
          </div>
          <div className={styles.contentBox4}>
            <div className={styles.itsHowYou11}>Discover</div>
            <div className={styles.itsHowYou11}>Start a Campaign</div>
            <div className={styles.itsHowYou11}>About Us</div>
            <div className={styles.itsHowYou11}>Terms of Services</div>
            <div className={styles.itsHowYou11}>Privacy Policy</div>
            <div className={styles.affiliateProgram}>Affiliate Program</div>
          </div>
          <div className={styles.contentBox5}>
            <b className={styles.itsHowYouContainer}>STAY IN THE LOOP!</b>
            <div className={styles.inputField}>
              <div className={styles.inputStateLayer}>
                <div className={styles.inputStateLayer}>
                  <div className={styles.email}>Email</div>
                  <div className={styles.inputLayer}>
                    <div className={styles.input1}>
                      <img
                        className={styles.heroiconsOutlineenvelope3}
                        alt=""
                        src="/heroiconsoutlineenvelope1.svg"
                      />
                      <div className={styles.hussainfinessecom}>
                        hello@devox.com
                      </div>
                    </div>
                    <img
                      className={styles.heroiconsOutlinechevronDown}
                      alt=""
                      src="/heroiconsoutlinechevrondown1.svg"
                    />
                  </div>
                </div>
                <div className={styles.helpText}>
                  <img
                    className={styles.heroiconsOutlinequestionMar}
                    alt=""
                    src="/heroiconsoutlinequestionmarkcircle.svg"
                  />
                  <div className={styles.hintText}>Helping text for user</div>
                </div>
              </div>
            </div>
            <div className={styles.button20}>
              <div className={styles.stateLayer}>
                <img
                  className={styles.heroiconsOutlinearrowRight}
                  alt=""
                  src="/heroiconsoutlineenvelope.svg"
                />
                <div className={styles.button1}>Subscribe</div>
                <img
                  className={styles.heroiconsOutlinearrowRight}
                  alt=""
                  src="/heroiconsoutlinearrowright.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMap1;
