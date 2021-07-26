import * as actionTypes from "./actionTypes";

const initialState = {
  isReloadArticles: false,
  articles: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      const newArticle = {
        id: Math.random(), // not really unique but it's just an example
        title: action.article.title,
        body: action.article.body
      };
      return {
        ...state,
        isReloadArticles:!state.isReloadArticles,
        articles: state.articles.concat(newArticle)
      };

    case actionTypes.ADD_ARTICLES:
      return {
        ...state,
        articles: action.articles
      };

    case actionTypes.DELETE_ARTICLE:
      return {
        ...state,
        isReloadArticles: !(state.isReloadArticles),
        // eslint-disable-next-line array-callback-return
        articles: state.articles.filter((article) => {
          if (article.id !== action.article.id) {
            return article;
          }
        })
      }
    case actionTypes.UPDATE_ARTICLE:
      return {
        ...state,
        isReloadArticles: !(state.isReloadArticles),
        // eslint-disable-next-line array-callback-return
        articles: state.articles.map(x => (x.title === action.article.title ? { ...x, title: action.article.title, body: action.article.body } : x))
      }

    default:
      return state;
  }
};
export default reducer;
