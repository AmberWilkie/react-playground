import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                      <div className='navbar-brand'>
                        Amber's React Playground!
                      </div>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item">
                          <Link className="navbar-link" to="/login">SV Login</Link>
                        </li>
                        <li className='navbar-link'>
                          <Link className="nav-link" to="/colorboxes">Color Boxes</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(Header);
