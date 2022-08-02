import './index.css'
import { html, render, svg } from 'lighterhtml'
import { proxy, snapshot, subscribe } from 'valtio/vanilla'
import { devtools } from 'valtio/utils'
import { tw, setup } from 'twind'
import { css, apply } from 'twind/css'
import mock from './mock'
window['tw'] = tw;
window.manipulateStore = (incomingStore) => {
  store.mock = incomingStore;
  // listContainer.appendChild(outputBaseTable(store.mock.data));
  // listContainer.querySelector('[id="table-search"]').addEventListener('keyup', handleSearch);
  // tableBody = listContainer.querySelector('table tbody');
  // console.log(store);
  listContainer.innerHTML = '';
  listContainer.appendChild(outputBaseTable(store.mock.data));
  tableBody = listContainer.querySelector('table tbody');
  listContainer.querySelector('[id="table-search"]').addEventListener('keyup', handleSearch);
}

const isDev = false;

let tableBody = null;

if (isDev) {
  console.log(mock);
}

setup({
  nonce: 'sdsadas',
  preflight: true,
  prefix: true,
  hash: !isDev, // hash all generated class names (default: false)
})

const getId = () => new Date().getTime()

const listContainer = document.querySelector('.excel-to-table-app')

const store = proxy({
    mock,
    searchQuery: ''
  })

  function handleSearch(evt) {
    console.log(evt.target.value);
    store.searchQuery = evt.target.value.trim();
  }

  const outputFilteredCells = (cells) => {
    return html.node`${outputTableBody(cells)}`;
  }

  const headerColor = css`
    color: ${mock.settingsItemProps.tableHeaderTextColor};
    background-color: ${mock.settingsItemProps.tableHeaderBg}};
  `
  const inputPlaceHolderStyle = css(
    {
      '&::placeholder' : {
        color: mock.settingsItemProps.tableHeaderTextColor,
        opacity: 0.5
      }
    }
  )

  const searchBar = () => {
    return html.node`<div class="${tw`relative mt-1`}">
    <div class="${tw`absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none`}">
      ${svg.node`<svg class="${tw`w-5 h-5 ${headerColor}`}" fill="currentColor" viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clip-rule="evenodd"></path>
      </svg>`}
    </div>
    <input type="text" id="table-search" class="${tw`${headerColor} ${inputPlaceHolderStyle} border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}" placeholder="Search for items">
  </div>`;
  }

  const outputBaseTable = (cells) => {
    return html.node`
    <div class="${tw`px-5`}">
    <div class="${tw`bg-white pb-4 px-4 rounded-md w-full`}">
    <div class="${tw`mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto`}">
      <header class="${tw`flex items-center justify-between px-5 py-4 border-gray-200 rounded-t-lg ${headerColor}`}">
        <div class="${tw`font-semibold`}">${store.mock.tableTitle}</div>
      </header>
      <div class="${tw`inline-block min-w-full shadow rounded-b-lg overflow-hidden`}">
        <table class="${tw`min-w-full leading-normal`}">
          <thead>
            <tr>
              ${cells[0].map(head => html.node`<th
              class="${tw`px-5 py-3 border-b-2 border-gray-200 ${headerColor} text-left text-xs font-semibold text-gray-600 uppercase tracking-wider`}">
                ${head}
              </th>`)}
            </tr>
          </thead>
          <tbody>
            ${outputTableBody(cells.filter((k, i) => i !== 0))}
          </tbody>
        </table>
      </div>
      </div>
      </div>
      </div>`;
  }

  const outputCell = (cellsData) => {
    return html.node`<tr class="${tw`hover:bg-gray-100 border-b border-gray-200 py-10`}">
      ${cellsData.map(cellVal => html.node`<td class="${tw`px-4 py-4`}">
        ${cellVal}
      </td>`)}
    </tr>`
  }

  const outputTableBody = cells => {
    return cells.map(one => outputCell(one));
  }

  if (window.top == window) {
    listContainer.appendChild(outputBaseTable(store.mock.data));
    tableBody = listContainer.querySelector('table tbody');
    // listContainer.querySelector('[id="table-search"]').addEventListener('keyup', handleSearch);
  }
  


  function saveImage(url) {
    const id = getId()
    store.camera.images.push({ id, url })
  }

  // document.querySelector('button').addEventListener('click', (evt) => {
  //   saveImage(21);
  // })

  const emptySearchResultsNotice = () => {
    return html.node`<p class="${tw`hover:bg-gray-100 w-full border-b border-gray-200 py-3`}">
    No items match the search query
  </p>`;
  }

  const filterBySearchQuery = (searchString) => {
    // let upperCasedData = snapshot(store.mock.data).map(e => e.map(e => e.toUpperCase()));
    return snapshot(store.mock.data).filter((k, i) => {
      return k.map(e => e.toUpperCase().startsWith(searchString.toUpperCase())).some(q => q);
    });
  }
  subscribe(store, () => {
    console.log(snapshot(store));
    // if ( store.searchQuery.length == 0 ) {
    //   [...tableBody.children].forEach(node => node.remove());
    // }
    if ( store.searchQuery.length > 2 ) {
      [...tableBody.children].forEach(node => node.remove());
      let filteredCells = filterBySearchQuery(store.searchQuery);
      tableBody.appendChild( filteredCells.length > 0 ? outputFilteredCells(filteredCells) : emptySearchResultsNotice());
      // outputFilteredCells(cells);
    }
  })
  const unsub = devtools(store, { name: 'ultimatetables' })