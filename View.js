import React from 'react';
class View extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const viewbutton = this.props.view;
    const views = viewbutton.map((viewbutton)=><input key={viewbutton} className="circlebutton" type="button" value={viewbutton}/>);
    
    return(
    <div className="adjust">
    {views}
    </div>
    );
  }
}
export default View;