import styled from "styled-components";
import { Container } from "react-bootstrap"
import  ModalComponents from "../Modal/Modal";

const HeroComponent = styled.header`
padding: 5rem 0;
height: 60vh;
background-image: url("https://tinypic.host/images/2023/02/18/boxing.jpg");
background-size: 43%;
background-position: center;
border: 2px solid;
color: pink;
`;

const HeaderContainer = styled.div`
background-color: grey;
padding: 1rem;
color: white;
width: 32.5rem;
`;

const Heading = styled.h1`
font-size: 5rem;
`
const SubHeading = styled.h3`
margin: 1rem 0;
font-weight: 400;
`


const Hero = () => {
    return <HeroComponent> 
        <Container>
            <HeaderContainer>
                <Heading>Boxing With Eddie</Heading>
                <SubHeading>
                    Grow physically and mentally by training your mind and body with my all level boxing program. 
                </SubHeading>
                <ModalComponents text="Sign Up" variant="primary" isSignupFlow={true} />
                <ModalComponents text="Login" variant="danger" isSignupFlow={false}/>
            </HeaderContainer>
        </Container>
    </HeroComponent>
};

export default Hero;
