import React from 'react';
import Header from './Header';
import Mainpart from './Mainpart';

class App extends React.Component{

 constructor(props){
    super(props);
    this.state = {random: parseInt(9*Math.random())};
    console.log("Random"+this.state.random);
    this.rerender = this.rerender.bind(this);  
  }

  componentWillMount() {
   
    if(this.state.random == 0){
      this.setState({random: parseInt(10*Math.random())});
      console.log("ZERO");
      console.log(this.state.random);
    }
  }
   rerender(){
     console.log("rerendered");
    this.setState({random: parseInt(10*Math.random())})
  }

  render(){
    return(
    <div>
    <Header/>
    <Mainpart random={this.state.random} rerender={this.rerender}/>
    </div>
    );
  }
}

export default App;
