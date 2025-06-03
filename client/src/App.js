import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import ProductDetails from './Pages/ProductDetails';
import Products from './Pages/Products';

// Landing Page Component
function LandingPage() {
  return (
    <div className="landing-container">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span>✨ Welcome to</span>
          </div>
          <h1 className="hero-title">
            Inventory<span className="title-accent">Pro</span>
          </h1>
          <p className="hero-subtitle">
            Your smart solution for modern inventory management. 
            Track, manage, and optimize your products with ease.
          </p>
          
          <div className="hero-buttons">
            <Link to='/create' className="hero-btn primary">
              <span className="btn-icon">+</span>
              Add Your First Product
            </Link>
            <Link to='/products' className="hero-btn secondary">
              <span className="btn-icon">📊</span>
              View Inventory
            </Link>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-header">📱 Electronics</div>
            <div className="card-stat">245 items</div>
          </div>
          <div className="floating-card card-2">
            <div className="card-header">🏠 Furniture</div>
            <div className="card-stat">89 items</div>
          </div>
          <div className="floating-card card-3">
            <div className="card-header">📚 Books</div>
            <div className="card-stat">156 items</div>
          </div>
        </div>
      </div>
      
      <div className="features-section">
        <div className="feature-card">
          <div className="feature-icon">🚀</div>
          <h3>Fast & Efficient</h3>
          <p>Quick product entry and instant search capabilities</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Smart Analytics</h3>
          <p>Track stock levels and monitor inventory trends</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔒</div>
          <h3>Secure & Reliable</h3>
          <p>Your data is safe with our robust infrastructure</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <Router>
        <nav className="navbar">
          <div className="nav-brand">
            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
              <h1>InventoryPro</h1>
            </Link>
          </div>
          <div className="nav-links">
            <Link to='/create' className="nav-link">
              <span className="nav-icon">+</span>
              Create Product
            </Link>
            <Link to='/products' className="nav-link">
              <span className="nav-icon">📦</span>
              Products
            </Link>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/create' element={<ProductDetails/>}/>
            <Route path='/products' element={<Products/>}/>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;