import { useNavigate, Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import './NavBar.css';

function NavBar() {
  // const { auth } = useSelector((state) => state);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  return (
    <nav>
      <div className="logo">CatDog</div>
      <i className="fas fa-bars" />
      <ul>

        <ul>
          <li><Link to="/lk">LK</Link></li>
          <li><Link to="/">Cat</Link></li>
          <li><Link to="/dog">Dog</Link></li>
        </ul>

      </ul>
    </nav>
  );
}

export default NavBar;
