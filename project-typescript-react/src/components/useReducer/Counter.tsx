import { useReducer } from "react";
import './Counter.scss';

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
    Reset = 'RESET'
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

  const resetAction: Action ={
    type: ActionKind.Reset,
    payload: 0
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
          value: state.value ? state.value - action.payload : 0
        }
      case ActionKind.Reset:
        return {
          ...state,
          value: initialCounterState.value
        }  
      default:
        return state;
    }
  }
  
const Counter: React.FC = () => {

  const [ state, dispatch ] = useReducer(counterReducer, initialCounterState);

  return (
    <div className="container-counter">
      <div className="content-title">
        <h1 className="title">
          Counter using useReducer
        </h1>
      </div>
      <h2 className="counter">
        Count : {state.value}
      </h2>
      <button className="btn" onClick={() => dispatch(decreaseAction)}>
        -
      </button>
      <button className="btn" onClick={() => dispatch(resetAction)}>
        reset
      </button>
      <button className="btn" onClick={() => dispatch(increaseAction)}>
        +
      </button>
    </div>
  );
}

export default Counter;