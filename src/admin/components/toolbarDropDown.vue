<template>
    <span class="toolbar-tool">
    <button v-on:click="show = !show" class="bg-gray-100 py-2 px-4 hover:bg-gray-800 hover:text-white" v-bind:class="[
              show && 'bg-gray-800 text-white'
            ]">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" v-bind:fill="[show ? '#ffffff' : '#000000']"><rect fill="none" height="24" width="24"/><path d="M3,5v14h18V5H3z M8.33,17H5V7h3.33V17z M13.67,17h-3.33V7h3.33V17z M19,17h-3.33V7H19V17z"/></svg>
        <span>Column</span>
    </button>
    <transition :name="animation">
      <div class="dropdown-menu text-white bg-gray-100 absolute z-10 shadow-lg max-w-xs" v-if="show">
        <div class="list-none overflow-hidden rounded-lg">
          <button class="bg-gray-100 py-2 px-4 hover:bg-gray-800">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABSklEQVRIibXVTytEYRTH8Q+JRJnEQkqysJJYUBaiZGOlJBsbL8C7sbJQdlLsSHkHNjM7hY0/SaxsDJKxGLfGuHfm3ufyq1PPPZ1zvs/TPc95+KltVDLaPXo1UWvd91SzhBgNYCgrKNIkWlJYKe1ukkB/rrygVxzgsVlgW07QAl7SBOYFvWAOqxhDO25xgj2UkxKLqi07kQLS910wqe1vMJ8XVMB5A0hkb1jMA9qNKRrlFOv8TyiEdN0w1jPE92EzBLQk+7VYDgGN1KxrJ0ipgW80BFQJyPkMAV3VrGt/fFwzRL6LENARPjLmHIaA7rCTIf4BW/XOtPeo2+/7EmdlzMYVyDKCelQndxLkEtNRcJ6h+owVzGAN4+jANY6xj/ek5Cwngs60u8r78J2qNkb/f4O6sIHB/walVlIzFP8aVH+is4Aa96qvaUN9AdL9bthjaNBeAAAAAElFTkSuQmCC"/>
          </button>
          <button class="bg-gray-100 py-2 px-4 hover:bg-gray-800">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABT0lEQVRIie3Uvy5mQRjH8c/Lm/gTknUBCsV2GqGRlWho3ACVuAGXsDoXgXbbFZVWs4nmINptZNefhmhUi+xRmMMY55y8XjmJwi95cmaemef3nZnMGT7VpVrYwkTDnMMW/gdgk8pbyENnqiFIxuNOClBTu8qhpyHzV/oEfXxQ+w1zR7GAr6H/G7s469Qg93zFyzSMTdxHc4u4wwaGOvGvA43guASQxhG+dArKQuyhN0zaKTGdDJHmf4aaQfyK/J5AF0nBj1DwrWL16UrjmA5j20n+vI1xjEUGp+G7WHEUdVrCPlaxHuVP2rgOkWo8apc9uHEuS2rOQzyp7nr3R+2DkvGy3ECVWR3or+czz6L8VEmu0J8av0qtePtlWO4G1B9W2CnoBH3dgGAWt4lh+n/k+IeZbiGF5nGl/KhyXGLuvZBCI1jzuJObEBm+q356XugBFBWELDgCbQcAAAAASUVORK5CYII="/>
          </button>
        </div>
      </div>
    </transition>
  </span>
</template>
<style scoped>
button{
  cursor:pointer;
  &:focus{
    outline:none;
  }
}

/* Animations */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.dropdown-wrapper svg {
    display: inline;
}

.toolbar-tool svg, .toolbar-tool svg:hover {
  display: inline;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Slide-in-up animation*/
.slide-in-up-enter-active, .slide-in-up-leave-active {
  transition: all .5s;
  transform: translateY(0);
}
.slide-in-up-enter, .slide-in-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Slide-in-right animation*/
.slide-in-right-enter-active, .slide-in-right-leave-active {
  transition: all .5s;
  transform: translateX(0);
}
.slide-in-right-enter, .slide-in-right-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

/* Slide-in-left animation*/
.slide-in-left-enter-active, .slide-in-left-leave-active {
  transition: all .5s;
  transform: translateX(0);
}
.slide-in-left-enter, .slide-in-left-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* Scale animation*/
.scale-enter-active, .scale-leave-active {
  transition: all .5s;
  transform: scale(1);
}
.scale-enter, .scale-leave-to {
  opacity: 0;
  transform: scale(0);
}

/* Rotate animation*/
.rotate-enter-active, .rotate-leave-active {
  transition: all .5s;
  transform: scale(1) rotate(-360deg);
}
.rotate-enter, .rotate-leave-to {
  opacity: 0;
  transform: scale(0) rotate(360deg);
}
</style>

<script>
export default {
    data() {
    return{
      show: false,
    }
  },
  methods: {
    handleStyleSwitch(a) {
      if (a == "Style 2") {
        let ll = JSON.parse($0.innerText);
        let xz = Object.keys(ll).filter(e => e !== 'exceltotable-premium-frontend-runtime').map(e => ({[e] : ll[e].src}))[0]
        xz['exceltotable-style2'];
        var script = document.createElement('script');
        script.onload = function () {
            //do stuff with the script
            debugger;
        };
        script.src = xz['exceltotable-style2'];

        document.head.appendChild(script);
      }
    }
  },
  props: {
    color: String,
    animation: String,
    styles: Array,
  },
}
</script>