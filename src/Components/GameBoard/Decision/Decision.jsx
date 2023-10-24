import { styled } from 'styled-components';
import { Rock, Paper, Scissors, Lizard, Spock } from './Components/Cards';
import Pentagon from './Components/Pentagon';

const StyledDecision = styled.div(({ theme }) => `
  margin: auto;
`)

const Decision = () => {
  return (
    <StyledDecision>
      <Pentagon>
        <Rock />
        <Paper />
        <Scissors />
        <Lizard />
        <Spock />
      </Pentagon>
    </StyledDecision>
  )
}

export default Decision
