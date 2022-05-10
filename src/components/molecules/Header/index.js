import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const NavBar = ({ hamburger = true }) => {
  const [hideBody, setHideBody] = useState(false);
  return (
    <Container bodyIsVisible={hideBody}>
      <header>
        <div className="container">
          <img src="https://i.ibb.co/gRkfBPj/logo.png" alt="Logo da marvel" />
          {hamburger && (
            <div className={`menu-section${hideBody ? ' on' : ''}`}>
              <div
                className="menu-toggle"
                onClick={() => {
                  setHideBody(!hideBody);
                }}
                onKeyPress={() => { }}
                role="button"
                tabIndex="0"
              >
                <div className="one" />
                <div className="two" />
                <div className="three" />
              </div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Credentials</Link>
                  </li>
                  <li>
                    <Link
                      to="/Home"
                      onClick={() => {
                        setHideBody(!hideBody);
                      }}
                    >
                      Listagem
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </header>
    </Container>
  );
};

export default NavBar;
