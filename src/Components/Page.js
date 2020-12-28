import React, { Component } from 'react';
import styles from './Home.module.css'

export default class Page extends Component {

    render() {
        const { booking } = this.props
        return (
            <>
                {booking.map((ele) =>
                    <div className="sample">
                        0 booking
                </div>
                )}
            </>
        )
    }
}