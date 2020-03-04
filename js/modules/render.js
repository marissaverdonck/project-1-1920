import { getCategories } from "./data.js";
const categoryList = document.getElementById('categoryList')
  // render data
function render(data) {
  const results = data.results;
  console.dir(results);
  results.forEach((item, i) => {
    const html = `
              <article>
                <h2>${item.titles[0]}</h2>
                <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
                <img src="${
                  item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
                }">
              </article>
            `;
    main.insertAdjacentHTML('beforeend', html);
  });
}


function renderCategories(categories) {
  console.log(categories)
  categories.reduce(function(acc, cur, ind) {
    categoryList.insertAdjacentHTML('beforeend', `
    <a href="#${cur.id}">
      <article id="${cur.id}">
      <div> ${cur.image}</div>
     <h2>${cur.name}</h2>
      </article>
      </a>`)
  }, 0)
}



export { render, renderCategories }