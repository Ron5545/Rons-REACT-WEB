import ContactModal from './components/Contact/contact'
import './App.css'
import WelcomeSection from './components/WelcomeSection/welcomeSection'
import Navbar from './components/navBar/navBar'

function App() {

  /* const mainDiv = document.getElementById("root")!; */

  return (

    <div>

      <Navbar />
      <WelcomeSection />
      <ContactModal />

    </div>

  )
}

export default App
