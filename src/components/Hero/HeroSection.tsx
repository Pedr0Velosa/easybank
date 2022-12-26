import heroUrl from "@assets/image-mockups.png";
import styles from "@styles/Hero/HeroSection.module.css";
import stylesMenuItems from "@styles/Navbar/MenuItems.module.css";
import Button from "@components/Navbar/Menu/Button";
import TitleContainer from "@components/TitleContainer";

const HeroSection = () => {
  return (
    <section style={{ isolation: "isolate" }}>
      <div className={styles["image-container"]}>
        <img src={heroUrl} alt="four images showing the different pages on easybank app" />
        <div className={styles["background-image"]} />
      </div>
      <TitleContainer
        title="Next generation digital banking"
        subtitle="Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving,
      budgeting, investing, and much more."
      >
        <Button>
          <button className={stylesMenuItems.invite}>Request Invite</button>
        </Button>
      </TitleContainer>
    </section>
  );
};

export default HeroSection;
