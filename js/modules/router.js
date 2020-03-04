import data from './categories.js'
import { getCategories } from './data.js'
import { renderCategories } from './render.js'


function router() {

  routie({
    '': () => {
        startApp()
      }
      // 'detail:id?/:lat?/:lon': (id, lat, lon) => {
      //   detailpage(id, lat, lon)
      // }
  });
}

function startApp() {
  const categories = getCategories(data);
  renderCategories(categories)
}





export { router }