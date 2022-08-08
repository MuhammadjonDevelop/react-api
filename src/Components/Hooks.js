import React, { Component } from 'react';
import './style.css'
class UserList extends Component {

    state = { users: []};

    getUserFormList = (num = 1) => {

        const url = `https://reqres.in/api/users?page=${num}`;

        fetch(url)
            .then(res => res.json())// qanaqa formatda kelishi 
            .then(data => this.setState({ users: data.data})) // qayerga kelib joylashishi.
            // .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    render() {
        const {users } = this.state;
        return (
            <div className='App'>
                <h1>UserList </h1>
                <button onClick={() => this.getUserFormList(1)}>Page1</button>
                <button onClick={() => this.getUserFormList(2)}>Page2</button>
                <ul className='flex'>
                    {
                        users.map( us => {
                            return(
                                <div key={us.id}>
                                    <p>
                                        <strong>{us.first_name} {us.last_name}</strong>
                                    </p>
                                    <p>{us.email}</p>
                                    <img src={us.avatar} alt={us.avatar} />
                                </div>
                            )
                        })
                    }

                </ul>

            </div>
        );
    }
}

export default UserList;