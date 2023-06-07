/*importation de la bibliothèque react et de la classe component*/
import React, { Component } from 'react'
/*importation du composant Bio*/
import Bio from './Composant/Bio'
/*Fonction pour initialiser l'état de composant à false*/
export default class App extends Component {
constructor(){
  super()
  this.state={
    show:false,
   
  }
}
  /*Changement de l'état du composant*/
toggle=()=>{
  this.setState({show: !this.state.show})
}
  /*Fonction qui affiche le bouton show-hide*/
  render() {
    return (
      <div> 
      <button onClick={()=>this.toggle()} style={{ margin:"0px 680px 0px",width:"100px",height:"50px",borderRadius:"10px",background:"#D3D3D3",fontFamily:"arial"}}> Show/Hide</button>
      {this.state.show && <Bio/>}
      </div>
    )
  }
}


