import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
import { searchUsers } from "./GithubAction";

const GithubContext = createContext();

// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const intialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, intialState);

  // const deleteUsers = () => {
  //   dispatch({
  //     type: "CLEAR_USERS",
  //   });
  // };
  // const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
        // searchUsers,
        // deleteUsers,
        // getUserRepos,
        // getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
