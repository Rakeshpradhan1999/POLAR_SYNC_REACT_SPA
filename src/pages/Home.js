import React from "react";
import { Layout } from "../components";
import {
  BannerSection,
  PartnerSection,
  NetworkSection,
  AboutSection,
  ProductSection,
  NewsSection,
  CommunitySection,
  TeamSection,
  JoinSection,
} from "../sections";
const Home = () => {
  return (
    <div>
      <Layout>
        <BannerSection />
        <PartnerSection />
        <NetworkSection />
        <AboutSection />
        <ProductSection />
        <NewsSection />
        <CommunitySection />
        <TeamSection />
        <JoinSection />
      </Layout>
    </div>
  );
};

export default Home;
