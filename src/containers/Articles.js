import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Article from "../components/Article/Article";
import AddArticle from "../components/AddArticle/AddArticle";
import { simulateHttpRequest } from "../store/actionCreators";
import { deleteArticle, updateArticle, fetchArticles } from "../store/actionCreators";

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    isReloadArticles: state.isReloadArticles
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveArticleprops: (article) => dispatch(simulateHttpRequest(article)),
    deleteArticleprops: (article) => dispatch(deleteArticle(article)),
    updateArticleprops: (article) => dispatch(updateArticle(article)),
    fetchArticlesprops: () => dispatch(fetchArticles())
  };
};

const Articles = ({
  articles,
  isReloadArticles,
  saveArticleprops,
  deleteArticleprops,
  updateArticleprops,
  fetchArticlesprops
}) => {
  const [updatedArticle, setUpdatedArticle] = useState({ isUpdate: false, article: {} });
  const AddArticleWrapper = (props) => {
    return (
      <>
        <AddArticle functionArticle={updateArticleprops}
          articleFields={updatedArticle.article}
          buttonText={"Update Article"}
        />
      </>
    )
  }
  function FormUpdateArticle(article) {
    setUpdatedArticle({ isUpdate: true, article });
  }
  useEffect(() => {
    setUpdatedArticle({ isUpdate: false, article:{}});
  }, [articles])
  useEffect(() => {
    fetchArticlesprops();
  }, [isReloadArticles])

  return (
    <div>
      {
        !updatedArticle.isUpdate ? <AddArticle functionArticle={saveArticleprops} /> : <AddArticleWrapper />
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



export default connect(mapStateToProps, mapDispatchToProps)(Articles);
