import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
    render() {
        return (
            <div className="Content">
                <div className="content">
                    <table className="table table_leads">
                        <thead className="table__header table__header_leads">
                        <tr className="table__row table__row_leads table__row_header">
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
                                <div className="checkbox">
                                    <input className="checkbox__input" type="checkbox" id="test1" />
                                    <label className="checkbox__lable " for="test1"></label>

                                </div>
                            </td>
                            <td className="table__cell table__cell_header-units">
                                <form className="search-form">
                                    <input className="search-form__input" placeholder="Search"/>
                                    <button className="search-form__button icon__search"></button>
                                </form>
                            </td>
                            <td className="table__cell table__cell_header-units">
                                <form className="search-form">
                                    <input className="search-form__input" placeholder="Search"/>
                                    <button className="search-form__button icon__search"></button>
                                </form>
                            </td>
                            <td className="table__cell table__cell_header-units">
                                <form className="search-form">
                                    <input className="search-form__input" placeholder="Search"/>
                                    <button className="search-form__button icon__search"></button>
                                </form>
                            </td>
                            <td className="table__cell table__cell_header-units">
                                <form className="search-form">
                                    <input className="search-form__input" placeholder="Search"/>
                                    <button className="search-form__button icon__search"></button>
                                </form>
                            </td>
                            <td className="table__cell table__cell_header-units">
                                <form className="search-form">
                                    <input className="search-form__input" placeholder="Search"/>
                                    <button className="search-form__button icon__search"></button>
                                </form>
                            </td>
                            <td className="table__cell table__cell_header-units">
                                <form className="search-form">
                                    <input className="search-form__input" placeholder="Search"/>
                                    <button className="search-form__button icon__search"></button>
                                </form>
                            </td>
                            <td className="table__cell table__cell_header-units">
                                <form className="search-form">
                                    <input className="search-form__input" placeholder="Search"/>
                                    <button className="search-form__button icon__search"></button>
                                </form>
                            </td>
                            <td className="table__cell table__cell_header-units">
                                <form className="search-form">
                                    <input className="search-form__input" placeholder="Search"/>
                                    <button className="search-form__button icon__search"></button>
                                </form>
                            </td>
                            <td className="table__cell table__cell_header-units">
                                <form className="search-form">
                                    <input className="search-form__input" placeholder="Search"/>
                                    <button className="search-form__button icon__search"></button>
                                </form>
                            </td>
                            <td className="table__cell table__cell_header-units">
                                <form className="search-form">
                                    <input className="search-form__input" placeholder="Search"/>
                                    <button className="search-form__button icon__search"></button>
                                </form>
                            </td>
                            <td className="table__cell table__cell_header-units">
                                <form className="search-form">
                                    <input className="search-form__input" id="test" placeholder="Search"/>
                                    <button className="search-form__button icon__search"></button>
                                </form>
                            </td>
                        </tr>
                        </thead>
                        <tbody className="table__tbody">
                        <tr className="table__row table__row_body">
                            <td className="table__cell table__cell_header-units">
                                <div className="checkbox">
                                    <input className="checkbox__input" type="checkbox" id="test2" />
                                    <label className="checkbox__lable " for="test2"></label>

                                </div>
                            </td>
                            <td className="table__cell table__cell_body">LAA6413 </td>
                            <td className="table__cell table__cell_body"> 2017-08-28 16:52:21</td>
                            <td className="table__cell table__cell_body"><span className="highlighted">Vladimir</span> </td>
                            <td className="table__cell table__cell_body"><span className="highlighted">Cheredavenkovich </span></td>
                            <td className="table__cell table__cell_body">+380445412678 </td>
                            <td className="table__cell table__cell_body"><span className="highlighted">vladimir.cher@gmail.com </span></td>
                            <td className="table__cell table__cell_body">Ukraine </td>
                            <td className="table__cell table__cell_body">Mon, 18:54 </td>
                            <td className="table__cell table__cell_body">2017-05-20 12:29 </td>
                            <td className="table__cell table__cell_body">Some data 1 </td>
                            <td className="table__cell table__cell_body">Some data 2 </td>
                        </tr>
                        <tr className="table__row table__row_body">
                            <td className="table__cell table__cell_header-units">
                                <div className="checkbox">
                                    <input className="checkbox__input" type="checkbox" id="test3" />
                                    <label className="checkbox__lable " for="test3"></label>

                                </div>
                            </td>
                            <td className="table__cell table__cell_body">LAA6413 </td>
                            <td className="table__cell table__cell_body"> 2017-08-28 16:52:21</td>
                            <td className="table__cell table__cell_body"><span className="highlighted">Vladimir</span> </td>
                            <td className="table__cell table__cell_body"><span className="highlighted">Cheredavenkovich </span></td>
                            <td className="table__cell table__cell_body">+380445412678 </td>
                            <td className="table__cell table__cell_body"><span className="highlighted">vladimir.cher@gmail.com </span></td>
                            <td className="table__cell table__cell_body">Ukraine </td>
                            <td className="table__cell table__cell_body">Mon, 18:54 </td>
                            <td className="table__cell table__cell_body">2017-05-20 12:29 </td>
                            <td className="table__cell table__cell_body">Some data 1 </td>
                            <td className="table__cell table__cell_body">Some data 2 </td>
                        </tr>
                        <tr className="table__row table__row_body">
                            <td className="table__cell table__cell_header-units">
                                <div className="checkbox">
                                    <input className="checkbox__input" type="checkbox" id="test4" />
                                    <label className="checkbox__lable " for="test4"></label>

                                </div>
                            </td>
                            <td className="table__cell table__cell_body">LAA6413 </td>
                            <td className="table__cell table__cell_body"> 2017-08-28 16:52:21</td>
                            <td className="table__cell table__cell_body"><span className="highlighted">Vladimir</span> </td>
                            <td className="table__cell table__cell_body"><span className="highlighted">Cheredavenkovich </span></td>
                            <td className="table__cell table__cell_body">+380445412678 </td>
                            <td className="table__cell table__cell_body"><span className="highlighted">vladimir.cher@gmail.com </span></td>
                            <td className="table__cell table__cell_body">Ukraine </td>
                            <td className="table__cell table__cell_body">Mon, 18:54 </td>
                            <td className="table__cell table__cell_body">2017-05-20 12:29 </td>
                            <td className="table__cell table__cell_body">Some data 1 </td>
                            <td className="table__cell table__cell_body">Some data 2 </td>
                        </tr>





                        </tbody>

                    </table>
                </div>



            </div>
        );
    }
}
export default Content;
