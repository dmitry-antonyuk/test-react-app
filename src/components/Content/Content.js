import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
    render() {
        return (
            <div className="Content">
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
            </div>
        );
    }
}
export default Content;
