import { ProjectCard } from "./ProjectCard";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/proj/DFA game.png";
import projImg2 from "../assets/proj/PropertyManagementDB.png";
import projImg3 from "../assets/proj/Trade Map dashboard pic.png";
import projImg4 from "../assets/proj/iso-install.jpg";
import projImg5 from "../assets/proj/figma.jpg";
import projImg6 from "../assets/proj/nuclear.jpg";
import projImg7 from "../assets/proj/rcproject.jpg";
import projImg8 from "../assets/proj/dogsite.png";
import projImg9 from "../assets/proj/walmartbot.png";
import projImg10 from "../assets/proj/mcs.jpg";



import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const project1 = [
        {
            title: "Educational DFA App",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Property Management Database",
            description: "SQL Database & Queries",
            imgUrl: projImg2,
        },
        {
            title: "Backend Admin Site",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Robotics & Software",
            description: "Installation",
            imgUrl: projImg4,
        },
        {
            title: "Cardless VCU App Design",
            description: "Design & Development",
            imgUrl: projImg5,
        },
        {
            title: "Nuclear Simulator GUI",
            description: "Design & Development",
            imgUrl: projImg6,
        }
    ];

    const project2 = [
        {
            title: "Self Navigating Car Project",
            description: "Design & Development",
            imgUrl: projImg7,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg8,
        },
        {
            title: "Walmart Self Checkout Bot",
            description: "Design & Development",
            imgUrl: projImg9,
        },
        {
            title: "More Coming Soon!",
            description: " ",
            imgUrl: projImg10,
        },
        {
            title: "More Coming Soon!",
            description: " ",
            imgUrl: projImg10,
        },
        {
            title: "More Coming Soon!",
            description: " ",
            imgUrl: projImg10,
        }
    ];

    const project3 = [
        {
            title: "More Coming Soon!",
            description: " ",
            imgUrl: projImg10,
        },
        {
            title: "More Coming Soon!",
            description: " ",
            imgUrl: projImg10,
        },
        {
            title: "More Coming Soon!",
            description: " ",
            imgUrl: projImg10,
        },
        {
            title: "More Coming Soon!",
            description: " ",
            imgUrl: projImg10,
        },
        {
            title: "More Coming Soon!",
            description: " ",
            imgUrl: projImg10,
        },
        {
            title: "More Coming Soon!",
            description: " ",
            imgUrl: projImg10,
        }
    ];

    

    return (
        <section className="projects" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>These are all my projects i have worked on</p>
                          
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="bounce" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        project1.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                            <Row>
                                                    {
                                                        project2.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                            <Row>
                                                    {
                                                        project3.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                    </div>}
                        </TrackVisibility>  
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}