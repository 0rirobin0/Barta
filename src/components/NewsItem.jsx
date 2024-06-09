import React from 'react'
import PropTypes from 'prop-types'

function NewsItem({ mode, title, description ,imgurl,newsurl}) {
  
    let btntext = mode === 'dark' ? 'light' : 'dark';
    return (
        <div>
            <div className="card" style={{ width: "18rem" }} data-bs-theme={mode}>
                <img src={imgurl?imgurl:'./NoImageFound.png'} className="card-img-top" alt="..." />
                <div className="card-body" >
                    <h5 className="card-title">{'"'+title?title.split("।").slice(0,1)+'।"':"Null"}</h5>
                    <p className="card-text">{description? description.slice(0,40):"Null"}...</p>
                    <a href={newsurl} target='_blank' className={'btn btn-sm btn-outline-'+btntext} id='readmore'>Read More</a>
                </div>
            </div>
        </div>
    )
}

NewsItem.propTypes = {
    mode: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    newsurl: PropTypes.string,
}

export default NewsItem

