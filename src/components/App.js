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
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll',this.handleScroll)
  }

  handleColapseNav=(e)=>{
    
    e.preventDefault();

    this.setState({
      navActive: !this.state.navActive,
    })
  }

  handleScroll=()=>{
    const opacity = (((window.innerHeight/1.6 - window.scrollY)/window.innerHeight).toFixed(2)-1)*-1;

    this.setState({
      opacity:opacity,
    })
  }

  render() {
    return (
      <div className="App" onScrollCapture={this.handleScroll}>
        <Header opacity={this.state.opacity}/>
        <MainNav navActive={this.state.navActive} handleColapseNav={this.handleColapseNav}/>
        <AboutMeSection/>
        <MyResumeSection/>
        <MyServiceSection/>
        <SkillSection/>
        <PortfolioSection/>
        <ContactSection/>
        <Footer/>
      </div>
    );
  }
}

export default App;
