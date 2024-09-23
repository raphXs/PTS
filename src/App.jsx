import React from 'react';
import './App.css'
import Header from './components/Header'
import samsungA24 from './assets/samsungA24.jpg'
import samsungA54 from './assets/samsungA54.jpg'
import samsungA55 from './assets/samsungA55.jpg'

const App = () => {
  const products = [
      {
          id: 1,
          name: "Samsung Galaxy A24",
          price: "Rp 3.499.000",
          image: samsungA24,
          description: "Lebih berwarna dengan Super AMOLED."
      },
      {
          id: 2,
          name: "Samsung Galaxy A54",
          price: "Rp 6.399.000",
          image: samsungA54,
          description: " Layar 6.4 inch Full HD+ dengan panel Super AMOLED."
      },
      {
          id: 3,
          name: "Samsung Galaxy A55",
          price: "Rp 6.699.000",
          image: samsungA55,
          description: "Desain simpel bersama Super AMOLED."
      }
  ];

  return (
      <div className="app">
        
            <Header />

        
          <section className="hero">
              <b><p>Promo spesial!</p></b>
              <a href="#products" className="cta-button">Belanja Sekarang</a>
          </section>

          <section className="products" id="products">
              <h2>Produk Terbaru</h2>
              <div className="product-list">
                  {products.map((product) => (
                      <div key={product.id} className="product-item">
                          <img src={product.image} alt={product.name} />
                          <h3>{product.name}</h3>
                          <p>{product.description}</p>
                          <p>Harga: {product.price}</p>
                          <button>Beli Sekarang</button>
                      </div>
                  ))}
              </div>
          </section>

          <footer className="footer">
              <p>&copy; 2024 Samsung. All Rights Reserved.</p>
              <nav>
                  <a href="#about">Tentang</a> | <a href="#contact">Kontak</a>
              </nav>
          </footer>
      </div>
  );
};

export default App;