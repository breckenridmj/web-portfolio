//create useState Hook allows us to change the value and update it on the render
//added useEffect Hook
import {useState, useEffect} from "react";

// import Navbar and and container from react bootstrap
// link to navbar component for bootstrap https://react-bootstrap.github.io/components/navbar/
import { Navbar, Container } from "react-bootstrap";

// import logo from assets folder
import logo from '../assets/img/logo.svg';
// import nav icons from assets folder
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';






//created a functional component
export const NavBar = () => {
    //UseState hook: changes state depending on active link
    const [activeLink, setActiveLink] = useState('home');
    //UseState hook: keeps information on whether user has scrolled
    const {scrolled, seSecrolled} = useState(false);

    // useEffect determines if page is crolled or not
    useEffect(() => {
        const onScroll = () => {
            //if height is scrolled more than 50 set scrolled to true
            if (window.scrollY > 50) {
                seSecrolled(true);
            //if user scrolled back or hasn't scrolled set scrolled to false
            } else {
                seSecrolled(false);
            }
        }
        
        // added window Event Listener that only gets fired on scroll then function that determines what happens on scroll
        window.addEventListener("scroll", onScroll);

        // remove it when component gets removed from the dom
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    //
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    //returning functional component
    return (

        // copied bootstrap component 
        // SHIFT+ALT+F (auto-formats)
        // className based on what condition the scroll is (if its scrolled name it scrolled if its not leave it blank)
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>

            //The container classes are flexbox classes that allow you to create a grid system.
            <Container>
                <Navbar.Brand href="#home">
                    //image
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                
                //img on mobile menu is minimized
                <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    //Navbar links
                    <Nav className="me-auto">
                        // class name is set to active navbar-link when active link is equal to "home" & if its not set to just navbar-link 
                        // onClick function updates the name of the link to "home" 
                        // same goes for each link 
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}> Home </Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}> Skills </Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}> Projects </Nav.Link>
                    </Nav>
                    
                    //Social Icons
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="" /></a>
                            <a href="#"><img src={navIcon2} alt="" /></a>
                            <a href="#"><img src={navIcon3} alt="" /></a>
                        </div>

                        //button that for the contact form
                        <button className="vvd" onClick={() => console.log('connect')}>
                            <span> Let's Connect</span>
                        </button>
                    </span>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}