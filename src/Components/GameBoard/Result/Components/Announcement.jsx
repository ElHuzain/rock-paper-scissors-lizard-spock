import { styled } from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { NewRoundAction } from '../../../../Redux/ActionCreators';

const StyledAnnouncement = styled.div(({ theme, variant }) => `
z-index: 99;
display: flex;
flex-direction: column;
width: fit-content;

h1 {
    font-size: 4rem;
    color: white;
    font-weight: ${theme.font.weight.bold};
}


button {
    border: none;
    cursor: pointer;
    background-color: white;
    border-radius: ${theme.borderRadius};
    letter-spacing: 5px;
    padding: 1rem;
    width: 100%;
    font-size: 1rem;
    color: ${theme.colors.neutral.dark_text};
    font-weight: ${theme.font.weight.bold};
    &:hover {
        opacity: 0.9;
    }
}

${variant === 'mobile' ? 'display: none;' : ''}

@media only screen AND (max-width: ${theme.screen.md}) {
    ${variant === 'desktop' ? 'display: none;' : ''}
    ${variant === 'mobile' ? 'display: flex;' : ''}
}

`)


const Announcement = ({ variant }) => {

    const dispatcher = useDispatch();
    const Winner = useSelector(val => val.Winner);

    function getWinner() {
        if (Winner === 'user') return 'YOU WIN'
        else if (Winner === 'enemy') return 'YOU LOSE'
        else return 'DRAW'
    }

    return (
        <StyledAnnouncement variant={variant}>
            <h1>{getWinner()}</h1>
            <button onClick={() => dispatcher(NewRoundAction())}>PLAY AGAIN</button>
        </StyledAnnouncement>
    )
}

export default Announcement;