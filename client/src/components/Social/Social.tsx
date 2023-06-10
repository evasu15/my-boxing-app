import styled from "styled-components";
import { Container } from "react-bootstrap";
import  ModalComponents from "../Modal/Modal";
import About from "../../pages/About";

const ContactComponent = styled.header`
padding: 10rem 0;
height: 10vh;
background: Black;
`

const HeaderContainer = styled.div`
background-color: #474e5d;
padding: 0.5rem;
color: Black;
width: full;
`;

const Heading = styled.h1`
font-size: 3rem;
`
const SubHeading = styled.h3`
font-size: 1.6rem 1rem;
padding: 0.5rem;
margin: 10rem 10;
font-weight: 350;
color: white;
`



const Info = () => {
    return <ContactComponent>
        <Container>
            <HeaderContainer>
                <Heading>Contact Me For Membership Info
                    <SubHeading>
                        <table>
                            <tr>
                                <th>BoxingwithEddie@gmail.com</th>
                            </tr>
                        </table>
                        <table>
                            <tr> 
                                <th>Follow My Social Media Accounts</th>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <td>Instagram:</td>
                                <td><a href="https://www.instagram.com/eddievasquez140/">Vist My Instagram</a></td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <td>Youtube:</td>
                                <td><a href="https://www.youtube.com/@boxingwitheddie">Vist My Youtube</a></td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <td>TikTok:</td>
                                <td><a href="https://www.tiktok.com/@readyeddie23?lang=en">Vist My Tiktok</a></td>
                            </tr>
                        </table>
                    </SubHeading>
                </Heading>
            </HeaderContainer>
        </Container>
    </ContactComponent>
};


export default Info;