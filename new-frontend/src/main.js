import './index.css'
import { html, render } from 'lighterhtml'
import { proxy, snapshot, subscribe } from 'valtio/vanilla'
import { devtools } from 'valtio/utils'

const getId = () => new Date().getTime()

const store = proxy({
    camera: {
      images: [],
      candidateImage: null,
    },
    ui: {
      selectedImageId:
        decodeURI(window.location.pathname).split('/photo-booth/')[1] || null,
    },
  })


  function saveImage(url) {
    const id = getId()
    store.camera.images.push({ id, url })
    window.history.pushState({}, '', id)
  }

  document.querySelector('button').addEventListener('click', (evt) => {
    saveImage(21);
  })
  subscribe(store, () => {
    debugger;
    console.log(snapshot(store));
    // keep storage synced
    // localforage.setItem('images', snapshot(store).camera.images || [])
    // hide canvas when not used
    if (store.camera.candidateImage) {
      // canvas.removeAttribute('hidden')
      // eslint-disable-next-line no-debugger
      debugger;
    } else {
      // canvas.setAttribute('hidden', 'hidden')
    }
    // render html
    // renderCanvasControls(!!store.camera.candidateImage)
    // renderImages(store.camera.images, store.ui.selectedImageId)
  })
  const unsub = devtools(store, { name: 'ultimatetables' })