import {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import HeaderImg from "../assets/img/3D_Headshot_NoBG.png";

import 'animate.css';



export const Banner = () => {
    
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Engineer", "Web Developer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    
    
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible}) =>
                            <div className={isVisible ? "animate_animated animate_fadeIn" : ""}>
                                <span className="tagline">Welcome To My Portfolio</span>
                                <h1>{'Hi, Im Malcolm Breckenridge '}<br></br><span className="wrap">{text}</span></h1>
                                <p> 
                                    Malcolm is a highly motivated and enthusiastic software engineer with a background int Computer
                                    Science from Virginia Commonwealth University. He has a passion for utilizing his coding skills
                                    to create meaningful software and web applications. Offering expertise in Java, HTML, C++, JavaScript, 
                                    and SQL databases. When not online, he loves outdoor activities and traveling.  
                                </p>
                                <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>
                            </div>
                            }
                        </TrackVisibility>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        <img src={HeaderImg} alt="Header Img" />

                    </Col>
                </Row>
            </Container>
        </section>
    )
}