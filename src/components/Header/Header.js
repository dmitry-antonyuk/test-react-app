import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Headerx">
          <div className="header header_blue-theme ">
            <div className="logo logo_left">
                <img className="logo__img"  src="" alt=""/>
                logo
            </div>
            <nav className="top-nav top-nav_blue-theme top-nav_centered">
                    <a className="top-nav__link">Leads</a>
                    <a className="top-nav__link">Clients</a>
                    <a className="top-nav__link">Transactions</a>
                    <a className="top-nav__link">Withdrawals</a>
                    <a className="top-nav__link top-nav__link_active">Settings</a>
            </nav>
            <div className="user-info user-info_right">
                <button className="button-icon button-icon_button-icon icon-settings">
                </button>
                <button className="button-icon-text button-icon-text_blue-theme ">
                    <span className="button-icon-text__icon icon-person"></span>
                    <span className="button-icon-text__text">Alexander Litvinov</span>
                </button>
                <span className="user-info__separator"></span>
                <button className="button-icon button-icon_ring-notification icon-ring ">

                </button>
            </div>
          </div>
      </div>
    );
  }
}

export default Header;
