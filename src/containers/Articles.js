import React,{useEffect} from "react";
import { connect } from "react-redux";

import Article from "../components/Article/Article";
import AddArticle from "../components/AddArticle/AddArticle";
import { simulateHttpRequest } from "../store/actionCreators";
import { deleteArticle, updateArticle } from "../store/actionCreators";
import { useState } from "react";

const Articles = ({
  articles,
  saveArticle,
  deleteArticleprops,
  updateArticleprops,
}) => {
  const [updatedArticle, setUpdatedArticle] = useState({isUpdate:false,article:{}});

  const AddArticleWrapper=(props)=>{
    return (
      <>
      <AddArticle isUpdate={true}
      updateArticle={updateArticleprops}
      saveArticle={saveArticle}
      updatedArticle={updatedArticle.article}
      />
      </>
    )
  }
  function FormUpdateArticle(article){
    setUpdatedArticle({isUpdate:true, article});
  }
  useEffect(()=>{
    setUpdatedArticle({isUpdate:false,article:{}});
  },[articles])
  return (
    <div>
      {
        !updatedArticle.isUpdate ? <AddArticle saveArticle={saveArticle} /> : <AddArticleWrapper />
      }
      
      {articles.map((article) => (
        <Article
          deleteArticle={deleteArticleprops}
          updateArticle={FormUpdateArticle}
          key={article.id}
          article={article}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveArticle: (article) => dispatch(simulateHttpRequest(article)),
    deleteArticleprops: (article) => dispatch(deleteArticle(article)),
    updateArticleprops: (article) => dispatch(updateArticle(article)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
