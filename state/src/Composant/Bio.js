import React, { Component } from 'react'
import img1 from './img1.jpg'
export default class Bio extends Component {
    constructor(){
        super()
        this.state={
            fullName:"Albert Einstein",
            bio:"Il publie sa théorie de la relativité restreinte en 1905 et sa théorie de la gravitation, dite relativité générale, en 1915. Il contribue largement au développement de la mécanique quantique et de la cosmologie, et reçoit le prix Nobel de physique de 1921 pour son explication de l’effet photoélectriqueN 2. Son travail est notamment connu du grand public pour l’équation E = mc2, qui établit une équivalence entre la masse et l’énergie d’un système.",
            profession:"Physicien",
        }
    }
  render() {
    return (
      <div style={{border:"Outset",borderRadius:"10px",borderColor:"red",textAlign:"center"}}>
      <h1 style={{color:"red",textAlign:"center",fontFamily:"arial"}}>{this.state.fullName}</h1>
      <h1 style={{textAlign:"center",fontFamily:"arial"}}>{this.state.profession}</h1>
      <img src={img1} alt='Albert'/>
      <h1 style={{textAlign:"center",fontSize:"25px",fontFamily:"roboto"}}>{this.state.bio}</h1>
      </div>
    )
  }
}
