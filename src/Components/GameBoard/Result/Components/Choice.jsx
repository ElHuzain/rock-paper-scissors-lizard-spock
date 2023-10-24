import { styled } from 'styled-components';
import Card from '../../../GeneralComponents/Card';

import { useSelector } from 'react-redux';

const StyledChoice = styled.div(({ theme }) => `
display: flex;
flex-direction: column;
gap: 3rem;
text-align: center;



&> h1 {
    color: white;
    letter-spacing: 5px;
    font-size: 1.5rem;    
}

@media only screen AND (max-width: ${theme.screen.lg}) {
    flex-direction: column-reverse;
    gap: 2rem;
}
& > div {
    margin: auto;
    width: 300px;
    @media only screen AND (max-width: ${theme.screen.lg}) {
        width: 200px;
    }
    @media only screen AND (max-width: ${theme.screen.sm}) {
        width: 150px;
    }
}
`)

const Choice = ({ winner, type }) => {

    const UserDecision = useSelector(val => val.UserDecision);
    const EnemyDecision = useSelector(val => val.EnemyDecision);
    const Winner = useSelector(val => val.Winner);

    return (
        <StyledChoice>
            <h1>{type === 'user' ? 'YOU PICKED' : 'THE HOUSE PICKED'}</h1>
            <div>
                {type === 'user' ? <Card noclick={true} winner={Winner === 'user' && true} type={UserDecision} /> : <Card noclick={true} winner={Winner === 'enemy' && true} type={EnemyDecision} />}
            </div>
        </StyledChoice>
    )
}

export default Choice
