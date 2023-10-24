export const MakeDecisionAction = (decision) => { return { type: 'make_decision', payload: decision } };
export const SetEnemyDecisionAction = () => { return { type: 'set_enemy_decision' } }
export const SetWinnerAction = () => { return { type: 'set_winner' } }
export const NewRoundAction = () => { return { type: "new_round" } };