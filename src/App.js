import "./App.scss";
import Features from "./Components/Features/Features";
import Products from "./Components/Products/Products";
import Header from "./Containers/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
    </div>
  );
}

export default App;
