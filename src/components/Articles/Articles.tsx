import React from "react";
import TitleContainer from "@components/TitleContainer";
import ArticleContainer from "@components/ArticleContainer";
import confetti from "@assets/image-confetti.jpg";
import currency from "@assets/image-currency.jpg";
import plane from "@assets/image-plane.jpg";
import restaurant from "@assets/image-restaurant.jpg";

const Articles = () => {
  return (
    <>
      <section className="white-section">
        <TitleContainer title="Latest Articles" />
        <ArticleContainer
          title="Receive money in any currency with no fees"
          author="By Claire Robinson"
          description="The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …"
          image={currency}
        />
        <ArticleContainer
          title="Treat yourself without worrying about money"
          author="By Wilson Hutton"
          description="Our simple budgeting feature allows you to separate out your spending and set 
          realistic limits each month. That means you …"
          image={restaurant}
        />
        <ArticleContainer
          title="Take your Easybank card wherever you go"
          author="By Wilson Hutton"
          description="We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
  while you’re abroad. We’ll even show you …"
          image={plane}
        />
        <ArticleContainer
          title="Our invite-only Beta accounts are now live!"
          author="Claire Robinson"
          description="After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
  It’s easy to request an invite through the site …"
          image={confetti}
        />
      </section>
    </>
  );
};
export default Articles;
