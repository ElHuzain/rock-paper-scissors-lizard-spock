import { styled } from 'styled-components';

import { useDispatch } from 'react-redux';
import { MakeDecisionAction } from '../../Redux/ActionCreators';

const StyledCardContainer = styled.div`
position: relative;
`

const Radiation = styled.div(({ theme }) => `
        z-index: 1;
        position: absolute;
        width: 600px;
        aspect-ratio: 1;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background-color: rgba(255,255,255,0.05);
        display: flex;
        div {
            display: flex;
            width: 80%;
            height: 80%;
            border-radius: 50%;
            margin: auto;
            background-color: rgba(255,255,255,0.05);
        }
        @media only screen AND (max-width: ${theme.screen.lg}) {
            width: 400px;
        }
`)

const StyledCard = styled.div(({ theme, color }) => `
position: relative;
z-index: 99 !important;
cursor: pointer;
width: 100%;
display: flex;
flex-direction: column;
aspect-ratio: 1;
border-radius: 50%;
background-image: ${theme.colors.primary[color]};
border-bottom: 8px solid ${theme.colors.primary.shadow[color]};
&:hover {
    opacity: 0.95;
}
&:active {
    transform: scale(0.9);
}
`)

const Circle = styled.div(({ theme, type }) => `
border-radius: 50%;
border-top: 8px solid rgba(0, 0, 0, 0.2);
width: 80%;
height: 80%;
margin: auto;
background-color: white;
display: flex;

${!type ? "background-color: rgba(0, 0, 0, 0.3);" : ""}

img {
    width: 50%;
    height: fit-content;
    margin: auto;
}
`)

const Card = ({ type, noclick, winner }) => {
    const dispatcher = useDispatch();

    const makeDecision = () => dispatcher(MakeDecisionAction(type))

    return (
        <StyledCardContainer>
            {winner && <Radiation><div><div></div></div></Radiation>}
            <StyledCard winner={winner} onClick={() => !noclick && makeDecision()} color={type}>
                <Circle type={type}>
                    {type && <img alt='Card Icon' src={'./images/icon-' + type + '.svg'} />}
                </Circle>
            </StyledCard>
        </StyledCardContainer>
    )

}

export default Card