import {Routes, Route, Link} from 'react-router-dom';
import Contact from './Contact';


function NavContact() {
    return (
      <div>
        <div>
          <Link to="/contact" className="nav-item">
            Contact
          </Link>
        </div>
        <Routes>
            <Route path="/contact" element={<Contact />} />
            
        </Routes>
      </div>
    );
}

export default NavContact;