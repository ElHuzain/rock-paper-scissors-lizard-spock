import { ThemeProvider } from "styled-components";
import Theme from './AppTheme';
import GlobalStyles from './Components/GeneralComponents/GlobalStyles';
import { styled } from 'styled-components';
import { useState } from 'react';

import { useSelector } from 'react-redux';

import LeaderBoard from './Components/LeaderBoard/LeaderBoard';
import Decision from './Components/GameBoard/Decision/Decision';
import Result from './Components/GameBoard/Result/Result';
import RulesButton from './Components/Rules/RulesButton';
import RulesContainer from './Components/Rules/RulesContainer';

const AppContainer = styled.div(({ theme }) => `
position: relative;
display: flex;
flex-direction: column;
/* gap: 4rem; */
width: 100%;
max-width: ${theme.screen.xlg};
height: 100%;
max-height: 768px;
margin: auto;
background-image: ${theme.colors.background};
box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.1);
padding: 2rem;

@media only screen AND (max-width: ${theme.screen.sm}) {
  justify-content: space-between;
  gap: 2rem;
  max-height: 100vh;
}
`);

function App() {
  const [expandedRules, setExpandedRules] = useState(false);

  const UserDecision = useSelector(val => val.UserDecision);

  const closeRules = () => setExpandedRules(false);
  const openRules = () => setExpandedRules(true);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <RulesContainer expandedRules={expandedRules} closeRules={closeRules} />
      <AppContainer>
        <LeaderBoard />
        {UserDecision === null ? <Decision /> : <Result />}
        <RulesButton openRules={openRules} />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
