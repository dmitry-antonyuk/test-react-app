import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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

          <div className="sub-navigation sub-navigation_settings">
              <div className="date-filter">
                  <select>
                      <option>Пункт 1</option>
                      <option>Пункт 2</option>
                  </select>
              </div>
              <nav className="sub-navigation__category-tabs">
                  <a href="sub-navigation__category-list sub-navigation__category-list_active">All <span className="settings-navigation__category-data">1500</span></a>
                  <a href="sub-navigation__category-list">Potential <span className="settings-navigation__category-data">300</span></a>
                  <a href="sub-navigation__category-list">Call Again <span className="settings-navigation__category-data">800</span></a>
                  <a href="sub-navigation__category-list">5+ No Answer <span className="settings-navigation__category-data">400</span></a>

              </nav>
              <div className="menu-burger menu-burger_right">

              </div>
          </div>



          <div className="content">
              <table className="table">
                  <thead className="table__header">
                      <tr className="table__row table__row_header">
                          <th className="table__cell table__cell_header"></th>
                          <th className="table__cell table__cell_header">Lead ID</th>
                          <th className="table__cell table__cell_header">Created time</th>
                          <th className="table__cell table__cell_header">First Name</th>
                          <th className="table__cell table__cell_header">Last Name</th>
                          <th className="table__cell table__cell_header">Phone</th>
                          <th className="table__cell table__cell_header">E-mail</th>
                          <th className="table__cell table__cell_header">Lead Status</th>
                          <th className="table__cell table__cell_header">Country</th>
                          <th className="table__cell table__cell_header">User Time</th>
                          <th className="table__cell table__cell_header">Last interaction time</th>
                          <th className="table__cell table__cell_header">Action 1</th>
                          <th className="table__cell table__cell_header">Action 2</th>
                      </tr>
                     <tr className="table__row table__row_header table__row_header table__row_material">
                          <td className="table__cell table__cell_header-units">
                              <input type="checkbox"  name="subscribe" value="1"/>
                          </td>
                          <td className="table__cell table__cell_header-units">
                              <form className="search-form">
                                  <input className="search-form__input"/>
                                      <button className="search-form__button"></button>
                              </form>
                          </td>
                          <td className="table__cell table__cell_header-units">
                              <form className="search-form">
                                  <input className="search-form__input"/>
                                  <button className="search-form__button"></button>
                              </form>
                          </td>
                          <td className="table__cell table__cell_header-units">
                              <form className="search-form">
                                  <input className="search-form__input"/>
                                  <button className="search-form__button"></button>
                              </form>
                          </td>
                          <td className="table__cell table__cell_header-units">
                              <form className="search-form">
                                  <input className="search-form__input"/>
                                  <button className="search-form__button"></button>
                              </form>
                          </td>
                          <td className="table__cell table__cell_header-units">
                              <form className="search-form">
                                  <input className="search-form__input"/>
                                  <button className="search-form__button"></button>
                              </form>
                          </td>
                          <td className="table__cell table__cell_header-units">
                              <form className="search-form">
                                  <input className="search-form__input"/>
                                  <button className="search-form__button"></button>
                              </form>
                          </td>
                          <td className="table__cell table__cell_header-units">
                              <form className="search-form">
                                  <input className="search-form__input"/>
                                  <button className="search-form__button"></button>
                              </form>
                          </td>
                          <td className="table__cell table__cell_header-units">
                              <form className="search-form">
                                  <input className="search-form__input"/>
                                  <button className="search-form__button"></button>
                              </form>
                          </td>
                          <td className="table__cell table__cell_header-units">
                              <form className="search-form">
                                  <input className="search-form__input"/>
                                  <button className="search-form__button"></button>
                              </form>
                          </td>
                          <td className="table__cell table__cell_header-units">
                              <form className="search-form">
                                  <input className="search-form__input"/>
                                  <button className="search-form__button"></button>
                              </form>
                          </td>
                          <td className="table__cell table__cell_header-units">
                              <form className="search-form">
                                  <input className="search-form__input"/>
                                  <button className="search-form__button"></button>
                              </form>
                          </td>
                      </tr>
                  </thead>
                  <tbody className="table__tbody">
                      <tr className="table__row table__row_body">
                          <td className="table__cell table__cell_header-units">
                              <input type="checkbox"  name="subscribe" value="1"/>
                          </td>
                          <td className="table__cell table__cell_body">LAA6413 </td>
                          <td className="table__cell table__cell_body"> 2017-08-28 16:52:21</td>
                          <td className="table__cell table__cell_body">Vladimir </td>
                          <td className="table__cell table__cell_body">Cheredavenkovich </td>
                          <td className="table__cell table__cell_body">+380445412678 </td>
                          <td className="table__cell table__cell_body">vladimir.cher@gmail.com </td>
                          <td className="table__cell table__cell_body">Ukraine </td>
                          <td className="table__cell table__cell_body">Mon, 18:54 </td>
                          <td className="table__cell table__cell_body">2017-05-20 12:29 </td>
                          <td className="table__cell table__cell_body">Some data 1 </td>
                          <td className="table__cell table__cell_body">Some data 2 </td>
                      </tr>
                  </tbody>
              </table>

          </div>

          <div className="sidebar-menu sidebar-menu_right">
              <div className="sidebar-menu__header">
                  <h3 className="sidebar-menu__headline">To DO</h3>
                  <span className="sidebar-menu__hide"><img className="sidebar-menu__hide-icon" src="" alt=""/></span>
              </div>
              <div className="sidebar-menu__subtitle">
                  <span className="sidebar-menu__day">Today (3)</span>
                  <span className="sidebar-menu__date sidebar-menu__date_right">22/2</span>





              </div>

          </div>


      </div>
    );
  }
}

export default App;
