import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementCounter,
  decrementCounter,
  addCounter,
  removeCounter,
  resetCounter,
  updateCounterLabel,
  updateStartValue,
} from '../redux/counterAction';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';


const CounterComponent = () => {
    const [error, setError] = useState('');
    
    const navigate=useNavigate();
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const handleIncrement = (counterId) => {
    dispatch(incrementCounter(counterId));
  };

  const handleDecrement = (counterId) => {
    dispatch(decrementCounter(counterId));
  };

  const handleAddCounter = () => {
    const counter = {
      id: Date.now().toString(), 
      label: '',
      value: 0,
      startValue: 0,
    };
    dispatch(addCounter(counter));
  };

  const handleRemoveCounter = (counterId) => {
    dispatch(removeCounter(counterId));
  };

  const handleResetCounter = (counterId) => {
    dispatch(resetCounter(counterId));
  };

  const handleLabelChange = (counterId, label) => {
    dispatch(updateCounterLabel(counterId, label));
  };

  const handleStartValueChange = (counterId, startValue) => {
    dispatch(updateStartValue(counterId, startValue));
  };
  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        setError('');
        navigate('/');
        console.log('User signed out');
      })
      .catch((error) => {
        setError(error.message);
        console.error('Sign-out error:', error);
      });
  };

  return (
    <div>
      <h2>Counters</h2>
      
      <button onClick={handleSignOut}>Sign out</button>
      <button onClick={handleAddCounter}>Add Counter</button>
      {counters.map((counter) => (
        <div key={counter.id}>
          <h3>Counter {counter.label}</h3>
          <p>Enter the start value and press reset to start the counter for that start value</p>
          <div>
            <label>
              Label:
              <input
                type="text"
                value={counter.label}
                onChange={(e) => handleLabelChange(counter.id, e.target.value)}
              />
            </label>
            <label>
              Start Value:
              <input
                type="number"
                value={counter.startValue}
                onChange={(e) => handleStartValueChange(counter.id, parseInt(e.target.value))}
              />
            </label>
          </div>
          <div>
            <button onClick={() => handleIncrement(counter.id)}>+</button>
            <button onClick={() => handleDecrement(counter.id)}>-</button>
            <button onClick={() => handleResetCounter(counter.id)}>Reset</button>
            <button onClick={() => handleRemoveCounter(counter.id)}>Remove</button>
          </div>
          <p>Value: {counter.value}</p>
        </div>
      ))}
    </div>
  );
};

export default CounterComponent;
