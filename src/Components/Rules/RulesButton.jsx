import { styled } from 'styled-components';

const StyledRules = styled.div`
z-index: 99;
position: absolute;
bottom: 2rem;
right: 2rem;
button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    &:hover {
        opacity: 0.9;
    }
    padding: 0.7rem 2rem;
    outline: 3px solid white;
    color: white;
    letter-spacing: 3px;
    font-size: ${({ theme }) => theme.font.size.small};
    font-weight: ${({ theme }) => theme.font.weight.thin};
    border-radius: ${({ theme }) => theme.borderRadius};
}

@media only screen AND (max-width: ${({ theme }) => theme.screen.sm}) {
       position: unset;
       margin: 0 auto;
}

`

const RulesButton = ({ openRules }) => {

    return (
        <StyledRules>
            <button onClick={() => openRules()} >RULES</button>
        </StyledRules>
    )
}

export default RulesButton
