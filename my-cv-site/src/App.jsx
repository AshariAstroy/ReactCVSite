import Header from "./components/Header";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import FloatingStars from "./components/FloatingStars";

const App = () => {
  return (
    <div>
      <Header/>
      <FloatingStars/>
      <Banner/>
      <FloatingStars/>
      <Skills/>
    </div>
  )
}

export default App