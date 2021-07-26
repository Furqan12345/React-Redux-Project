import React from "react";
import {Button} from 'react-bootstrap';
import "./Article.css";

const article = ({ article, deleteArticle, updateArticle }) => (
  <div className="article">
    <h1>{article.title}</h1>
    <p>{article.body}</p>
    <Button variant="danger" onClick={()=>deleteArticle(article)}> Delete</Button>
    <Button variant="warning" onClick={()=>updateArticle(article)}> Update</Button>
  </div>
);

export default article;
