import React from "react";

import Benefits from "./Benefits";
import SectionContainer from "@components/SectionContainer";
import TitleContainer from "@components/TitleContainer";

const Main = () => {
  return (
    <>
      <SectionContainer>
        <main>
          <TitleContainer
            title="Why choose Easybank?"
            subtitle="We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never
        before."
          />
          <Benefits />
        </main>
      </SectionContainer>
    </>
  );
};

export default Main;
