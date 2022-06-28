import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Education } from './components/Education/Education';
import { Skillset } from './components/Skillset/Skillset';
import { Projects } from './components/Projects/Projects';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div class="app">
      <Header />
      <About />
      <Projects />
      <Education />
      <Skillset />
      <Footer />
    </div>
  )
}

export default App
