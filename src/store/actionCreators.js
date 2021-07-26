import * as actionTypes from "./actionTypes";

export const addArticle = article => {
  return {
    type: actionTypes.ADD_ARTICLE,
    article
  };
};

export const simulateHttpRequest = article => {
  return dispatch => {
    fetch("http://localhost:3004/articles/", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(article)
    })
      .then((data) => {
        data.json()
          .then((article) => {
            dispatch(addArticle(article));
          })
      })
  };
};
export const deleteArticleObjectCreator = article => {
  return {
    type: actionTypes.DELETE_ARTICLE,
    article
  };
};
export const deleteArticle = article => {
  return dispatch => {
    fetch(`http://localhost:3004/articles/${article.id}`, {
      method: "DELETE",
    })
      .then((data) => {
        data.json()
          .then((article) => {
            dispatch(deleteArticleObjectCreator(article));
          })
      })

  };
};
export const updateArticleObjectCreator = article => {
  return {
    type: actionTypes.UPDATE_ARTICLE,
    article
  };
};
export const fetchUsersObjectCreator = articles => {
  return {
    type: actionTypes.ADD_ARTICLES,
    articles
  }
}
export const updateArticle = article => {
  return dispatch => {
    fetch(`http://localhost:3004/articles/${article.id}`, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(article)
    })
      .then((data) => {
        data.json()
          .then((article) => {
            dispatch(updateArticleObjectCreator(article));
          })
      })
  };
};
export const fetchArticles = () => {
  return dispatch => {
    fetch("http://localhost:3004/articles/")
      .then((data) => {
        data.json()
          .then((articles) => {
            console.log(articles);
            dispatch(fetchUsersObjectCreator(articles));
          })
      })
  };
};
