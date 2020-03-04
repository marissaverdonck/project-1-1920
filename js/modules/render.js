import { getCategories } from "./data.js";
const categoryList = document.getElementById('categoryList')


// render data
function render(data) {
  //   const results = data.results;
  //   console.dir(results);
  //   results.forEach((item, i) => {
  //     const html = `
  //               <article>
  //                 <h2>${item.titles[0]}</h2>
  //                 <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
  //                 <img src="${
  //                   item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
  //                 }">
  //               </article>
  //             `;
  //     main.insertAdjacentHTML('beforeend', html);
  //   });
}


function renderCategories(categories) {
  categories.reduce(function(acc, cur, ind) {
    categoryList.insertAdjacentHTML('beforeend', `

      <article id="${cur.id}">
      <a href="#${cur.id}">
      <div> ${cur.image}</div>
      <h2>${cur.name}</h2>  
     </a>
     <div class="wrapper"></div>
      </article>
   `)
  }, 0)
}

function renderSubCategories(subCategories, id) {

  // const itemSubCategoryList = document.querySelectorAll('.subCategoryList>li')
  // console.log(itemSubCategoryList)
  // subCategoryList.remove()

  // itemSubCategoryList !== null ? console.log('er is een lijst') : console.log('er is geen lijst')
  // console.log(id)
  // console.log(subCategories)
  // console.log(subCategoryList)
  const list = document.querySelector('.list')
  list !== null ? (list.remove(), renderArray()) : renderArray()

  function renderArray() {
    const subCategoryList = document.querySelector('#' + id + '> div')
    subCategoryList.insertAdjacentHTML('afterbegin', `<ul class="list"></ul>`)
    const list = document.querySelector('.list')
    subCategories.reduce(function(acc, cur, ind) {
      list.insertAdjacentHTML('afterbegin', `
      <li>
      <a>
      <span>${cur.name}
      </span>
      </a>
      </li>
    `)
    }, 0)
  }
}


export { render, renderCategories, renderSubCategories }