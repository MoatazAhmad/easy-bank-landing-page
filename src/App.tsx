import Header from "./components/Header/Header.tsx"
import HeroSection from "./components/HeroSection"
import FeaturesSection from "./components/FeaturesSection/FeaturesSection.tsx"
import ArticlesSection from "./components/ArticlesSection/ArticlesSection.tsx"
import Footer from "./components/Footer"
import type { FeatureCardProps } from "./components/FeaturesSection/FeatureCard.tsx"
import type { ArticleCardProps } from "./components/ArticlesSection/ArticleCard.tsx"

import featureImg1 from "./assets/images/icon-online.svg"
import featureImg2 from "./assets/images/icon-budgeting.svg"
import featureImg3 from "./assets/images/icon-onboarding.svg"
import featureImg4 from "./assets/images/icon-api.svg"
import articleImg1 from "./assets/images/image-currency.jpg"
import articleImg2 from "./assets/images/image-restaurant.jpg"
import articleImg3 from "./assets/images/image-plane.jpg"
import articleImg4 from "./assets/images/image-confetti.jpg"

const featuresData: FeatureCardProps[] = [
  {
    img: featureImg1,
    h1Content: "Online Banking",
    pContent: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
  },
  {
    img: featureImg2,
    h1Content: "Simple Budgeting",
    pContent: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
  },
  {
    img: featureImg3,
    h1Content: "Fast Onboarding",
    pContent: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
  },
  {
    img: featureImg4,
    h1Content: "Open API",
    pContent: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
  }

]

const articlesData: ArticleCardProps[] = [
  {
    img: articleImg1,
    author: "By Claire Robinson",
    h1Content: "Online Banking",
    pContent: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
  },
  {
    img: articleImg2,
    h1Content: "Simple Budgeting",
    author: "By Wilson Hutton",
    pContent: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
  },
  {
    img: articleImg3,
    author: "By Wilson Hutton",
    h1Content: "Fast Onboarding",
    pContent: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
  },
  {
    img: articleImg4,
    author: "By Claire Robinson",
    h1Content: "Open API",
    pContent: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
  }

]

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection featuresData={featuresData} />
      <ArticlesSection articlesData={articlesData} />
      <Footer />
    </>
  )
}

export default App
