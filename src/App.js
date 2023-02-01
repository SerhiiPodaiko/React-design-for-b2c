import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Logos from "./components/logos/Logos"
import About from "./components/about/About"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from "./components/testimonials/Testimonials"
import Footer from "./components/footer/Footer"
import Cta from "./assets/images/cta/Cta"

const App = () => {
  return (
      <div className="app-wrapper">
        <Header />
        <main className="app-content">
            <Hero />
            <Logos />
            <About />
            <Portfolio />
            <Testimonials />
            <Cta />
            <Footer />
        </main>
      </div>
  )
}

export default App
