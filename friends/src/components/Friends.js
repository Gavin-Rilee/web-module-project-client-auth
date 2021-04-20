import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from "../utils/AxiosWithAuth"
import AddFriends from "../components/AddFriends"
import Styled from "styled-components"

const Background = Styled.div`
background-image: url("https://www.pixelstalk.net/wp-content/uploads/2016/04/Marvel-Wallpaper-HD-backgrounds-Wonderful.jpg");
background-position:center;
`

const Friends = () => {
const [friendsList, setFriendsList] = useState([])

useEffect(() => {
    axiosWithAuth().get("/api/friends")
    .then((res) => {
        setFriendsList(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
  
}, [friendsList])

return(
    <Background>
        {friendsList.map((friend) =>{
            return (
                <div className="CharBox" key={friend.id}>
                    <h2>{friend.name}</h2>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </div>
            )
        })}
        <AddFriends/>
    </Background>
)

}

export default Friends;