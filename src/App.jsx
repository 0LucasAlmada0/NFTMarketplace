import Navbar from "./components/Navbar";
import TrendingSection from "./components/TrendingSection";
import HeroSection from "./components/HeroSection";
import CreatorSection from "./components/CreatorsSection";
import CategoriesSection from "./components/CategoriesSection";
import DiscoverSection from "./components/DiscoverSection";
import NFTHighlightSection from "./components/NFTHighlightSection";
import HowItWorksSection from "./components/HowItWorksSection";
import SubscribeWidgetSection from "./components/SubscribeWidgetSection";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-mainBackground">
      <Navbar />
      <HeroSection />
      <TrendingSection />
      <CreatorSection />
      <CategoriesSection />
      <DiscoverSection />
      <NFTHighlightSection image={"https://picsum.photos/3000/650"}/>
      <HowItWorksSection/>
      <SubscribeWidgetSection/>
      <Footer/>
    </main>
  );
}
export default App;
