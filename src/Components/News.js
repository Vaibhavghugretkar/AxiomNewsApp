import React, {useEffect, useState} from "react";
// import PropTypes from 'prop-types'
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=> {
const  [articles, setArticles] = useState([]);
const  [loading, setLoading] = useState([true]);
const  [page, setPage] = useState(1);
const  [totalResults, setTotalResults] = useState(0);

const capFirstLetter=(string)=>{
return string.charAt(0).toUpperCase()+string.slice(1);
}

const updateNews=async()=>{
  props.setProgress(10);
  const url =
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0c68f6d51c29468e90f7156376935eab&page=${page}&pageSize=${props.pageSize}`
      setLoading(true)
      let data=await fetch(url);
      props.setProgress(30);
      let parsedData=await data.json()
      props.setProgress(70);
      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
      props.setProgress(100);
}


useEffect(() => {
  document.title=`Head Lines - ${capFirstLetter(props.category)}`
    updateNews()
    //eslint-disable-next-line
}, []);
  
// const setPrevClick= async()=>{
// setPage(page-1)
// updateNews();
// }


// const setNextClick= async()=>{
// setPage(page+1)
// updateNews();
// }

const fetchMoreData=async()=>{
  const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0c68f6d51c29468e90f7156376935eab&page=${page+1}&pageSize=${props.pageSize}`
  // const url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=0c68f6d51c29468e90f7156376935eab`
  setPage(page+1)
  let data=await fetch(url);
  let parsedData=await data.json()
  setArticles(articles.concat(parsedData.articles))
  setTotalResults(parsedData.totalResults)
}

    return (
      <div className="container my-3">
        <h1 className="text-center" style={{marginTop:"90px"}}>Top HeadLines - {capFirstLetter(props.category)}</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length!==totalResults}
        loader={<Spinner/>}>
<div className="container">
        <div className="row my-4">
          {articles.map((element) => {
            return (
              <div className="col md-3" key={element.url}>
                <NewsItem
                  title={element.title?element.title:""}
                  description={element.description}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  time={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        </div>
        </InfiniteScroll>
        </div>
      
    );
}

News.defaultProps={
  country:'in',
  pageSize:6
   }
  
    News.propTypes={
       country:PropTypes.string,
       pageSize:PropTypes.number
  }
export default News;
