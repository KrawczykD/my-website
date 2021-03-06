import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import MainNav from './MainNav.js';
import AboutMeSection from './AboutMeSection.js';
import MyResumeSection from './MyResumeSection.js';
import MyServiceSection from './MyServiceSection.js';
import SkillSection from './SkillSection.js';
import PortfolioSection from './PortfolioSection.js';
import ContactSection from './ContactSection.js'
import Footer from './Footer.js';

class App extends Component {
  state={
    opacity:0.37,
    navActive: false,

    circleAnimation : false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll',this.handleScroll)
  }
  ////// header opacity scroll and progress circle animation
  handleColapseNav=(e)=>{
    
    e.preventDefault();
    
    this.setState({
      navActive: !this.state.navActive,
    })
  }

  handleScroll=(e)=>{
    const opacity = (((window.innerHeight/1.6 - window.scrollY)/window.innerHeight).toFixed(2)-1)*-1;

    this.setState({
      opacity:opacity,
    })
    /////// animation procentage circle 
    const section = document.getElementById('4');

    if(window.scrollY > section.offsetTop -300){
      this.setState({
        circleAnimation: true,
      })
    }
    if(window.scrollY > section.offsetTop + section.offsetHeight || window.scrollY < section.offsetTop - section.offsetHeight)
    this.setState({
      circleAnimation: false,
    })

    ////////////////////////////////
  }

  render() {
    return (
      <div className="App" onScrollCapture={this.handleScroll}>
        <Header opacity={this.state.opacity}/>
        <MainNav navActive={this.state.navActive} handleColapseNav={this.handleColapseNav}/>
        <AboutMeSection/>
        <MyResumeSection/>
        <MyServiceSection/>
        <SkillSection circleAnimation={this.state.circleAnimation}/>
        <PortfolioSection/>
        <ContactSection/>
        <Footer/>
      </div>
    );
  }
}

export default App;
