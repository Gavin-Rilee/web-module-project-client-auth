import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/AxiosWithAuth';

const AddFriends = () => {
    const [newFriend, setNewFriend] =useState({
        id:"",
        age:"",
        name:"",
        email:"",
    })
    
    const handleChanges = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]:e.target.value
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
        const addNewFriend ={
            id: new Date(),
            age: newFriend.age,
            name: newFriend.name,
            email: newFriend.email
        }
    
    axiosWithAuth()
    .post('http://localhost:5000/api/friends', addNewFriend)

    }
    return(
        <div>
            <h1>Add a new Hero or Villan!</h1>
                <form onSubmit={handleSubmit}>
                    <input name="name" value={newFriend.name} onChange={handleChanges} placeholder="Name"/>
                    <input name="age" value={newFriend.age} onChange={handleChanges} placeholder="Age"/>
                    <input name="email" value={newFriend.email} onChange={handleChanges} placeholder="Email" type="email"/>
                        <button>Submit</button>

                </form>
        </div>
    )
}


export default AddFriends;