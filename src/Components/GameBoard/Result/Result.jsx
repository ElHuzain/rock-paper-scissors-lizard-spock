import { styled } from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import Choice from './Components/Choice';
import Announcement from './Components/Announcement';
import { SetWinnerAction, SetEnemyDecisionAction } from '../../../Redux/ActionCreators';

const StyledResult = styled.div(({ theme }) => `
margin: 0 auto;
margin-top: 3rem;
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;

@media only screen AND (max-width: ${theme.screen.sm}) {
    justify-content: space-around;
    height: 100%;
    gap: 0rem;
}

`)

const Flex = styled.div`
    display: flex;
    gap: 4rem;
    align-items: center;
    @media only screen AND (max-width: ${({ theme }) => theme.screen.lg}) {
        gap: 1rem;
    }
`

const Clock = styled.p(({ theme, variant }) => `
    color: white;
    font-weight: ${theme.font.weight.bold};
    font-size: 3rem;

    ${variant === 'mobile' ? 'display: none;' : ''}

    @media only screen AND (max-width: ${theme.screen.md}) {
        ${variant === 'mobile' ? 'display: unset;' : ''};
        ${variant === 'desktop' ? 'display: none;' : ''}
    }
`)

const Result = () => {
    const [Timer, setTimer] = useState(5);

    const dispatcher = useDispatch();
    const Winner = useSelector(val => val.Winner);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTimer(prev => prev - 1);
        }, 1150);

        if (Timer === 2) {
            dispatcher(SetEnemyDecisionAction());
        }
        if (Timer === 0) {
            dispatcher(SetWinnerAction());
        }

        return () => { clearTimeout(timeout) }
    }, [Timer]);

    return (
        <StyledResult>
            <Flex>
                <Choice type="user" winner={true} />
                {Winner !== null ? <Announcement variant='desktop' Timer={Timer} /> : <Clock variant='desktop'>{Timer >= 3 ? Timer - 2 : 0}</Clock>}
                <Choice type="enemy" />
            </Flex>
            {Winner !== null ? <Announcement variant='mobile' Timer={Timer} /> : <Clock variant='mobile'>{Timer >= 3 ? Timer - 2 : 0}</Clock>}
        </StyledResult >
    )
}

export default Result
