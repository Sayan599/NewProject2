import './header.css';
import logo from '../assects/health.svg'
import { Link, NavLink } from 'react-router-dom';

const Header = ({ modifyOnClick, setModifyOnClick }) => {

    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="" height={50} width={50} />
                <p>MediReady</p>
            </div>
            <ul className="contents">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/add">Add New</NavLink></li>
                <li onClick={() => setModifyOnClick(!modifyOnClick)}><Link to="/">Modify</Link></li>
            </ul>
        </div>
    )
}

export default Header;