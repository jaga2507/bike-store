import React, { Component } from 'react';
import styles from './Home.module.css'

export default class About extends Component {

    render() {
        const { data } = this.props
        return (
            <div className="About">
                <div>
                    <div className="cards">
                        {data.map((ele) =>
                            <div key={ele.id} class="card" style={{ width: "18rem" }}>
                                <img height="200" src={ele.img_url} class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <div>
                                        <h8 class="card-title" value="10">company:{ele.company}</h8>
                                    </div>
                                    <div>
                                        <h8>Modal : {ele.modal_name}</h8>
                                    </div>
                                    <div>
                                        <h8>category:{ele.category}</h8>
                                    </div>
                                    <div>
                                        <h8>cost: {ele.cost.per_day}</h8>
                                    </div>
                                    <a href="#" className="btnbtn-primary">BUY NOW</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}