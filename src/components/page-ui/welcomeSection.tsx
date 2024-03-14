import { useState } from 'react';
import '../styles/WelcomeSection.css';
import Typewriter from 'typewriter-effect';
import Modal from '../page-ui/Modal';

function WelcomeSection() {

    const [display, setDisplay] = useState<string>('none');

    const toggleModal = () => {
        setDisplay(display === 'none' ? 'block' : 'none');
    };


    return (
        <section className="welcomeSection">

            <div className="bdGrid welcomeContainer">

                <div className="titleContainer">
                    <h1 className="text firstText home">Hello,<br />My Name Is Ron,<br />I'm a</h1>
                    <h1 className="text secoundText">
                        <Typewriter
                            options={{
                                strings: ['Web Developer', 'Web Designer', 'FullStack Developer', 'Frontend Developer', 'Backend Developer'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 100
                            }}
                        />
                    </h1>

                    <button className="button" onClick={toggleModal}>Contact Me</button>


                </div>


            </div>

            <Modal showModal={display === 'block'} toggleModal={toggleModal} />

        </section>

    );
}

export default WelcomeSection;

