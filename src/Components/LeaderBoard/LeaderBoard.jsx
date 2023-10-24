import { styled } from 'styled-components';

import Score from './Components/Score';
import Logo from './Components/Logo';

const StyledLeaderBoard = styled.div`
    z-index: 99;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    outline: 4px solid ${({ theme }) => theme.colors.neutral.header_outline};
    border-radius: ${({ theme }) => theme.borderRadius};
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
    
    @media only screen AND (max-width: ${({theme}) => theme.screen.sm}) {
        padding: 1rem;
    }
`

const LeaderBoard = () => {
    return (
        <StyledLeaderBoard>
            <Logo />
            <Score />
        </StyledLeaderBoard>
    )
}

export default LeaderBoard
