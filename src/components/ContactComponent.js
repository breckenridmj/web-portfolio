import React, { useState, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import emailjs from '@emailjs/browser';



const Result = () => {
    return (
        <p> Your message has been successfully sent. I will contact you soon! </p>
    )
}

export const ContactComponent = () => {

    const form = useRef();
    const [result, showResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1lh95gd', 'template_iavy4ys', form.current, 'QuwslZ9JhUtP7lW0I')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }
            );
        e.target.reset();
        showResult(true);

    };

    return (
        <section className="contact" id="connect">
            
            <Container className="contact-bx">
            <h2> Contact Me! </h2>
                <Row>
                    <form ref={form} onSubmit={sendEmail}>
                        <div>
                            <Row className="new-email-bx">
                                <span></span>
                                <input className="input_form" type="text" placeholder="Enter Full Name" name="fullName" required />
                                <span></span>                          
                                <input className="input_form" type="text" placeholder="Enter Phone Number" name="phone" required />
                                <span></span>
                                <input className="input_form" type="text" placeholder="Enter Email" name="email" required />
                                
                                <span></span>
                                <textarea className="input_form" name="message" placeholder="Type message here..." required></textarea>
                                <br />
                               
                            </Row>
                            <button className="sub" type="submit" value="Send">SUBMIT</button>
                            <div className="row">{result ? <Result /> : null}</div>
                        </div>
                    </form>
                </Row>
            </Container>
        </section>
    )
}