import Navbar from "./components/Navbar"
import TrendingSection from "./components/TrendingSection"
import HeroSection from "./components/HeroSection"
import CreatorSection from "./components/CreatorsSection"
import CategoriesSection from "./components/CategoriesSection"

function App() {
  return (
    <main className="bg-mainBackground">
      <Navbar/>
      <HeroSection/>
      <TrendingSection/>
      <CreatorSection/>
      <CategoriesSection/>
    </main>
  )
}
export default App
