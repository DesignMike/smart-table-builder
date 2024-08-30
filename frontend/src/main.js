import './index.css'
import { html, render, svg } from 'lighterhtml'
import { proxy, snapshot, subscribe } from 'valtio/vanilla'
import { devtools } from 'valtio/utils'
import { tw, setup } from 'twind'
import { css, screen, apply, theme, animation } from 'twind/css'
import mock from '../../default_state'
window['tw'] = tw;

const bounce = animation('1s ease infinite', {
  'from, 20%, 53%, 80%, to': {
    transform: 'translate3d(0,0,0)',
  },
  '40%, 43%': {
    transform: 'translate3d(0, -30px, 0)',
  },
  '70%': {
    transform: 'translate3d(0, -15px, 0)',
  },
  '90%': {
    transform: 'translate3d(0, -4px, 0)',
  },
})

// let mycss = css`
// color: ${store.mock.settingsItemProps.tableHeaderTextColor};
// background-color: ${store.mock.settingsItemProps.tableHeaderBg}};
// `

const loadCSS = (url) => {
  var link = document.createElement( "link" );
  link.href = url;
  link.type = "text/css";
  link.rel = "stylesheet";
  link.media = "screen,print";

  document.getElementsByTagName( "head" )[0].appendChild( link );
}

window.manipulateStore = (incomingStore) => {
  store.mock = incomingStore;
  listContainer.innerHTML = '';
  store.mock.fonts.forEach(url => {
    loadCSS(url);
  });
  listContainer.appendChild(outputBaseTable(store.mock.data, store.mock.fontConfig));
  tableBody = listContainer.querySelector('table tbody');
  listContainer.querySelector('[id="table-search"]')?.addEventListener('keyup', handleSearch);
}

const isDev = false;

let tableBody = null;

if (isDev) {
  console.log(mock);
}

setup({
  preflight: true,
  prefix: true,
  hash: !isDev, // hash all generated class names (default: false)
})

const getId = () => new Date().getTime()

