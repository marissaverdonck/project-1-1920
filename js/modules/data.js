import data from './categories.js'

// Gives all main categorie names
function getCategories(data) {
  const maincategories = data.categories.map((categorie, index, array) => {
    return categorie.categorie
  })
  return maincategories
}

function getSubCategories(id) {
  const subCategories = data.categories.filter((element, index, array) => {
    const checkedSubCategories = data.categories[index].categorie.id == id
    return checkedSubCategories
  })
  return subCategories[0].subcategories
}


export { getCategories, getSubCategories }