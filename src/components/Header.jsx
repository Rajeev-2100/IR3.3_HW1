import { Link } from 'react-router-dom';

const Header = () => {
  return  (  
  <header className="bg-dark text-light">
    <div className="container py-4">
      <h1>My Food Delivery Website</h1>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Restaurants">
              Restaurants
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)
};
export default Header;
