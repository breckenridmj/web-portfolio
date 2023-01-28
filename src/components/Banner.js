import { Container, Row } from "react-bootstrap"


export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{'Hi I'm webdecoded'}<span className="wrap">web developer</span></h1>
                    </col>
                </Row>
            </Container>
        </section>
    )
}