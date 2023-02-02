import React, { useState, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import emailjs from '@emailjs/browser';



const Result = () => {
    return(
        <p> Your message has been successfully sent. I will contact you soon! </p>
    )
}

export const ContactComponent= () => {

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
        <section>
            <Container className="newsletter-bx wow slideInUp" id="contact">
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
                            <br />
                            <textarea name="message" required></textarea>
                            <br />
                            <button>SUBMIT</button>

                            <div className="row">{result ? <Result /> : null}</div>
                        </div>
                    </form>
                </Row>
            </Container>
        </section>
    )
}