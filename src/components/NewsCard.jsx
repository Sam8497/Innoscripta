import React from "react";
import { Button, Card } from "react-bootstrap";
import "../App.css";
import { summary, newsChannel, lastUpdate } from '../config/config';


function NewsCard({ imageUrl, alt, description, title, channel, published, urlNews, author }) {
  
  return (
    <Card className="card">
      <Card.Img className="card-img" variant="top" src={imageUrl} alt={alt} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="card-description">{description?.substr(0, 150)}</Card.Text>
        <details className="details" open>
          <summary className="summary">{summary}</summary>
          <p className="channel">
            <span>Channel: </span>
            {newsChannel(channel)}
          </p>
          <p className="published">
            <span>Published at: </span>
            {lastUpdate(published)}
          </p>
          <p className="author">
            <span>Author: </span>
            {author}
          </p>
        </details>
        <Button
          className="card-btn"
          href={urlNews}
          target="_blank"
        >
          Read more 
        </Button>
      </Card.Body>
    </Card>
  )
}

export default NewsCard