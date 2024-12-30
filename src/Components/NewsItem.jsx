import React from 'react'
import img from '../assets/news.jpg'
const NewsItem = ({ title, description, src, url }) => {
    return (
        <>
            <div className="card text-dark d-inline-block mb-3 my-5 mx-3 px-2 py-2" style={{ maxWidth: "360px" }}>
                <img src={src?src:img} style={{height:'210px',width:"310px"}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0,50)}</h5>
                    <p className="card-text">{description?description.slice(0,90):"Stay updated with the latest news! This article provides a glimpse into the trending topics and current events."}</p>
                    <a href={url} className="btn btn-primary">Read more</a>
                </div>
            </div>


        </>
    )
}

export default NewsItem
