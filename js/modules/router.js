import data from './categories.js'
import { getCategories } from './data.js'
import { renderCategories } from './render.js'


function router() {

  routie({
    '': () => {
      startApp()
    },

    ':id': () => {
      userInput()
    }
  });
}

function startApp() {
  const categories = getCategories(data);
  renderCategories(categories)
}

function userInput() {


}





export { router }