import { Container, Row } from "react-bootstrap"


export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{'Hi Im webdecoded'}<span className="wrap">web developer</span></h1>
                        <p> 
                            Highly motivated and enthusiastic software engineer with a background in Mechanical 
                            Engineering and Computer Science looking to utilize my coding skills to create 
                            meaningful software applications. Offering expertise in Java, HTML, C++, Node.js, 
                            JavaScript, and SQL databases. 
                        </p>
                    </col>
                </Row>
            </Container>
        </section>
    )
}