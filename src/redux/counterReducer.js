const initialState = {
    counters: [],
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT_COUNTER':
        return {
          ...state,
          counters: state.counters.map((counter) =>
            counter.id === action.payload ? { ...counter, value: counter.value + 1 } : counter
          ),
        };
      case 'DECREMENT_COUNTER':
        return {
          ...state,
          counters: state.counters.map((counter) =>
            counter.id === action.payload ? { ...counter, value: counter.value - 1 } : counter
          ),
        };
      case 'ADD_COUNTER':
        return {
          ...state,
          counters: [...state.counters, action.payload],
        };
      case 'REMOVE_COUNTER':
        return {
          ...state,
          counters: state.counters.filter((counter) => counter.id !== action.payload),
        };
      case 'RESET_COUNTER':
        return {
          ...state,
          counters: state.counters.map((counter) =>
            counter.id === action.payload ? { ...counter, value: counter.startValue } : counter
          ),
        };
      case 'UPDATE_COUNTER_LABEL':
        return {
          ...state,
          counters: state.counters.map((counter) =>
            counter.id === action.payload.counterId ? { ...counter, label: action.payload.label } : counter
          ),
        };
      case 'UPDATE_START_VALUE':
        return {
          ...state,
          counters: state.counters.map((counter) =>
            counter.id === action.payload.counterId ? { ...counter, startValue: action.payload.startValue } : counter
          ),
        };
      default:
        return state;
    }
  };
  
  export default counterReducer;
  