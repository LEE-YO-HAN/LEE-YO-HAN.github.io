import { PageLayout } from "../PageLayout";
import { BackToBlog } from "./BackToBlog";
import { IntroHeader } from "./IntroHeader";
import { FirstProfile } from "./FirstProfile";
import { Introduction } from "./Introduction";
import { Contact } from "./Contact";

export const Intro = () => {
  return (
    <PageLayout>
      <BackToBlog />
      <IntroHeader />
      <FirstProfile />
      <Introduction />
      <Contact />
    </PageLayout>
  );
};
