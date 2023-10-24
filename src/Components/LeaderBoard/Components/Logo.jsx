import { styled } from 'styled-components';

const StyledLogo = styled.div`
height: fit-content;
margin: auto 0;
    img {
        width: 100%;
    }
    @media only screen AND (max-width: ${({theme}) => theme.screen.sm}) {
        img {
            width: 80%;
        }
    }
`

const Logo = () => {
    return (
        <StyledLogo>
            <img alt="Logo" src="./images/logo-bonus.svg" />
        </StyledLogo>
    )
}

export default Logo
