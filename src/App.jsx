import Navbar from "./components/Navbar"
import TrendingSection from "./components/TrendingSection"
import HeroSection from "./components/HeroSection"

function App() {
  return (
    <main className="bg-mainBackground">
      <Navbar/>
      <HeroSection/>
      <TrendingSection/>
    </main>
  )
}
export default App
