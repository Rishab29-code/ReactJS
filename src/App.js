import AuthComponent from './components/AuthComponent';
import CounterComponent from './components/CouterComponent';
import { Route,Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<AuthComponent/>}/>
        <Route path='/counter' element={<CounterComponent/>}/>

      </Routes>
    </div>
  );
}

export default App;
