import React ,{Component} from'react';
export class News extends Component{
    render(){
        let {title,description,imageurl,newsurl ,author,date}=this.props;

        return(

            <>
           <div className="card" style={{width: "18rem" }}>
  <img src={imageurl?imageurl:"https://images.moneycontrol.com/static-mcnews/2021/06/2021-06-09T205305Z_1_LYNXNPEH581AY_RTROPTP_4_INDIA-FRANKLINTEMPLETON-673x435.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}..<span  className='badge bg-secondary'>New</span></h5>
    <p className="card-text">{description}..</p>
    <p className="card-text"><small className='text-muted'>By {author} on{date}</small></p>

    <a href={newsurl} target="_blank" className="btn btn-primary">Read More </a>
  </div>
 
</div>

            </>
        );
    }
    }
   
    export default News;