//to handle displaying user list

'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import User from './User.jsx';

export default class Users extends Component{
    static get propTypes(){
        return{
            users: PropTypes.array
        }
    }

    constructor(props){
        super(props);
    }

    render() {
        const {users} = this.props;

        return
        <div>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        {
                            users.map(user =>{
                                return
                                <User key={user.id} user={user}/>
                            })
                        }
                    </td>
                </tr>
                </tbody>
            </table>
        </div>;
    }
}