import{t as e,s as b,p as g,h as i,a as m,d as u,b as h}from"./vendor.adc411cf.js";const x=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function d(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=d(t);fetch(t.href,s)}};x();var p={data:[["#","Name","Symbol","Marcet Cap","Price","Circulating Supply","Volume (24h)","% 1h","% 24h","% 7d"],["1","Bitcoin","BTC","$65,981,154,527","$3.782.68","17,442,950","$6,344,541,359","-0.64%","-9.37%","6.64%"],["2","XRP","XRP","$15,116,406,178","$0.370554","40,794,121,066\xC2\xA0*","$1,084,749,047","-1.59%","-13.12%","11.36%"],["3","Ethereum","ETH","$13,006,271,179","$125.06","104,003,442","$3,601,693,220","-1.66%","-17.34%","32.12%"],["4","Bitcoin Cash","BCH","$2,817,114,877","$160.70","17,530,138","$642,673,291","-1.22%","-19.59%","69.72%"],["5","Stellar","XLM","$2,300,466,152","$0.120061","19,160,772,695\xC2\xA0*","$122,095,291","-1.45%","-11.88%","10.23%"],["6","EOS","EOS","$2,237,400,763","$2.47","906,245,118\xC2\xA0*","$1,065,544,841","-0.98%","-16.54%","-2.05%"],["7","Tether","USDT","$1,900,583,447","$1.02","1,856,421,736\xC2\xA0*","$5,929,918,169","0.24%","0.59%","1.40%"],["8","Litecoin","LTC","$1,820,124,644","$30.47","59,726,359","$527,319,088","-1.95%","-14.11%","5.59%"],["9","Bitcoin SV","BSV","$1,588,957,085","$90.65","17,529,211","$157,542,307","-1.73%","-16.16%","13.55%"],["10","TRON","TRX","$1,272,495,696","$0.019098","66,629,110,381","$147,732,187","-1.63%","-16.24%","33.59%"]],showSearchBar:!0};window.tw=e;console.log(p);b({hash:!0});const $=()=>new Date().getTime(),n=document.querySelector("#list-container"),o=g({camera:{images:[],candidateImage:null},ui:{selectedImageId:decodeURI(window.location.pathname).split("/photo-booth/")[1]||null},mock:p}),y=r=>i.node`
    <div class="${e`px-5`}">
    <div class="${e`bg-white pb-4 px-4 rounded-md w-full`}">
    <h1 class="${e`font-bold text(center 5xl white sm:gray-800 md:pink-700)`}">This is Twind!</h1>
    <div class="${e`mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto`}">
      <div class="${e`inline-block min-w-full shadow rounded-lg overflow-hidden`}">
        <table class="${e`min-w-full leading-normal`}">
          <thead>
            <tr>
              ${r[0].map(a=>i.node`<th
              class="${e`px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider`}">
                ${a}
              </th>`)}
            </tr>
          </thead>
          <tbody>
            ${w(r.filter((a,d)=>d!==0))}
          </tbody>
        </table>
      </div>
      </div>
      </div>
      </div>`,f=r=>i.node`<tr class="${e`hover:bg-gray-100 border-b border-gray-200 py-10`}">
      ${r.map(a=>i.node`<td class="${e`px-4 py-4`}">
        ${a}
      </td>`)}
    </tr>`,w=r=>r.map(a=>f(a));n.appendChild(y(o.mock.data));function v(r){const a=$();o.camera.images.push({id:a,url:r})}document.querySelector("button").addEventListener("click",r=>{v(21)});m(o,()=>{if(console.log(h(o)),o.camera.images.forEach(console.log),[...n.children].forEach(r=>r.remove()),n.appendChild(i.node`
      <div class="${e`px-5`}">
      <div class="${e`bg-white pb-4 px-4 rounded-md w-full`}">
      <h1 class="${e`font-bold text(center 5xl white sm:gray-800 md:pink-700)`}">This is Twind!</h1>
      <div class="${e`mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto`}">
        <div class="${e`inline-block min-w-full shadow rounded-lg overflow-hidden`}">
          <table class="${e`min-w-full leading-normal`}">
          <thead>
            <tr>
              <th
                class="${e`px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider`}">
                Name
              </th>
              <th
                class="${e`px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider`}">
                products
              </th>
              <th
                class="${e`px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider`}">
                Created at
              </th>
              <th
                class="${e`px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider`}">
                QRT
              </th>
              <th
                class="${e`px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider`}">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            ${o.camera.images.map(r=>i.node`
              <tr>
              <td class="${e`px-5 py-5 border-b border-gray-200 bg-white text-sm`}">
                <div class="${e`flex items-center`}">
                  <div class="${e`flex-shrink-0 w-10 h-10`}">
                    <img class="${e`w-full h-full rounded-full`}"
                                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                              alt="" />
                                      </div>
                    <div class="${e`ml-3`}">
                      <p class="${e`text-gray-900 whitespace-no-wrap`}">
                        ${r.id}
                      </p>
                    </div>
                  </div>
              </td>
              <td class="${e`px-5 py-5 border-b border-gray-200 bg-white text-sm`}">
                <p class="text-gray-900 whitespace-no-wrap">Admin</p>
              </td>
              <td class="${e`px-5 py-5 border-b border-gray-200 bg-white text-sm`}">
                <p class="text-gray-900 whitespace-no-wrap">
                  Jan 21, 2020
                </p>
              </td>
              <td class="${e`px-5 py-5 border-b border-gray-200 bg-white text-sm`}">
                <p class="text-gray-900 whitespace-no-wrap">
                  43
                </p>
              </td>
              <td class="${e`px-5 py-5 border-b border-gray-200 bg-white text-sm`}">
                <span
                                      class="${e`relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight`}">
                                      <span aria-hidden
                                          class="${e`absolute inset-0 bg-green-200 opacity-50 rounded-full`}"></span>
                <span class="${e`relative`}">Activo</span>
                </span>
              </td>
            </tr>
            `)}
          </table>
        </div>
        </div>
        </div>
        </div>
    `),o.camera.candidateImage)debugger});u(o,{name:"ultimatetables"});
