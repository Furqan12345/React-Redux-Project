import React, { useEffect, useState } from "react";
import "./AddArticle.css";

const AddArticle = ({ functionArticle, articleFields={}, buttonText="Add Article" }) => {
  const [article, setArticle] = useState(articleFields);
  const handleArticleData = e => {
    console.log("from add article", article);
    setArticle({
      ...article,
      [e.target.id]: e.target.value
    });
  };
  const addNewArticle = e => {
    e.preventDefault();
    functionArticle(article);
  }
  

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
          <p>{buttonText}</p>
        }
      </button>
    </form>
  );
};
export default AddArticle;
