export const incrementCounter = (counterId) => {
    return {
      type: 'INCREMENT_COUNTER',
      payload: counterId,
    };
  };
  
  export const decrementCounter = (counterId) => {
    return {
      type: 'DECREMENT_COUNTER',
      payload: counterId,
    };
  };
  
  export const addCounter = (counter) => {
    return {
      type: 'ADD_COUNTER',
      payload: counter,
    };
  };
  
  export const removeCounter = (counterId) => {
    return {
      type: 'REMOVE_COUNTER',
      payload: counterId,
    };
  };
  
  export const resetCounter = (counterId) => {
    return {
      type: 'RESET_COUNTER',
      payload: counterId,
    };
  };
  
  export const updateCounterLabel = (counterId, label) => {
    return {
      type: 'UPDATE_COUNTER_LABEL',
      payload: { counterId, label },
    };
  };
  
  export const updateStartValue = (counterId, startValue) => {
    return {
      type: 'UPDATE_START_VALUE',
      payload: { counterId, startValue },
    };
  };
  