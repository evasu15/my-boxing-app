import { Container, Navbar, NavItem, NavLink } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context";
import styled from "styled-components";

const LeftNavContainer = styled.div`
margin-left: auto; 
`
const RightNavContainer = styled.div`
font-size: 1.1rem;
border-style: solid;
background-color: black;
margin: 8rem 8;
font-weight: 650;
`

const Nav = () => {
    const [state, setState] = useContext(UserContext);

    const navigate = useNavigate()

   const handleLogout = () => {
    setState({data: null, loading: false, error: null});
    localStorage.removeItem("token");
    navigate("/");
   };
    return (
        <RightNavContainer>
        <Navbar>
        <NavItem>
                <Link to="/" className="nav-link">
                    Home
                </Link>
        </NavItem>
        <NavItem>
                <Link to="/about" className="nav-link">
                    About
                </Link>
        </NavItem>
        <NavItem>
                <Link to="/contact" className="nav-link">
                    Contact
                </Link>  
        </NavItem>
        {state.data && (
            <LeftNavContainer>
            <NavItem>
            <NavLink onClick={handleLogout}>Logout</NavLink>
            </NavItem>
            </LeftNavContainer>
        )}
    </Navbar>
    </RightNavContainer>

  
    );
};

export default Nav
