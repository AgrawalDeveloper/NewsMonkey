import React, { Component } from 'react';

class NewsItem extends Component {
 
    render() {
        let {title,descriptin,imageUrl,newsUrl}=this.props;
        console.log({newsUrl});
        return (
            <div className='my-3'>
            <div className="card" style={{width:"18rem"}}>
            <img src={imageUrl} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{descriptin}</p>
                <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
            </div>
            </div>
            </div>
        );
    }
}

export default NewsItem;
