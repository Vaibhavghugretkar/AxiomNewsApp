import React from "react";

const NewsItem=(props)=>{
    let { title, description, imgUrl, newsUrl, time} = props;

    return (
      <div className="cardContainer">
        <div className="card" style={{ width: "18rem",  height:"650px", marginBottom:"45px"}}>
          <img style={{height:"180px"}}
            src={!imgUrl?"https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg":imgUrl}
            alt="..."  />
          <div className="card-body">
            <h5 className="card-title">{!title? "There is no news" :title}...</h5>
            <p className="card-text">{!description?"Clcik on Read More for further details ":description}...</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary my-2">
              Read More...
            </a>
            <div className="card-footer">
      <small className="text-body-secondary">Last updated {new Date(time).toUTCString()}</small>
    </div>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
