import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'

class Header extends React.Component
{
  render()
  {
    return (
      <body>
        <div className="header">
          <span className="snake1"></span>
          <span className="snake2"></span>
          <div className="inner_header">
            <div className="logo_container">
              <h1>Purchase<span>Flow</span></h1>
            </div>
          </div>
        </div>
      </body>
      
    )
  }
}
export default Header;