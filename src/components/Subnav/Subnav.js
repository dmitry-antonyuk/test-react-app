import React, { Component } from 'react';
import './Subnav.css';

class Subnav extends Component {
  render() {
    return (
      <div className="sub-navigation">
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
      </div>
    );
  }
}

export default Subnav;
