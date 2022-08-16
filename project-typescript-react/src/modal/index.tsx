import React, { useReducer } from "react";
import Modal from "./Modal";
import './modal.scss';

type Reducer<State, Action> = 
  (state: State, action: Action) => State;

type State = {
    value: boolean
}

const initialState = {
    value: false,
}

enum ActionModal {
    Open = 'OPEN',
    Close = 'CLOSE',
  }
  
  type Action = {
    type: ActionModal
  }

function reducer(state: State, action: Action) : State {

const {type} = action;

  switch (type) {
      case ActionModal.Open:
      return {
          ...state, 
          value: true
        }
      case ActionModal.Close:
        return {
          ...state, 
          value: false
        }
      default:
        return state;
    }
}

const open: Action = {
    type: ActionModal.Open,
}

const close : Action = {
    type: ActionModal.Close,
}

const Index = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const cloeModal = () => {
        dispatch(close);
    }

    return(
        <>
          <div className="content-modal">
            <div className="title-content-modal">
                <h1 className="title">
                    Modal using useReducer
                </h1>
            </div>
            <button 
                className="btn"
                onClick={ () => dispatch(open)}
            >
                open
            </button>
          </div>
          {state.value && <Modal isOpen={state.value} closeModal={cloeModal}/> }
        </>
    );
}

export default Index;