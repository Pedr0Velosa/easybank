import heroUrl from "@assets/image-mockups.png";
import backgroundMobileUrl from "@assets/svg/bg-intro-mobile.svg";
import backgroundDesktopUrl from "@assets/svg/bg-intro-desktop.svg";
import styles from "@styles/Hero/HeroSection.module.css";
import stylesMenuItems from "@styles/Navbar/MenuItems.module.css";
import Button from "@components/Navbar/Menu/Button";
import TitleContainer from "@components/TitleContainer";
import SectionContainer from "@components/SectionContainer";

const HeroSection = () => {
  return (
    <SectionContainer>
      <section className={styles.container}>
        <div className={styles["image-container"]}>
          <img
            src={heroUrl}
            alt="four images showing the different pages on easybank app"
            className={styles["phone-image"]}
          />
          <img src={backgroundMobileUrl} alt="" className={styles["background-image-mobile"]} />
          <img src={backgroundDesktopUrl} alt="" className={styles["background-image-desktop"]} />
        </div>
        <div className={styles["text-container"]}>
          <TitleContainer
            title="Next generation digital banking"
            subtitle="Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving,
      budgeting, investing, and much more."
          >
            <Button>
              <button className={stylesMenuItems.invite}>Request Invite</button>
            </Button>
          </TitleContainer>
        </div>
      </section>
    </SectionContainer>
  );
};

export default HeroSection;
