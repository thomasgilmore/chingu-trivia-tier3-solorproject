import './App.css';
import Nav from './component/Nav';
import API from './component/API';

function App() {
  return (
    <div>
      <Nav />
      <div className="App">
        <API />
      </div>
    </div>
  );
}

export default App;
