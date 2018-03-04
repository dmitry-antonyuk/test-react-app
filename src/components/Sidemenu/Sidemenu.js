import React, { Component } from 'react';
import './Sidemenu.css';

class Sidemenu extends Component {
    render() {
        return (
          <div className="sidebar-menu">
              <div className="sidebar-menu sidebar-menu_right">
                  <div className="sidebar-menu__header">
                      <h3 className="sidebar-menu__headline">To DO</h3>
                      <span className="sidebar-menu__hide"><img className="sidebar-menu__hide-icon" src="" alt=""/></span>
                  </div>
                  <div className="sidebar-menu__subtitle">
                      <span className="sidebar-menu__day">Today (3)</span>
                      <span className="sidebar-menu__date sidebar-menu__date_right">22/2</span>
                  </div>
                  <div className="task-card task-card_menu">
                      <span className="task-card__your-time">10:00</span>
                      <span className="task-card__client-time-headline">Client time</span>
                      <span className="task-card__client-time">12:00</span>
                      <span className="task-card__separator"> </span>
                      <a className="task-card__headline" href="" >Send FTD offer to the Eric Shevchenko</a>
                      <a className="task-card__customer" href="" >Eric Shevchenko</a>
                      <button className="task-card__status-buttn task-card__status-buttn__done"><img src="" alt=""/></button>
                  </div>
              </div>
          </div>
    );
  }
}

export default Sidemenu;
