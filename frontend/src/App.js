import data from './data';
import {BrowseRouter,Route,Routes} from "react-router-dom"

function App() {
  return (
    <BrowseRouter>
      <div>
        <header>
          <a href="/">amazona</a>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen/>}/>
          </Routes>
          <h1>Featured Products</h1>
          <div className="products">
            {data.products.map((product) => (
              <div className="product" key={product.slug}>
                <a href={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </a>
                <div className="product-info">
                  <a href={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                  </a>
                  <p>
                    <strong>${product.price}</strong>
                  </p>
                  <button>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </BrowseRouter>
  );
}

export default App;
