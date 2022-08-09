import React from 'react'
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import NewsArticle from './NewsArticle';

function Widgets() {
  return (
    <div className='widgets'>
        <div className="widgets-header">
            <h2>Linkedin News</h2>
            <InfoIcon/>
        </div>
        <NewsArticle heading="Web Development" subtitle="Learnt web development" />
        <NewsArticle heading="Sumit" subtitle="This is just a random news" />
        <NewsArticle heading="Tushar" subtitle="This is just another random news" />
        <NewsArticle heading="Ecogas Jod" subtitle="This gus is just really fucking Noooob" />
    </div>

  )
}

export default Widgets