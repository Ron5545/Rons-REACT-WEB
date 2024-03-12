import { TypeAnimation } from 'react-type-animation';
import './WelcomeSection.css'
import ContactModal from '../Contact/contact';


const WelcomeSection = () => {

    return (
        <section className="welcomeSection">

            <div className="bdGrid welcomeContainer">


                <div className="titleContainer">
                    <span className="text firstText">Hello,
                        <br />My Name Is Ron, <br />I'm a </span>
                    <span className="text secoundText">
                        <TypeAnimation
                            sequence={[
                                'Web Designer',
                                1000,
                                'FullStack Student',
                                1000,
                                'Freelancer',
                                1000
                            ]}
                            wrapper="span"
                            speed={10}
                            repeat={Infinity}
                        />
                    </span><br />
                    <button id="contactBtn" onClick={ContactModal}> Contact</button>

                </div>
            </div>

        </section >
    );
};




export default WelcomeSection;
