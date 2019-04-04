import React from 'react';
import axios from 'axios'



class FriendForm extends React.Component {
 constructor(props) {
        super(props);
        this.state = {
        }
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit = () => {
        let newfriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }

        axios
         .post("http://localhost:5000/friends", newfriend)
        .then(res => {
         this.setState({ data: res.data})
            })
            .catch(err => console.log(err)
            )}
            
            editFriend = (friend, id) => {
                axios
                .put(`http://localhost:5000/friends/${id}`, friend)
                .then(res => {
                this.setState({friends: res.data});
                })
                .catch(err => console.log(err));
              };
        


    render() {
        return (
            <div className='friend-form'>
            <h2>Add a friend</h2>
            <form>
            <input type="text" placeholder="Name" value={this.name} name='name' onChange={this.handleChange} />
            <input type="number" placeholder="Age" value={this.age} name='age'onChange={this.handleChange} />
            <input type="text" placeholder="Email" value={this.email} name='email' onChange={this.handleChange} />
            <button onClick={this.handleSubmit}>Add Friend</button>
            </form>
            </div>
        )

    }
}





export default FriendForm