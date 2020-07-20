import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            gender: '',
            dob: '',
            email: '',
            status: ''
        }
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('post', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const { firstname, lastname, gender, dob, email, status } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div><h3>firstname</h3>
                        <input
                            type="text"
                            name="firstname"
                            value={firstname}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div><h3>lastname</h3>
                        <input
                            type="text"
                            name="lastname"
                            value={lastname}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div><h3>gender</h3>
                        <input
                            type="text"
                            name="gender"
                            value={gender}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div><h3>Date of birth</h3>
                        <input
                            type="date"
                            name="dob"
                            value={dob}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div><h3>Email</h3>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div><h3>status</h3>
                        <input
                            type="binary"
                            name="status"
                            value={status}
                            onChange={this.changeHandler}
                        />
                    </div><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm