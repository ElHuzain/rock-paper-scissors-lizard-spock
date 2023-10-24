import { styled } from 'styled-components';
import Card from '../../../GeneralComponents/Card';

const StyledCard = styled.div`
    position: absolute;
    width: 140px;

    @media only screen AND (max-width: ${({ theme }) => theme.screen.sm}) {
        width: 85px !important;
    }
`
const StyledRock = styled(StyledCard)`
right: 0;
bottom: -70px;

@media only screen AND (max-width: ${({ theme }) => theme.screen.sm}) {
    bottom: -38px;
}
`
const StyledPaper = styled(StyledCard)`
top: 50px;
right: -70px;
@media only screen AND (max-width: ${({ theme }) => theme.screen.sm}) {
    top: 30px;
    right: -38px;
}
`
const StyledScissors = styled(StyledCard)`
transform: translate(-50%, -50%);
top: 0;
left: 50%;
`
const StyledLizard = styled(StyledCard)`
left: 0;
bottom: -70px;

@media only screen AND (max-width: ${({ theme }) => theme.screen.sm}) {
    bottom: -38px;
}
`
const StyledSpock = styled(StyledCard)`
top: 50px;
left: -70px;
@media only screen AND (max-width: ${({ theme }) => theme.screen.sm}) {
    top: 30px;
    left: -38px;
}
`

export const Rock = () => <StyledRock><Card type="rock" click={() => { }} /></StyledRock>
export const Paper = () => <StyledPaper> <Card type="paper" /> </StyledPaper >
export const Scissors = () => <StyledScissors><Card type="scissors" /></StyledScissors>
export const Lizard = () => <StyledLizard><Card type="lizard" /></StyledLizard>
export const Spock = () => <StyledSpock> <Card type="spock" /> </StyledSpock >