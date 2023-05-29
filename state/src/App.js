import React, { Component } from 'react'
import Bio from './Composant/Bio'
export default class App extends Component {
constructor(){
  super()
  this.state={
    show:false,
   
  }
}
toggle=()=>{
  this.setState({show: !this.state.show})
}
  render() {
    return (
      <div> 
      <button onClick={()=>this.toggle()} style={{ margin:"0px 680px 0px",width:"100px",height:"50px",borderRadius:"10px",background:"#D3D3D3",fontFamily:"arial"}}> Show/Hide</button>
      {this.state.show && <Bio/>}
      </div>
    )
  }
}


