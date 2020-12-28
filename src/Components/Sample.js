import React, { Component } from 'react';
import styles from './Home.module.css'

export default class Sample extends Component {

    render() {
        const { pageact } = this.props
        return (
            <div className="sample">
                <div className={"pagebutton"}>
                    Next page
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                </div>
            </div>
        )
    }
}