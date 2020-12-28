import React, { Component } from 'react';
import '../App.css'
import styles from './Home.module.css'
import Sample from './Sample'
import Page from './Page'
import About from './About'
import data from './data.json'

export default class Home1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            arr: [],
            pageact: [],
            fileter: [],
            booking: [],
            search: "",
            search1: ""
        };
    }
    button3 = (e) => {
        const book = ({ booking: "[...page]" })
    }
    handlechange = event => {
        const filters = this.state.arr.filter(ele => ele.modal_name.toLowerCase().includes(event.target.value))
        this.setState({ [event.target.name]: event.target.value, fileter: filters });
    }
    filetter1 = e => {
        console.log(e.target.value)
        let filters;
        if (e.target.value === "3" || e.target.value === "2") {
            filters = this.state.fileter.sort((a, b) => e.target.value === "2" ? a.cost.per_day - b.cost.per_day : b.cost.per_day - a.cost.per_day
            )
        }
        else {
            filters = this.state.arr
        }
        console.log({ filters })
        this.setState({ fileter: filters });
    }
    componentDidMount() {
        this.setState({ arr: [...data.vehicle], fileter: [...data.vehicle] })
    }

    render() {
        console.log(this.state)
        /*if (this.state.isLoading) {
            return (
                <div>Loading.....</div>
            )
        }*/
        return (
            <div className="manidiv">
                <div className="profile">
                    Vehicle Renting
                </div>
                <div className="logoimg">
                    <img src="https://vehicle-renting-app.netlify.app/static/media/logo1.5482a68e.png"></img>
                </div >
                <div className="button1">
                    <div><a href="#" className="button2" onClick={this.button2}>home</a></div>
                    <div><a href="#" className="button3" onClick={this.button3}>bookings</a></div>
                    <div><a href="#" className="button4" onClick={this.button4}>user</a></div>
                    <div><a href="#" className="button5" onClick={this.button5}>admin</a></div>
                </div>
                <div className="logout"><a href="#" onClick={this.logoout}>Log Out</a></div>
                <div className="search">
                    <nav class="navbar navbar-expand-lg navbar-dark blue lighten-2 mb-4">
                        <div class="search" id="navbarSupportedContent">
                            <input class="form-control" type="search" placeholder="Search" aria-label="Search"
                                name="search" value={this.state.search} onChange={this.handlechange}></input>
                        </div>

                    </nav>
                </div>
                <h1>All Vehicles</h1>
                <div className="fileter">
                    <select class="form-select" aria-label="Default select example" onChange={this.filetter1}>
                        <option selected>Open this select menu</option>
                        <option value="1">Show all</option>
                        <option value="2">Show low prize</option>
                        <option value="3">Show high prize</option>
                    </select>
                </div>
                <About data={this.state.fileter} />
                <Sample pagefile={this.state.pageact} />
                <Page booking={this.state.booking} />
            </div >
        )
    }
}
