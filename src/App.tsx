import { Component } from 'react'
import WelcomeSection from './components/page-ui/welcomeSection'
import Navbar from './components/page-ui/navBar'


export class App extends Component {
  render() {
    return (
      <div>
        <WelcomeSection />
        <Navbar />
      </div>
    )
  }
}

export default App