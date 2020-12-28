import React, { Component } from 'react';
import '../App.css'
import styles from './Home.module.css'
import About from './About'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAuth: false,
            username: "",
            arr: [],
            arr1: []
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleclick = () => {

        if (this.state.username) {
            const data = { id: this.state.arr.length + 1, name: this.state.username }
            this.setState({ arr: [...this.state.arr, data], username: "" })
        }
        else {
            alert('fill the box')
        }
    }
    onclickword = (id) => {
        if (this.state.arr) {
            const ele = this.state.arr.find(ele => ele.id === id)
            console.log(ele)

            const data1 = { id: this.state.arr1.length + 1, name: ele.name }

            const data = this.state.arr.filter(ele => ele.id !== id)

            this.setState({ arr1: [...this.state.arr1, data1], arr: data })
        }
    }
    clicktoshow = () => {
        this.setState({ isAuth: !this.state.isAuth })

    }
    render() {
        console.log(this.state)
        return (
            <div className="manidiv">
                <div className="input">name:
                    <input type="text" placeholder="name" name="username" value={this.state.username} onChange={this.handleChange} />
                </div>
                <div>
                    <button type="submit" className="submit" onClick={this.handleclick}>submit</button>
                </div>
                <div>
                    {this.state.arr.map(ele => {
                        return (
                            <div key={ele.id} className="elementout">{ele.name} <button type="button" className="completed" onClick={() => this.onclickword(ele.id)}>completed
                            </button></div>
                        )
                    })}
                </div>
                {this.state.arr1.length ?
                    <div><button type="submit" onClick={this.clicktoshow}>{this.state.isAuth ? "hide" : "show"} completed</button></div> : null
                }
                {this.state.isAuth ?
                    <div>
                        {
                            this.state.arr1.map(ele => {
                                return (
                                    <div key={ele.id}>{ele.name}</div>
                                )
                            }
                            )
                        }
                    </div> : null
                }
            </div>
        )
    }
}
