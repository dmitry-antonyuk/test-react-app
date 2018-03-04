import React, { Component } from 'react';
import './Subnav.css';

class Subnav extends Component {
  render() {
    return (
      <div className="sub-navigation">
          <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
         <div className="sub-navigation sub-navigation_settings">
              <div className="srelect_wrap">
                  <select class="select select_big date-filter">
                      <option>Last month <b>1500</b></option>
                      <option>Пункт 2</option>
                  </select>
              </div>
              <nav className="navigation-tab">
                  <a className="navigation-tab__item navigation-tab__item_active" href="">All <span className="navigation-tab__category-data">1500</span></a>
                  <a className="navigation-tab__item" href="">Potential <span className="navigation-tab__category-data">300</span></a>
                  <a className="navigation-tab__item" href="">Call Again <span className="navigation-tab__category-data">800</span></a>
                  <a className="navigation-tab__item" href="">5+ No Answer <span className="navigation-tab__category-data">400</span></a>
              </nav>
              <div className="menu-burger menu-burger_right">
                  <div id="nav-icon4">
                      <span></span>
                      <span></span>
                      <span></span>
                  </div>
              </div>
          </div>

      </div>
    );
  }
}

export default Subnav;
