'use client';
/* import { Button, Modal } from 'flowbite-react'; */
import { Modal } from 'flowbite-react';
import { useState } from 'react';
import "./contact.css"

function ContactModal() {
    const [openModal, setOpenModal] = useState(false);


    function onCloseModal() {
        setOpenModal(false);
        /* setEmail(''); */
    }

    return (
        <section className="contact">

            <button id='contactBtn' className='OpenModalBtn' type="submit" onClick={() => setOpenModal(true)}>Contact</button>




            {/* <Button className='OpenModalBtn' onClick={() => setOpenModal(true)}>Toggle modal</Button> */}

            < Modal show={openModal} onClose={onCloseModal} popup >

                <Modal.Body className='modal-body'>

                    <div className="containerContact">

                        <div className="contactMe">

                            <section className="contact">

                                <h2>Contact Me!</h2>

                                <form action="#">

                                    <div className="input-box">

                                        <div className="input-field field">
                                            <input type="text" placeholder="Full Name" id="name" className="item"></input>
                                            <div className="error-txt">Full Name Can't be blank</div>
                                        </div>
                                        <div className="input-field field">
                                            <input type="text" placeholder="Email Address" id="email" className="item"></input>
                                            <div className="error-txt email">Email Address can't be blank</div>
                                        </div>

                                    </div>


                                    <div className="input-box">

                                        <div className="input-field field">
                                            <input type="text" placeholder="Phone Number" id="phone" className="item"></input>
                                            <div className="error-txt">Phone Number can't be blank</div>

                                        </div>
                                        <div className="input-field field">
                                            <input type="text" placeholder="Subject" id="subject" className="item"></input>
                                            <div className="error-txt">Subject can't be blank</div>
                                        </div>

                                    </div>

                                    <div className="textarea-field field">

                                        <textarea name="" id="message" placeholder="Your message" className="item"></textarea>
                                        <div className="error-txt">Message can't be blank</div>

                                    </div>


                                </form>

                            </section>
                        </div>

                    </div>

                </Modal.Body>

            </Modal>

        </section >
    );
}

export default ContactModal;