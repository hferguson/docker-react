import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my modified react application. 
          We are initially checkin this into the feature branch 
          to do an end to end test of the workflow.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React, Docker, Travis, and AWS
        </a>
      </header>
    </div>
  );
}

export default App;
