import { useState } from 'react';
import './styles/WelcomeSection.css';
import Typewriter from 'typewriter-effect';

function WelcomeSection() {

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => setShowModal(!showModal);

    return (
        <section className="welcomeSection">

            <div className="bdGrid welcomeContainer">

                <div className="titleContainer">
                    <span className="text firstText home">Hello,<br />My Name Is Ron,<br />I'm a</span>
                    <span className="text secoundText">
                        <Typewriter
                            options={{
                                strings: ['Web Developer', 'Web Designer', 'FullStack Developer', 'Frontend Developer', 'Backend Developer'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 100
                            }}
                        />
                    </span>
                    <button onClick={toggleModal} className="contactModal"> Contact</button>
                </div>

                {showModal ? (

                    <div id="myModal" className="modal" style={{ display: showModal ? 'block' : 'none' }}>
                        <div className="modal-content">

                            <div className="modal-header">
                                <span className="close" onClick={toggleModal}>×</span>
                                <h2>Contact Ron</h2>
                            </div>

                            <div className="containerContact">

                                <div className="contactMe">

                                    <section className="contact">

                                        <form className="contactForm" id="contactForm">

                                            <div className="input-box">

                                                <div className="input-field field">
                                                    <input type="text" placeholder="Full Name" id="name" className="item" autoComplete="off" />
                                                    <div className="error-txt">Full Name Can't be blank</div>
                                                </div>

                                                <div className="input-field field">
                                                    <input type="text" placeholder="Email Address" id="email" className="item" autoComplete="off" />
                                                    <div className="error-txt email">Email Address can't be blank</div>
                                                </div>

                                            </div>

                                            <div className="input-box">

                                                <div className="input-field field">
                                                    <input type="text" placeholder="Phone Number" id="phone" className="item" autoComplete="off" />
                                                    <div className="error-txt">Phone Number can't be blank</div>
                                                </div>

                                                <div className="input-field field">
                                                    <input type="text" placeholder="Subject" id="subject" className="item" autoComplete="off" />
                                                    <div className="error-txt">Subject can't be blank</div>

                                                </div>

                                            </div>

                                            <div className="textarea-field field">
                                                <textarea name="" id="message" cols={30} rows={10} placeholder="Your message" className="item" autoComplete="off"></textarea>
                                                <div className="error-txt">Message can't be blank</div>
                                            </div>

                                            <div className="divBtnModal">
                                                <button type="submit">Send Message</button>
                                            </div>

                                        </form>

                                    </section>

                                </div>

                            </div>

                        </div>

                    </div>





                ) : null}


            </div>

        </section>

    );
}

export default WelcomeSection;

