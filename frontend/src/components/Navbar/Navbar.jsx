const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState('Home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [notification, setNotification] = useState({ message: '', type: '' });
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const { getTotalCartAmount, token, setToken, userName } = useContext(StoreContext); // Assuming you have access to the user's name
    const navigate = useNavigate();
  
    const showNotification = (message, type) => {
      setNotification({ message, type });
      setTimeout(() => {
        setNotification({ message: '', type: '' });
      }, 3000);
    };
  
    const logout = () => {
      localStorage.removeItem("token");
      setToken("");
      showNotification('Logout successful!', 'success');
      setTimeout(() => {
        navigate("/");
      }, 2000);
    };
  
    return (
      <div className="navbar">
        {notification.message && (
          <div className={`notification ${notification.type}`}>
            {notification.message}
          </div>
        )}
        <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
        <div className={`navMenu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setMenu('Home')} className={menu === 'Home' ? 'active' : ''}>
            Home
          </Link>
          <a href="#menu" onClick={() => setMenu('Menu')} className={menu === 'Menu' ? 'active' : ''}>
            Menu
          </a>
          <a href="#downloadApp" onClick={() => setMenu('mobileApp')} className={menu === 'mobileApp' ? 'active' : ''}>
            Mobile App
          </a>
          <Link to="About" onClick={() => setMenu('About')} className={menu === 'About' ? 'active' : ''}>
            About
          </Link>
          <a href="#footer" onClick={() => setMenu('contactUs')} className={menu === 'contactUs' ? 'active' : ''}>
            Contact Us
          </a>
        </div>
  
        <div className="rightNav">
          <img src={assets.search_icon} alt="" />
          <div className="navSearchIcon">
            {token && (
              <Link to='/cart'><img className="cart" src={assets.basket_icon} alt="" /></Link>
            )}
            {token && 
              <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
            }
            {token ? (
              <div className='navbar-welcome'>
                <p>Hi, {userName}</p>
                <div className='navbar-profile'>
                  <img src={assets.profile_icon} className='white-filter' alt="" />
                  <ul className="nav-profile-dropdown">
                    <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                    <hr />
                    <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                  </ul>
                </div>
              </div>
            ) : (
              <button className='signbutton' onClick={() => setShowLogin(true)}>Sign In</button>
            )}
          </div>
        </div>
  
        <div className="menuToggle" onClick={toggleMenu}>
          <span className="toggleIcon">&#9776;</span> {/* Hamburger icon */}
        </div>
      </div>
    );
  };
  
  export default Navbar;
  