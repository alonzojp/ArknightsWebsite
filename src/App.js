import './App.css';
import amiya from './amiya.gif';
import rhodes from './rhodes.png';
import Arknights from "./component/Arknights";
import Quote from "./component/Quote";


function App() {
  return (
    <div className="App">
      <img className="rhodes" src={rhodes} width="125px"/>
      <header className="App-header">
      <h1>A List Of Arknights Characters</h1>
      <img src={amiya} className="App-logo" alt="logo"/>
        <Quote />
        <Arknights />
      </header>
    </div>
  );
}

export default App;
