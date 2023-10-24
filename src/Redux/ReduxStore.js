import { createStore } from 'redux';

const initial_state = {
    UserDecision: null,
    EnemyDecision: null,
    Winner: null,
    Score: 0,
}

const AppReducer = (state = initial_state, action) => {
    switch (action.type) {
        case "make_decision": return {
            ...state,
            UserDecision: action.payload
        }

        case "new_round": return {
            ...state,
            UserDecision: null,
            EnemyDecision: null,
            Winner: null
        };

        case 'set_enemy_decision': {
            const Cards = ['rock', 'paper', 'scissors', 'lizard', 'spock']
            const ED = Cards[Math.floor(Math.random() * Cards.length)];
            return {
                ...state,
                EnemyDecision: ED
            }
        }

        case 'set_winner': {

            const GameObject = {
                'rock': {
                    beatenBy: ['spock', 'paper'],
                },
                'paper': {
                    beatenBy: ['scissors', 'lizard'],
                },
                'scissors': {
                    beatenBy: ['spock', 'rock'],
                },
                'lizard': {
                    beatenBy: ['scissors', 'rock'],
                },
                'spock': {
                    beatenBy: ['lizard', 'paper'],
                },
            }

            const UserCard = GameObject[state.UserDecision];
            const EnemyCard = state.EnemyDecision

            if (UserCard.beatenBy.includes(EnemyCard)) return {
                ...state,
                Winner: 'enemy',
                Score: state.Score - 1
            }
            else if (state.UserDecision === EnemyCard) return {
                ...state,
                Winner: 'draw',
            }
            else return {
                ...state,
                Winner: 'user',
                Score: state.Score + 1
            }
        }

        case "modify_wins": return;
        default: return state;
    }
}

const store = createStore(AppReducer);

export default store;