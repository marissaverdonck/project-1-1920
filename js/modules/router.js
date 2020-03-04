import data from './categories.js'
import { getCategories, getSubCategories } from './data.js'
import { renderCategories, renderSubCategories } from './render.js'


function router() {

  routie({
    '': () => {
      startApp()
    },

    ':id': (id) => {
      userInput(id)
    }
  });
}

function startApp() {
  const categories = getCategories(data);
  renderCategories(categories)
}

function userInput(id) {
  const categoryAarde = document.querySelector('#aarde')
    // Check if the list categories is loaded
  categoryAarde !== null ? console.log('Categories are loaded') : startApp()
  const selectedId = document.getElementById(id)
  const classSelected = document.querySelector('.selected')

  // Remove the class="selected" from the last category
  selectedId.classList.add('selected')
  classSelected !== null ? classSelected.classList.remove('selected') : console.log('No class selected')
  const subCategories = getSubCategories(id)
  renderSubCategories(subCategories, id)
}

export { router }