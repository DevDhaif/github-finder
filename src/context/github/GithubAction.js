import axios from "axios";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const gituhb=axios.create({
    baseURL:GITHUB_URL,
    headers:{Authorization: `token ${GITHUB_TOKEN}`}
})

export const searchUsers = async (text) => {
    const params = new URLSearchParams({
      q: text,
    });

    const response = await gituhb.get(`/search/users?${params}`)  

    
    
    return response.data.items;
  };


  //Get user and repos 

  export const getUserAndRepos=async (login)=>{
    const [user,repos]=await Promise.all([
        gituhb.get(`/users/${login}`),
        gituhb.get(`/users/${login}/repos`)
    ])
    return {user:user.data,repos:repos.data}
    }
//   export const getUser = async (login) => {

//     const response = await gituhb.get(`/users/${login}`)

//     if (response.status === 404) {
//       window.location = "/notfound";
//     } else {
      
//     return response.data;
//     }
//   };

//   export const getUserRepos =async (login) => {
//     const params=new URLSearchParams({
//       sort:'created',
//       per_page:20,
//     })
//      const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`,
//     {
//       headers: {
//         Authorization: `token ${GITHUB_TOKEN}`,
//       },
//     });
//     if (response.status === 404) {
//       window.location = "/notfound";
//     } else {
//       const data = await response.json();

//     // dispatch({
//     //   type: "GET_REPOS",
//     //   payload: data,
//     // });
//     return data;
//   }
//   };