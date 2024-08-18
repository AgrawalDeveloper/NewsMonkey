import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';  

class News extends Component {

    static propTypes = {
        country: PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string,
      };
    
      static defaultProps = {
        country: 'in',
        pageSize:8,
        category:"sports"
      }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],  // Corrected the typo here
            loading:false,
            page:1,
            totalResults:0,
            pageNumber:1

        };
    }
    async update()
    {
        this.setState({loading:true});
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=399cba7395a840e3b460bbd44621c165&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data=await fetch(url);
        let fetchData=await data.json();
        
        this.setState({articles:fetchData.articles,
            totalResults:fetchData.totalResults,
            pageNumber:1,
            loading:false

        });
    }
    async componentDidMount()
    {
        this.update();
    }  
   
    handlePrevClick=async () =>
    {
        await this.setState({page:this.state.page-1});
        this.update();
    }
    handleNextClick= async () =>
    {
        await this.setState({ page:this.state.page+1});
        this.update();
    }
    render() {
        return (
            <div className="container my-3">
            <h2 className="text-center">NewsMonkey- Top headlines</h2>
            <div className="text-center">
            {this.state.loading && <Spinner/>}
            </div>
            <div className='row'>
                {!this.state.loading && this.state.articles.map((element)=>{
                    // console.log(element.url);
                return (
                    <div className="col-md-4"  key={element.url}>
                        <NewsItem title={element.title} description={element.description} imageUrl={!element.urlToImage?"https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd1ea64b0-58eb-4a90-ae0a-c889476107a6_480x266.webp":element.urlToImage} 
                        newsUrl={element.url} author={element.author} date={new Date(element.publishedAt).toGMTString()}
                        source={element.source.name}/>
                    </div>
                
            
                )
            })}
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
            </div>
            
        );
    }
}

export default News;