let listContainer = document.querySelector('.excel-to-table-app')

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

  const searchBar = () => {
    const headerColor = css`
      color: ${store.mock.settingsItemProps.tableHeaderTextColor};
      background-color: ${store.mock.settingsItemProps.tableHeaderBg}};
      font-family: ${store.mock.fontConfig[0][0]};
      font-weight: ${store.mock.fontConfig[0][2]};
      font-size: ${store.mock.fontConfig[0][1]};
    `
    const inputPlaceHolderStyle = css(
      {
        '&::placeholder' : {
          color: mock.settingsItemProps.tableHeaderTextColor,
          opacity: 0.5
        }
      }
    )

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

  const outputBaseTable = (cells, fontConfig = {}) => {
    let mycss2 = css`@media (max-width: 600px) {
      th {
        display: none;
      }
    }`
    const headerColor = css`
      color: ${store.mock.settingsItemProps.tableHeaderTextColor};
      background-color: ${store.mock.settingsItemProps.tableHeaderBg}};
      font-family: ${store.mock.fontConfig[0][0]};
      font-weight: ${store.mock.fontConfig[0][2]};
      font-size: ${store.mock.fontConfig[0][1]};
    `
    const noBorder = css`
      border: 0;`
    let { showTitle } = store.mock.settingsItemProps;
    return html.node`
    <div>
    <div class="${tw`bg-white pb-4 px-4 rounded-md w-full`}">
    <div class="${tw`sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto`}">
      ${ showTitle ? html.node`<header class="${tw`flex items-center justify-between px-5 py-4 border-gray-200 rounded-t-lg ${headerColor}`}">
        <div class="${tw`font-semibold`}">${store.mock.tableTitle}</div>
      </header>` : ''}
      <div class="${tw`inline-block min-w-full shadow ${showTitle ? `rounded-b-lg` : `rounded-lg`} overflow-hidden`}">
        <table class="${tw`min-w-full leading-normal ${noBorder}`}">
          <thead>
            <tr class="${tw`${mycss2}`}">
              ${cells[0].map(head => html.node`<th
              class="${tw`px-5 py-3 border-b-2 border-gray-200 ${noBorder} ${headerColor} text-left text-xs font-semibold text-gray-600 uppercase tracking-wider`}">
                ${head}
              </th>`)}
            </tr>
          </thead>
          <tbody>
            ${outputTableBody(cells.filter((k, i) => i !== 0), cells.filter((k, i) => i == 0)[0])}
          </tbody>
        </table>
      </div>
      </div>
      </div>
      </div>`;
  }

  const outputCell = (cellsData, tableHeadCell) => {

  let mycss = css`@media (max-width: 600px) {
    margin-bottom: 1rem;
    box-shadow: 0 2px 3px hsl(0deg 0% 4% / 10%), 0 0 0 1px hsl(0deg 0% 4% / 10%);
    max-width: 100%;
    position: relative;
    display: block;
    td {
      display: flex;
      width: auto;
      justify-content: space-between;
      border: 0;
      /* text-align: right; */
      border-bottom: 1px solid #f5f5f5;
      padding: 0.5em 0.75em;
      text-align: right!important;
      vertical-align: top;
      &::before {
        ${apply`text-purple-700`}
        content: attr(data-label);
        font-weight: 600;
        padding-right: 0.5em;
        text-align: left;
      }
    }
  }`
  let fontCss = css`
  font-family: ${store.mock.fontConfig[1][0]};
  font-weight: ${store.mock.fontConfig[1][2]};
  font-size: ${store.mock.fontConfig[1][1]};
  `

    return html.node`<tr class="${tw`hover:bg-gray-100 border-b border-gray-200`} ${tw`${fontCss}`} ${tw`${mycss}`}">
      ${cellsData.map((cellVal, index) => html.node`<td data-label="${tableHeadCell[index]}" class="${tw`p-2`}">
        <span>${cellVal}</span>
      </td>`)}
    </tr>`
  }

  const outputTableBody = (cells, tableHeadCell) => {
    return cells.map(one => outputCell(one, tableHeadCell));
  }

  if (window.top == window && !isDev) {
    let tableId = listContainer.getAttribute('data-table-id');
    (async () => {
      let tableData = await fetch(`${wpUltimateTablesRoute}/get-table-cells/${tableId}`);
      if (tableData) {
        let data_rcv = await tableData.json();
        store.mock = x = {
          ...data_rcv.grid,
          tableTitle: data_rcv.title,
          fonts: [
            data_rcv.fontString,
            data_rcv.tableBodyFontString,
          ],
          settingsItemProps: data_rcv.settingsItemProps,
          fontConfig: [
            data_rcv.fontSettings,
            data_rcv.tableBodyFontSettings,
          ],
        }
        store.mock.fonts.forEach(url => {
          loadCSS(url);
        });
        listContainer.appendChild(outputBaseTable(store.mock.data));
      }
    })();
    
    tableBody = listContainer.querySelector('table tbody');
  }

  if (window.top == window && isDev) {
    listContainer = document.querySelector('#list-container');
    listContainer.appendChild(outputBaseTable(store.mock.data));
    tableBody = listContainer.querySelector('table tbody');
    // listContainer.querySelector('[id="table-search"]').addEventListener('keyup', handleSearch);
  }
  if (window.top != window) {
    listContainer = document.querySelector('#list-container');
  }
  


  function saveImage(url) {
    const id = getId()
    store.camera.images.push({ id, url })
  }

  const emptySearchResultsNotice = () => {
    return html.node`<p class="${tw`hover:bg-gray-100 w-full border-b border-gray-200 py-3`}">
    No items match the search query
  </p>`;
  }

  const filterBySearchQuery = (searchString) => {
    return snapshot(store.mock.data).filter((k, i) => {
      return k.map(e => e.toUpperCase().startsWith(searchString.toUpperCase())).some(q => q);
    });
  }
  subscribe(store, () => {
    if ( store.searchQuery.length > 2 ) {
      [...tableBody.children].forEach(node => node.remove());
      let filteredCells = filterBySearchQuery(store.searchQuery);
      tableBody.appendChild( filteredCells.length > 0 ? outputFilteredCells(filteredCells) : emptySearchResultsNotice());
    }
  })
  const unsub = devtools(store, { name: 'ultimatetables' })