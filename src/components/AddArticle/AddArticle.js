import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "./AddArticle.css";

const AddArticle = ({ saveArticle, updateArticle=null, updatedArticle={}, isUpdate=false }) => {
  const [article, setArticle] = useState(updatedArticle);
  const handleArticleData = e => {
    console.log("from add article",article);
    setArticle({
      ...article,
      [e.target.id]: e.target.value
    });
  };
  const addNewArticle = e => {
    e.preventDefault();
    console.log("from add article",article);
    if(isUpdate){
      console.log("from add article",article);
      updateArticle(article);
    }
    else{
      console.log("from save add article",article);
      saveArticle(article);
    }
    
  };
  useEffect(()=>{
    if(isUpdate){
      console.log("from add article",article);
        setArticle(updatedArticle);
    }
  },[])

  return (
    <form onSubmit={addNewArticle} className="add-article">
      <input
        type="text"
        id="title"
        placeholder="Title"
        value={article.title}
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="body"
        placeholder="Body"
        value={article.body}
        onChange={handleArticleData}
      />
      <button type="submit">
        {
          isUpdate ? <p>Update Article</p> : <p>Add Article</p>
        }
      </button>
    </form>
  );
};
export default AddArticle;
