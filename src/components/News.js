import React, { Component } from 'react';
import Newsitem from './Newsitem';
import props from 'prop-types';

export class News extends Component {
    static defaultProps={
        country:'in',
        pagesize:5,
        category:'general'

    }
    "articles" = [

    ]
    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,
            page:0,
            
        }
        document.title=`${this.props.category}-MonkeyNews`;
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bfb769be6a1440028b5819569bde9aba&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parsetext = await data.json();
        console.log(parsetext)
        this.setState({ articles: parsetext.articles })
    }
    handlenext= async ()=>{
        
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bfb769be6a1440028b5819569bde9aba&page=${this.state.page +1 }&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parsetext = await data.json();
        console.log(parsetext);
        this.setState({
            page:this.state.page+1, articles: parsetext.articles ,totalarticle:parsetext.totalResults
        })
    
    }
    handleprevious= async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bfb769be6a1440028b5819569bde9aba&page=${this.state.page -1 }&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parsetext = await data.json();
        console.log(parsetext);
        this.setState({
            page:this.state.page-1, articles: parsetext.articles ,
        })

    }
    render() {
        return (

            <div className="container my-4">
                <h1  className='text-center' >News Monkey-Get Free News on {this.props.category}</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newsitem title={element.title ? element.title.slice(0, 50) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage ? element.urlToImage : "https://images.moneycontrol.com/static-mcnews/2021/06/2021-06-09T205305Z_1_LYNXNPEH581AY_RTROPTP_4_INDIA-FRANKLINTEMPLETON-673x435.jpg"} newsurl={element.url} author={element.author?element.author:"suresh dev"} date={element.publishedAt}></Newsitem>

                        </div>

                    })}
                    <div class="container d-flex justify-content-around ">
                        <button onClick={this.handleprevious} disabled={this.state.page<=1}type="button" class="btn btn-dark">previous</button>
                        <button onClick={this.handlenext}type="button" disabled={(this.state.page +1 >Math.ceil(this.state.totalarticle/this.props.pagesize))} class="btn btn-dark">next</button>

                    </div>


                </div>



            </div>

        );

    }
}

export default News;