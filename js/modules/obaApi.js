//   /*** Fetching data -> refactor into module later ***/
const main = document.querySelector('main');
const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const query = 'onweer';
const key = 'f60b69054b02f50180d9c088e06270ea';
const key2 = '1e19898c87464e239192c8bfe422f280';
const secret = '34dd0c6e69370e1b0d2b06fb8343c17f';
const secret2 = '4289fec4e962a33118340c888699438d';
const detail = 'Default';
const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;
const config = {
  Authorization: `Bearer ${secret}`
};


function getData(url, config) {
  fetch(url, config)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      return data
    })
    .catch(err => {
      console.log(err);
      return err
    });
}
export { getData }