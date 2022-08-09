import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import "./NewsArticle.css"
function NewsArticle({heading, subtitle}) {
  return (
    <div className="widgets-article">
            <div className="widgets-artilceLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets-artilceRight">
                <h4>{heading} </h4>
                <p>{subtitle} </p>
            </div>
        </div>
  )
}

export default NewsArticle
