import Header from "./components/Header";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="sections">
        <Card className="High" />
        <Card className="Medium" />
        <Card className="Low" />
      </div>
    </div>
  );
}

export default App;
