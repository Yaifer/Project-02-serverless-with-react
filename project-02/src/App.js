import logo from './logo.svg';
import './App.css';
import Addition from './Addition';

function App() {
  return (
    <>
      <h1>Welcome to Project 2</h1>
      <h2>Were going to add some numbers</h2>
      <br/>
      <Addition numberOne={22} numberTwo={45} />
      <Addition numberOne={10} numberTwo={105} />
      <Addition numberOne={3} numberTwo={500} />
    </>
  )
}

export default App;
