import React from "react";
import online from "@assets/svg/icon-online.svg";
import budgeting from "@assets/svg/icon-budgeting.svg";
import onboarding from "@assets/svg/icon-onboarding.svg";
import api from "@assets/svg/icon-api.svg";
import TitleContainer from "@components/TitleContainer";

const Main = () => {
  return (
    <section>
      <main>
        <TitleContainer
          title="Why choose Easybank?"
          subtitle="We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never
        before."
        />
        <TitleContainer
          title="Online Banking"
          subtitle="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the
          world."
          image={online}
        />
        <TitleContainer
          title="Simple Budgetingg"
          subtitle="See exactly where your money goes each month. Receive notifications when you’re close to hitting your
          limits.."
          image={budgeting}
        />
        <TitleContainer
          title="Fast Onboarding"
          subtitle="O We don’t do branches. Open your account in minutes online and start taking control of your finances right
          away."
          image={onboarding}
        />
        <TitleContainer
          title="Open API"
          subtitle="Manage your savings, investments, pension, and much more from one account. Tracking your money has never
          been easier."
          image={api}
        />
      </main>
    </section>
  );
};

export default Main;
