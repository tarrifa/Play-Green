import axios from 'axios';

export const sportsApi = () => {
  const options = {
    method: 'GET',
    url: 'https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?s=Soccer&c=Spain',
    
  };

  return axios
    .request(options)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
