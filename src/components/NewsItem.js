import React, { Component } from 'react';

class NewsItem extends Component {
 
    render() {
        let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
        // console.log({newsUrl});
        return (
            <div className='my-3'>
            <div className="card" >
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%' , zIndex: 1}}>
               {source}
            </span>
            <img src={imageUrl} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-body-secondary">By {author} on {date}</small></p>
                <a href={newsUrl} target="_blank"  rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
            </div>
            </div>
            </div>
        );
    }
}

export default NewsItem;
