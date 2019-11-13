import React from "react";
import axios from "axios";

class FriendsList extends React.Component {
  state = {
    friendsList: []
  };



  componentDidMount() {
    this.getData();
    if (!localStorage.getItem("token")) {
      console.error("Please Login!!!");
    } else {
      console.info("We are logged in");
    }
  }

  getData = () => {
    axios.get("http://localhost:5000/api/friends", {
      headers: { authorization: localStorage.getItem("token") }
    })
      .then(response => {this.setState({ friendsList: response.data })
      });
  };



  render() {

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/api/friends/${id}`,
        {
            headers: { authorization: localStorage.getItem("token") }
          }) .then(res => { 
            console.log(res);
        })
        .catch(err => console.log(err.response));
    }

    console.log(this.state.friendsList);
    console.log(localStorage)
    return (
      <div className="friends-list">
              <div className = "friends">
                {this.state.friendsList.map(friend => (
                  <div key = {friend.id} className="friend">
                    <div className="name">
                      <h3>{friend.name}</h3>
                    </div>
                    <div className="age">
                      <p>Age: {friend.age}</p>
                    </div>
                    <div className="email">
                     <p>Email: {friend.email}</p>
                    </div>
                    <button onClick = {() => handleDelete(friend.id)}>Delete</button>
                  </div>
                ))}
              </div>
      </div>
    );
  }
}

export default FriendsList;