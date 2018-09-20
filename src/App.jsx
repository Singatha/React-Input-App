import React,  { Component } from 'react';
 
class App extends Component {
     constructor(){
            super();
            this.handleInput = this.handleInput.bind(this);
     }

     state = {data:""};

     handleInput(val){
           this.setState({data:val.target.value});
     }
      
     
     render(){

           return ( <div>
                         <input type="text" value={this.state.data} onChange={this.handleInput}/>
                         <h1> {this.state.data} </h1>
                   </div> );

     }


}
export default App;