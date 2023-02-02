import React from "react";
import { Container, Row } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

export const Contact = () => {

    export const ContactUs = () => {
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_1lh95gd', 'template_iavy4ys', form.current, 'QuwslZ9JhUtP7lW0I')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        };

    return (
        <section>
            <Container className="contactForm">
                <Row>
                    <form action="" onSubmit={sendEmail}>
                        <div>
                            <h2> Contact Me! </h2>
                            <span>Full Name</span>
                            <br />
                            <input className="input_form" type="text" name="fullName" required />
                            <br />
                            <span>Phone Number</span>
                            <br />
                            <input className="input_form" type="text" name="phone" required />
                            <br />
                            <span>Enter Email</span>
                            <br />
                            <input className="input_form" type="text" name="email" required />
                            <br />
                            <span>Message</span>
                        </div>
                    </form>
                </Row>
            </Container>
        </section>
    )
}