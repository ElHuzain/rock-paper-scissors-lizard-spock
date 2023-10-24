import { styled } from 'styled-components';

const StyledPentagon = styled.div`
    position: relative;
    width: fit-content;
    /* width: 600px; */
    & > img {
        width: 100%;
    }

    @media only screen AND (max-width: ${({theme}) => theme.screen.sm}) {
        width: 200px;
    }
`

const Pentagon = ({ children }) => {
    return (
        <StyledPentagon>
            <img alt='Pentagon' src='./images/bg-pentagon.svg' />
            <div>
                {children}
            </div>
        </StyledPentagon>
    )
}

export default Pentagon
