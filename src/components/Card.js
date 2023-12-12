import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img src={`../images/${props.img}`} className="card--image" alt="product" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" alt="star" />
                <span>{props.rating}</span>
                <span className="gray"> ({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className= "card--title">{props.title}</p>
            <p className= "card--price"><span style={{fontWeight: "bold"}}>From ${props.price}</span> / person</p>
        </div>
    )
}