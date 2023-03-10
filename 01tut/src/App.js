import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  const handleNameChange = () =>{
    const name =["Bob","David","Yatharth"];
    let int = Math.floor(Math.random() * 3);
    return name[int];
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. }
          Hello {handleNameChange()}!
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> }
      </header> */}
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
