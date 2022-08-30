<template>
    <span class="toolbar-tool">
    <button v-on:click="show = !show" @mouseenter="columnBtnHover = true" @mouseleave="columnBtnHover = false" class="bg-gray-100 py-2 px-4 hover:bg-gray-800 hover:text-white" v-bind:class="[
              show && 'bg-gray-800 text-white'
            ]">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" v-bind:fill="[show || columnBtnHover ? '#ffffff' : '#000000']"><rect fill="none" height="24" width="24"/><path d="M3,5v14h18V5H3z M8.33,17H5V7h3.33V17z M13.67,17h-3.33V7h3.33V17z M19,17h-3.33V7H19V17z"/></svg>
        <span>Column</span>
    </button>
    <transition :name="animation">
      <div class="dropdown-menu text-white bg-gray-100 absolute z-10 shadow-lg max-w-xs" @mouseleave="show = false" v-if="show">
        <div class="list-none overflow-hidden rounded-lg">
          <button @click="addColumnRight" class="bg-white py-2 px-4 hover:bg-gray-800">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABC0lEQVRIid2VPQoCMRCFP7UXtBD0EGIniB5g/cETaSOCp7Gz9OcEtmKrrTYqWq7FJhLGzW52V0F8MEVeZuZNMhMC/4oucAR8ix0Bz/BvAKUkAlHJtR0M/zuwA6quAnHJtUn/PVD7pECYbc1EedcjJYAf7/JDV6Tx9SbXsYxpLkLABbb4F77R5MwCJ2BM8HpTw3bnc6CSJXGUwAIoqP0hsAFuytbAIIvAGSiqvZmlAB+YphWYGJWbfAtoC66fRqCp+I3gw/xXaQTKir8alUvok1xM0nVMH2IdFhf76EzID0fP/Jr4K1q6CHgEP5YOGil+IJK1gY7geklOEoYp7z2S05YZfYJpuSpbYqn8CVxttbGJIJXVAAAAAElFTkSuQmCC"/>
          </button>
          <button @click="addColumnLeft" class="bg-white py-2 px-4 hover:bg-gray-800">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABEUlEQVRIid2VPW4CMRCFP6BHCgWIS6B0SBEcgD/lRKSJVuI06VJu2BvQgOihhQZQKKFYWzITO2vvT8OTpvCz/d54PJbh2fACvBrjMbAHbo7YAyNf8S6wBX4N7j9xHTsf8Q6wMTZpZInL9U6sAsSCDOo+7mWgDaypsERgv+RSDSBt016ZBrUMQ9/snDqVX3IRgwPwwePLD4ar5l+knVcYNvFvoKHm34EEuKhYArMiBkegqeYWjgRuQJTX4NPI3OTfgIHgpnkM+opPBG9b/5PHoKX4s5G5hD7JCcLb9CrGtv1Zj/cB8sPRPb8ku0Sxj8GI9MfSm+aKnwmxATAU3CTkJDZE/L0j2W2FMSXtlrOKGJH5HeqytKMUvYpHAAAAAElFTkSuQmCC"/>
          </button>
        </div>
      </div>
    </transition>
  </span>
</template>
<style scoped>
/* button{
  cursor:pointer;
  &:focus{
    outline:none;
  }
} */

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
      columnBtnHover: false,
      hover: false,
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
    },
    addColumnLeft(a) {
      let {activeCell} = this.$parent.$refs.grid;
      if (typeof(activeCell.columnIndex) == 'undefined') return;
      let newCells = this.$store.state.grid.data.map((ee) => [
                ...ee.slice(0, activeCell.columnIndex),
                "",
                ...ee.slice(activeCell.columnIndex),
              ]);
              this.$store.commit("updateGrid", newCells);
              this.$parent.$refs.grid.setActiveCell(activeCell.columnIndex +1 ,activeCell.rowIndex);
              this.$parent.$refs.grid.refresh();
              this.$parent.$refs.grid.selectNone();
              // this.$parent.$refs.grid.activeCell = activeCell;
    },
    addColumnRight(a) {
      let {activeCell} = this.$parent.$refs.grid;
      if (typeof(activeCell.columnIndex) == 'undefined') return;
      let newCells = this.$store.state.grid.data.map((ee) => [
                ...ee.slice(0, activeCell.columnIndex + 1),
                "",
                ...ee.slice(activeCell.columnIndex + 1),
              ]);
              this.$store.commit("updateGrid", newCells);
              
              this.$parent.$refs.grid.setActiveCell(activeCell.columnIndex ,activeCell.rowIndex);
              this.$parent.$refs.grid.refresh();
              this.$parent.$refs.grid.selectNone();
    }
  },
  props: {
    color: String,
    animation: String,
    styles: Array,
  },
}
</script>