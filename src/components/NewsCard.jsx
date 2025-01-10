import React from "react";
import { Button, Card } from "react-bootstrap";
import "../App.css";
import { summary, newsChannel, lastUpdate } from '../config/config';


function NewsCard({ imageUrl, alt, description, title, channel, published, urlNews, author }) {
  
  return (
    <div>
        <img src={imageUrl} alt={alt} />
        <p>{title}</p>
        <p >{description?.substr(0, 150)}</p>
        <details>
          <summary>{summary}</summary>
          <p>
            <span>Channel: </span>
            {newsChannel(channel)}
          </p>
          <p>
            <span>Published at: </span>
            {lastUpdate(published)}
          </p>
          <p>
            <span>Author: </span>
            {author}
          </p>
        </details>
        <button
          href={urlNews}
          target="_blank"
        >
          Read more 
        </button>
    </div>
  )
}

export default NewsCard