import * as actionTypes from "./actionTypes";

export const addArticle = article => {
  return {
    type: actionTypes.ADD_ARTICLE,
    article
  };
};

export const simulateHttpRequest = article => {
  return dispatch => {
    setTimeout(() => {
      dispatch(addArticle(article));
    }, 3000);
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
    setTimeout(() => {
      dispatch(deleteArticleObjectCreator(article));
    }, 3000);
  };
};
export const updateArticleObjectCreator = article => {
  return {
    type: actionTypes.UPDATE_ARTICLE,
    article
  };
};
export const updateArticle = article => {
  return dispatch => {
    setTimeout(() => {
      dispatch(updateArticleObjectCreator(article));
    }, 3000);
  };
};
