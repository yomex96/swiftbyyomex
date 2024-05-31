import React from 'react'
import './About.css'

// import { authors } from '../../assets/assets'
// import MyAuthors from '../../components/MyAuthors/MyAuthors'
import { authorDetails } from '../../assets/authorDetails'
import AboutList from './AboutList'

const About = () => {
  return (
    <div className="about">
      <AboutList authorDetails={authorDetails}/>
    </div>
  );
}

export default About