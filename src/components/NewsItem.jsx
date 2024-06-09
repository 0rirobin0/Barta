import React from 'react'
import PropTypes from 'prop-types'

function NewsItem({ mode, title, description ,imgurl}) {
  
     if (description.length>100) {
       var desc=description.substring(0,100)+'...';
     }
     else desc=description+"..."
    return (
        <div>
            <div className="card" style={{ width: "18rem" }} data-bs-theme={mode}>
                <img src={imgurl} className="card-img-top" alt="..." />
                <div className="card-body" >
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <a href="/" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

NewsItem.propTypes = {
    mode: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
}

export default NewsItem

