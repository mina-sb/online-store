import "./App.css";
import Products from "./Components/Products/Products";
import Header from "./Containers/Header/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Products />
      </header>
    </div>
  );
}

export default App;
