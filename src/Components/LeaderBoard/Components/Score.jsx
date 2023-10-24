import { styled } from 'styled-components';

import { useSelector } from 'react-redux';

const StyledScore = styled.div`
padding: 1rem 3rem;
align-items: center;
display: flex;
flex-direction: column;
background-color: white;
border-radius: ${({ theme }) => theme.borderRadius};
h1 {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.neutral.score_text};
    letter-spacing: 3px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
}
p {
    font-size: 3.3rem;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: ${({ theme }) => theme.colors.neutral.dark_text};
}

@media only screen AND (max-width: ${({ theme }) => theme.screen.sm}) {
    padding: 1rem;
}
`

const Score = () => {

    const score = useSelector(val => val.Score);

    return (
        <StyledScore>
            <h1>SCORE</h1>
            <p>{score}</p>
        </StyledScore>
    )
}

export default Score
