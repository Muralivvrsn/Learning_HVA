import logo from "./logo.svg";
import Header from "./components/Header";
import Box from "./components/Box";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="sections">
        <Box className="High"/>
        <Box className="Medium"/>
        <Box className="Low"/>
      </div>
    </div>
  );
}

export default App;
