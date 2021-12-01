import logo from './logo.svg';
import './App.css';

function App() {
  //shorthand property names
const getName = (name='christian', lastname='chavez') => console.log(`${name} ${lastname}`);

getName();

const numbers1 = [1, 2, 3, 4 , 5];
const numbers2 =  [6, 7, 8, 9];

{props.name}{props.name}{props.name}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
