import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
          <div className="header">
            <div className="logo">
                <img className="logo__img"  src="" alt=""/>
            </div>
            <ul className="top-nav">
                <li className="top-nav__link-wrap">
                    <a className="top-nav__link">Leads</a>
                </li>
                <li className="top-nav__link-wrap">
                    <a className="top-nav__link">Clients</a>
                </li>
                <li className="top-nav__link-wrap">
                    <a className="top-nav__link">Transactions</a>
                </li>
                <li className="top-nav__link-wrap">
                    <a className="top-nav__link">Withdrawals</a>
                </li>
                <li className="top-nav__link-wrap">
                    <a className="top-nav__link top-nav__link_active">Settings</a>
                </li>
            </ul>
            <div className="user-info">
                <div className="user-info__settings"></div>
                <div className="user-info__person">
                    <div className="user-info__person-icon"></div>
                    <div className="user-info__person-name"></div>
                </div>
                <div className="user-info__separator"></div>
                <div className="user-info__updates">
                    <div className="user-info__updates"></div>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Header;
