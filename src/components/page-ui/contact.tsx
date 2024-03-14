/* import { useState } from 'react';
import "./styles/contact.css"


const ContactModal: React.FC = () => {
    const [onClick, setOnClick] = useState(false);

    function toggleModal() {
        setOnClick(!onClick);
    }

    return (
        <div className="contact" onClick={toggleModal}>
            <div className={onClick ? "modal show" : "modal"}>
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
        </div >
    );
}


export default ContactModal;






 */