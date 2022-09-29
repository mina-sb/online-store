import "./App.scss";
import Features from "./Components/Features/Features";
import OfferProduct from "./Components/OfferProduct/OfferProduct";
import Products from "./Components/Products/Products";
import Header from "./Containers/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <Products />
      <OfferProduct />
    </div>
  );
}

export default App;
