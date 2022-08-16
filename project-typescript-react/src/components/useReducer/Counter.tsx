import { useReducer } from "react";

type Reducer<State, Action> = 
  (state: State, action: Action) => State;

  type State = {
    value: number;
  }
  
  const initialCounterState: State = {
    value: 0
  }

  enum ActionKind {
    Increase = 'INCREASE',
    Decrease = 'DECREASE',
  }
  
  type Action = {
    type: ActionKind,
    payload: number
  }
  
  const increaseAction: Action = {
    type: ActionKind.Increase,
    payload: 1
  }
  
  const decreaseAction: Action = {
    type: ActionKind.Decrease,
    payload: 1
  }


  function counterReducer(state: State, action: Action): State {
    const {type, payload} = action;
    
    switch (type) {
      case ActionKind.Increase:
      return {
          ...state, 
          value: state.value + action.payload
        }

      case ActionKind.Decrease:
        return {
          ...state, 
          value: state.value - action.payload
        }
      default:
        return state;
    }
  }
  
const Counter: React.FC = () => {

  const [ state, dispatch ] = useReducer(counterReducer, initialCounterState);

  return (
    <div>
      Count: {state.value}
      <button onClick={() => dispatch(decreaseAction)}>
        -
      </button>
      <button onClick={() => dispatch(increaseAction)}>
        +
      </button>
    </div>
  );
}

export default Counter;