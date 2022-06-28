import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Education } from './components/Education/Education';
import { Skillset } from './components/Skillset/Skillset';
import { Projects } from './components/Projects/Projects';
import { Footer } from './components/Footer/Footer';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div class="app">
      <Header />
      <About />
      <Projects />
      <Education />
      <Skillset />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
