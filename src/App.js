import logo from './logo.svg';
import './App.css';
import Headerpage from './Component/Header/Headerpage';
// import Bloghomepage from './Component/Blog/Bloghomepage';
import Sidebarpage from './Component/Dashboard/Sidebarpage';
import Sidebarpagenew from './Component/Sidebar/Sidebarpagenew';

function App() {
  return (
    <>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
    </div>
    {/* <Bloghomepage /> */}
    <Sidebarpage /> 
    {/* <Sidebarpagenew /> */}
     {/* <Headerpage />   */}
    </>
  );
}
export default App;