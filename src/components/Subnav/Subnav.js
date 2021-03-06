import React, { Component } from 'react';
import menu from '../../img/menu.png';
import './Subnav.css';


class Subnav extends Component {
  showMenu() {
      document.getElementById('menu').classList.add('sidebar-menu_open');

  }
  hideMenu() {
      document.getElementById('menu').classList.remove('sidebar-menu_open');
  }
  render() {
    return (

      <div className="sub-navigation">
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
              <div className="menu-container menu-container_right">

                  <button type="button" className="menu-burger menu-burger_right" onClick={this.showMenu}>
                      <img className="menu-burger__img" src={menu} alt=""/>
                  </button>

                      <div className="sidebar-menu sidebar-menu_right" id="menu">
                          <div className="sidebar-menu__header">
                              <h3 className="sidebar-menu__headline">To DO</h3>
                              <span className="sidebar-menu__hide" onClick={this.hideMenu}>
                              </span>
                          </div>
                          <div className="sidebar-subtitle">
                              <span className="sidebar-subtitle__day">Today (3)</span>
                              <span className="sidebar-subtitle__date sidebar-subtitle__date_right">22/2</span>
                          </div>


                          <div className="task-card task-card_menu">
                              <div className="task-card__left-container">
                                  <span className="task-card__your-time">10:00</span>
                                  <span className="task-card__client-time-headline">Client time</span>
                                  <span className="task-card__client-time">12:00</span>
                              </div>
                              <div className="task-card__right-container">
                                  <a className="task-card__headline" href="" >Send FTD offer to the Eric Shevchenko</a>
                                  <a className="task-card__customer" href="" >Eric Shevchenko</a>
                                  <span className="task-card__is-done icon-success"></span>
                              </div>
                          </div>

                          <div className="task-card task-card_menu">
                              <div className="task-card__left-container">
                                  <span className="task-card__your-time">10:00</span>
                                  <span className="task-card__client-time-headline">Client time</span>
                                  <span className="task-card__client-time">12:00</span>
                              </div>
                              <div className="task-card__right-container">
                                  <a className="task-card__headline" href="" >Send FTD offer to the Eric Shevchenko</a>
                                  <a className="task-card__customer" href="" >Eric Shevchenko</a>
                              </div>
                          </div>


                          <div className="sidebar-subtitle">
                              <span className="sidebar-subtitle__day">Tuesday (3)</span>
                              <span className="sidebar-subtitle__date sidebar-subtitle__date_right">22/2</span>
                          </div>


                          <div className="task-card task-card_menu">
                              <div className="task-card__left-container">
                                  <span className="task-card__your-time">10:00</span>
                                  <span className="task-card__client-time-headline">Client time</span>
                                  <span className="task-card__client-time">12:00</span>
                              </div>
                              <div className="task-card__right-container">
                                  <a className="task-card__headline" href="" >Send FTD offer to the Eric Shevchenko</a>
                                  <a className="task-card__customer" href="" >Eric Shevchenko</a>

                              </div>
                          </div>

                          <div className="task-card task-card_menu">
                              <div className="task-card__left-container">
                                  <span className="task-card__your-time">10:00</span>
                                  <span className="task-card__client-time-headline">Client time</span>
                                  <span className="task-card__client-time">12:00</span>
                              </div>
                              <div className="task-card__right-container">
                                  <a className="task-card__headline" href="" >Send FTD offer to the Eric Shevchenko</a>
                                  <a className="task-card__customer" href="" >Eric Shevchenko</a>

                              </div>
                          </div>


                      </div>







              </div>
          </div>

      </div>
    );
  }
}

export default Subnav;
