import './navbar.css'
import { Link } from 'react-router-dom';
function Nav() {

    return (
        <div className="navbar">
            <p>ReactPortfolio</p>
            <ul >
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/count'>Counter</Link></li>
                <li><Link to='/todo'>ToDo-List</Link></li>

            </ul>
        </div>
    );
  }
  export default Nav;
  