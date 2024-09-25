import react from 'react';
import './Navbar.css';
import fire from '../../assets/fire.png'
import party from '../../assets/party.png'
import glow from '../../assets/glowingstar.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Movie Master</h1>
      <div className="navbar_links">
        <a href="">
          Popular <img className='navbar_emoji' src={fire} alt="" />{' '}
        </a>
        <a href="">
          Latest <img className='navbar_emoji' src={glow} alt="" /> {' '}
        </a>
        <a href="">
          TopRated <img className='navbar_emoji' src={party} alt="" />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
