import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero.js"
import Card from "./components/Card"
import './App.css'
import data from './data'

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {

    const cardData = data.map(card => {
        return (<Card 
           key = {card.id}
           card = {card}
        />)
    })
    // console.log(cardData);
    return (
        <div>
            <Navbar />
            <Hero />
            <div className = "card-container">
                {cardData}
            </div>
            
        </div>
    )
}