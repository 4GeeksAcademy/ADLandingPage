
import React from 'react'
import Navbar from './Navbar.jsx'
import Header from './Header.jsx'
import Card from './Card.jsx'
import Footer from './Footer.jsx'


const Home = () => {
    return (
        <div className='contianer-fluid'>
          <Navbar />
          <div className='container'>
            <Header />
            <div className='row g-4'>
              <Card imageSrc='https://picsum.photos/id/79/500/325' title='Moody Photography' />
              <Card imageSrc='https://picsum.photos/id/4/500/325' title='Brainstorming'/>
              <Card imageSrc='https://picsum.photos/id/233/500/325' title='Traintracks'/>
              <Card imageSrc='https://picsum.photos/id/175/500/325' title='Clock Ticking'/>
            </div>
          </div>
          <Footer />
        </div>

      )
};

export default Home