import { FunctionComponent, useCallback } from "react";
import styles from "./HomeList.module.css";
const HomeList: FunctionComponent = () => {
  const onHeroiconsOutlineglobeAltClick = useCallback(() => {
    // Please sync "Home Map 1" to the project
  }, []);

  const onButtonContainer9Click = useCallback(() => {
    // Please sync "Discover" to the project
  }, []);

  return (
    <div className={styles.homeList}>
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
            />
            <img
              className={styles.heroiconsOutlineglobeAlt}
              alt=""
              src="/heroiconsoutlineglobealt.svg"
              onClick={onHeroiconsOutlineglobeAltClick}
            />
          </div>
        </div>
        <div className={styles.cardHero}>
          <div className={styles.content}>
            <div className={styles.badge}>
              <div className={styles.badgeLayer}>
                <div className={styles.dots}>
                  <div className={styles.dotsChild} />
                </div>
                <div className={styles.label}>FUNDED</div>
              </div>
            </div>
            <b className={styles.itsHowYou1}>
              The TikTok ban bill, aka The Restrict Act
            </b>
            <b className={styles.itsHowYou2}>20 miles from you</b>
            <div className={styles.itsHowYou3}>
              The RESTRICT Act, aka “TikTok Ban Bill”, is as distracting and
              misleading as “The Patriot Act”, and is effectively The Patriot
              Act 2.0. With draconian Orwellian punishments, such as 20 year
              jail sentences for using VPNs, and unprecedented power to the
              Department ...
            </div>
            <div className={styles.button10}>
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
          <div className={styles.image}>
            <img className={styles.image20Icon} alt="" src="/image-20@2x.png" />
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.image12Icon}
                alt=""
                src="/image-12@2x.png"
              />
            </div>
            <div className={styles.badge1}>
              <div className={styles.badgeLayer}>
                <div className={styles.dots}>
                  <div className={styles.dotsChild} />
                </div>
                <div className={styles.label}>FUNDED</div>
              </div>
            </div>
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
            <div className={styles.button12}>
              <div className={styles.stateLayer}>
                <img
                  className={styles.heroiconsMiniglobeAsiaAust}
                  alt=""
                  src="/heroiconsminicheck.svg"
                />
                <div className={styles.button1}>
                  You’ve donated, go participate!
                </div>
                <img
                  className={styles.heroiconsMiniglobeAsiaAust}
                  alt=""
                  src="/heroiconsoutlinearrowright.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.image15Icon}
                alt=""
                src="/image-15@2x.png"
              />
            </div>
            <div className={styles.badge1}>
              <div className={styles.badgeLayer}>
                <div className={styles.dots}>
                  <div className={styles.dotsChild} />
                </div>
                <div className={styles.label}>FUNDED</div>
              </div>
            </div>
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
            <div className={styles.button10}>
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
          <div className={styles.card}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.image14Icon}
                alt=""
                src="/image-14@2x.png"
              />
            </div>
            <div className={styles.badge1}>
              <div className={styles.badgeLayer}>
                <div className={styles.dots}>
                  <div className={styles.dotsChild} />
                </div>
                <div className={styles.label}>FUNDED</div>
              </div>
            </div>
            <b className={styles.itsHowYouContainer}>
              Flint Michigan Water Crisis AND CANCER RATES
            </b>
            <b className={styles.itsHowYou4}>NEW Middletown, OH</b>
            <div className={styles.itsHowYou5}>
              Little Miss Flint: “9 Years. Over half of my life. Service lines
              still not complete. Cancer rates are through the roof ...
            </div>
            <div className={styles.button10}>
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
        <div className={styles.button18} onClick={onButtonContainer9Click}>
          <div className={styles.stateLayer4}>
            <img
              className={styles.heroiconsOutlineenvelope}
              alt=""
              src="/heroiconsoutlineenvelope3.svg"
            />
            <div className={styles.button9}>See More Funded Campaigns</div>
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
        <div className={styles.cards1}>
          <div className={styles.card}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.image16Icon}
                alt=""
                src="/image-16@2x.png"
              />
            </div>
            <div className={styles.badge1}>
              <div className={styles.badgeLayer}>
                <div className={styles.dots}>
                  <div className={styles.dotsChild} />
                </div>
                <div className={styles.label}>FUNDED</div>
              </div>
            </div>
            <b className={styles.itsHowYouContainer}>
              <p className={styles.digitalAssetsRegulation}>
                The Railway Safety Act
              </p>
              <p className={styles.digitalAssetsRegulation}>of 2023</p>
            </b>
            <b className={styles.itsHowYou4}>East Palestine, OH</b>
            <div className={styles.itsHowYou5}>
              A response to the Ohio train derailment in East Palestine, this
              act would, “create more stringent safety requirements for ...
            </div>
            <div className={styles.button10}>
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
          <div className={styles.card}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.image14Icon}
                alt=""
                src="/image-17@2x.png"
              />
            </div>
            <div className={styles.badge1}>
              <div className={styles.badgeLayer}>
                <div className={styles.dots}>
                  <div className={styles.dotsChild} />
                </div>
                <div className={styles.label}>FUNDED</div>
              </div>
            </div>
            <b className={styles.itsHowYouContainer}>
              <p className={styles.digitalAssetsRegulation}>
                FL HB 1557 “Don’t say gay”
              </p>
              <p className={styles.digitalAssetsRegulation}>censorship</p>
            </b>
            <b className={styles.itsHowYou4}>Salem, OH</b>
            <div className={styles.itsHowYou5}>
              Florida's “Don't Say Gay” and "Stop WOKE" Act are a cornerstone of
              Governor Ron DeSantis' censorship​ ...
            </div>
            <div className={styles.button10}>
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
          <div className={styles.card}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.image14Icon}
                alt=""
                src="/image-23@2x.png"
              />
            </div>
            <div className={styles.badge1}>
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
            <b className={styles.itsHowYou4}>Waynesburg, OH</b>
            <div className={styles.itsHowYou5}>
              Coinbase has taken legal action against the SEC, asking a federal
              judge to force the regulator to share its answer on ...
            </div>
            <div className={styles.button10}>
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
        <div className={styles.button26}>
          <div className={styles.stateLayer4}>
            <img
              className={styles.heroiconsOutlineenvelope}
              alt=""
              src="/heroiconsoutlineenvelope3.svg"
            />
            <div className={styles.button9}>See More Funded Campaigns</div>
            <img
              className={styles.heroiconsOutlinearrowRight4}
              alt=""
              src="/heroiconsoutlinearrowright4.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.cards2}>
          <div className={styles.contentBox3}>
            <img
              className={styles.logoMarkWhiteIcon}
              alt=""
              src="/logomarkwhite1.svg"
            />
            <b className={styles.itsHowYou19}>
              We believe people deserve more robust opportunities to voice their
              opinions and advocate their beliefs.
            </b>
            <div className={styles.itsHowYou20}>© DeVox 2023</div>
          </div>
          <div className={styles.contentBox4}>
            <div className={styles.itsHowYou21}>Discover</div>
            <div className={styles.itsHowYou21}>Start a Campaign</div>
            <div className={styles.itsHowYou21}>About Us</div>
            <div className={styles.itsHowYou21}>Terms of Services</div>
            <div className={styles.itsHowYou21}>Privacy Policy</div>
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
            <div className={styles.button28}>
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

export default HomeList;
