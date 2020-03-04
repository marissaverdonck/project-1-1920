// Gives all main categorie names
function getCategories(categories) {
  const maincategories = categories.categories.map((categorie, index, array) => {
    return categorie.categorie
  })
  console.log(maincategories)
  return maincategories
}

export { getCategories }