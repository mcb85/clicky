import React from "react"
import "./style.css";

export default function HeroCard(props) {
    return (
        <>
            <img src={`/images/${props.hero}.jpg`} alt={`${props.hero}`} onClick={props.custom} attr={props.hero} />
            
        </>
    )
}

