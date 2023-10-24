import { styled } from 'styled-components';

const StyledRulesContainer = styled.div(({ theme }) => `
    position: absolute;
    background-color: rgba(0,0,0,0.3);
    z-index: 100;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
        font-weight: ${theme.font.weight.bold};
        color: ${theme.colors.neutral.dark_text};
    }
    div {
        border-radius: ${theme.borderRadius};
        max-width: 900px;
        background-color: white;
        margin: auto;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        header {
            display: flex;
            justify-content: space-between;
            img {
                aspect-ratio: 1 !important;
                height: fit-content;
                margin: auto 0;
                cursor: pointer;
            }
        }
        div {
            img {
                width: 100%;
            }
        }

        @media only screen AND (max-width: ${theme.screen.md}) {
            justify-content: center;
            height: 100vh;
        width: 100%;
    }
    }

`)

function RulesContainer({ expandedRules, closeRules }) {

    return (
        <>
            {expandedRules && <StyledRulesContainer>
                <div>
                    <header>
                        <h1>RULES</h1>
                        <img alt="close" onClick={() => closeRules()} src="./images/icon-close.svg" />
                    </header>
                    <div>
                        <img alt="rules" src="./images/image-rules-bonus.svg" />
                    </div>
                </div>
            </StyledRulesContainer>}
        </>
    )
}

export default RulesContainer
