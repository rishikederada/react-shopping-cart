import React, { Component } from 'react';
import { render } from 'react-dom';
import Tabs from "./Tabs";
import Tab from "./Tab";
import './style.css';

class App extends Component {
  constructor(props){
     this.state = {
        showSuccess:false,
        buttonLabel:"ADD TO CART",
        dropdownValueSelected:"black",
        imgUrls:{
            "black":"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTGCU_iNYsuR83Ou087og_G-1Xn8lavaZL_x5JmxEsy8zhX6yFLnA&usqp=CAc",
            "brown":"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTjFBtIjvdH9vtdrh1ZEXGiroAlcvL621xxjoZyzwtgoYuPCgbUSw&usqp=CAc"
        }
     }
  this.handleSelectChange=this.handleSelectChange.bind(this);
  this.handleButtonLabel=this.handleButtonLabel.bind(this);
  }
  handleSelectChange(e){
      this.setState({dropdownValueSelected:e.target.value});
  }
  handleButtonLabel(e){
    this.setState({buttonLabel:"Loading..."});
    setTimeout(()=>{
      this.setState({
        showSuccess:true,
        buttonLabel:"View Cart"})
    },2000);
  }
  render() {

    return (
      <div>
      <h2 >Audio-Technica ATH-MSR7
      <div className="lightText secondaryHeader">2017 Best Headphones of tyhe Year Award Winner</div></h2>
      
      <br/>
      <div className="container">
      <div className="leftContainer">
      <Tabs>
        <Tab value="description" header="Description">
          Springing from Audio-Technica's rich heritage in professional audio, the ATH-MSR7 Over-Ear High-Resolution Audio Headphones are designed to reproduce Hi-Res Audio allowing users to hear music the way it was intended.
          <br/>
          <br/>
          <div>$59.99  &nbsp;&nbsp; <span className="lightText lineThrough">$89.99</span></div><br/><br/>
          <div className="marginText">Colors</div>
          <select  value={this.state.dropdownValueSelected} onChange={this.handleSelectChange}>
            <option value={"black"}>Black</option>
            <option value={"brown"}>Brown</option>
          </select>
          <br/><br/>
        </Tab>
        <Tab value="details" header="Details">
          Over-ear headphones are outfitted with exclusive 45mm True Motion Drivers, which utilize lightweight voice coils, a custom-mounted printed circuit board and specially designed diaphragm to improve transient response and minimize sound distortion for rich, detailed audio reproduction.
        </Tab>
      </Tabs>
      </div>
      <div className="rightContainer">
      <img src={this.state.imgUrls[this.state.dropdownValueSelected]}/>
      </div>
      </div>
      <br/>
    
      <button className="buttonWidth" onClick={this.handleButtonLabel}>{this.state.buttonLabel}</button>
      <br/>
      <br/>
      {this.state.showSuccess && "Item added to cart!"}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
