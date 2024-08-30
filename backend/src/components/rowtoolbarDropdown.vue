<template>
  <span class="toolbar-tool">
    <button
      v-on:click="show = !show"
      @mouseenter="columnBtnHover = true"
      @mouseleave="columnBtnHover = false"
      class="bg-gray-100 py-2 px-4 hover:bg-gray-800 hover:text-white"
      v-bind:class="[show && 'bg-gray-800 text-white']"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        v-bind:fill="[show || columnBtnHover ? '#ffffff' : '#000000']"
      >
        <rect fill="none" height="24" width="24" />
        <path
          fill="currentColor"
          d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,5v3H5V5H19z M19,10v4H5v-4H19z M5,19v-3h14v3H5z"
        />
      </svg>
      <span>Rows</span>
      <svg
        class="ml-2"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        xmlns="http://www.w3.org/2000/svg"
        :fill="[show || columnBtnHover ? '#ffffff' : '#4B5563']"
      >
        <path
          d="M16.4097 10.5C16.9346 10.5 17.1974 11.0678 16.8263 11.3999L12.4166 15.3456C12.1865 15.5515 11.8135 15.5515 11.5834 15.3456L7.17373 11.3999C6.80261 11.0678 7.06545 10.5 7.5903 10.5L16.4097 10.5Z"
        />
      </svg>
    </button>
    <transition :name="animation">
      <div
        class="dropdown-menu text-white bg-gray-100 absolute z-10 shadow-lg max-w-xs"
        @mouseleave="show = false"
        v-if="show"
      >
        <div
          v-click-outside="handleOutsideClick"
          class="list-none overflow-hidden rounded-lg"
        >
          <button
            class="flex bg-white text-gray-900 py-2 px-4 hover:bg-gray-300"
            @click="addRow"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.66668 8.33333C1.66668 8.77536 1.84227 9.19928 2.15483 9.51184C2.46739 9.8244 2.89132 10 3.33334 10H16.6667C17.1087 10 17.5326 9.8244 17.8452 9.51184C18.1577 9.19928 18.3333 8.77536 18.3333 8.33333V2.5H16.6667V4.16667H13.3333V2.5H11.6667V4.16667H8.33334V2.5H6.66668V4.16667H3.33334V2.5H1.66668V8.33333ZM16.6667 8.33333H13.3333V5.83333H16.6667V8.33333ZM11.6667 8.33333H8.33334V5.83333H11.6667V8.33333ZM3.33334 8.33333V5.83333H6.66668V8.33333H3.33334ZM10.8333 11.6667H9.16668V14.1667H6.66668V15.8333H9.16668V18.3333H10.8333V15.8333H13.3333V14.1667H10.8333V11.6667Z"
                fill="#4B5563"
              />
            </svg>

            <span class="mr-2" />
            <span>Add Row Below</span>
          </button>
          <button
            class="flex bg-white text-gray-900 py-2 px-4 hover:bg-gray-300"
            @click="addRowAbove"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3333 11.6667C18.3333 11.2246 18.1577 10.8007 17.8452 10.4882C17.5326 10.1756 17.1087 10 16.6667 10H3.33332C2.8913 10 2.46737 10.1756 2.15481 10.4882C1.84225 10.8007 1.66666 11.2246 1.66666 11.6667V17.5H3.33332V15.8333H6.66666V17.5H8.33332V15.8333H11.6667V17.5H13.3333V15.8333H16.6667V17.5H18.3333V11.6667ZM3.33332 11.6667H6.66666V14.1667H3.33332V11.6667ZM8.33332 11.6667H11.6667V14.1667H8.33332V11.6667ZM16.6667 11.6667V14.1667H13.3333V11.6667H16.6667ZM9.16666 8.33333H10.8333V5.83333H13.3333V4.16667H10.8333V1.66667H9.16666V4.16667H6.66666V5.83333H9.16666V8.33333Z"
                fill="#4B5563"
              />
            </svg>

            <span class="mr-2" />
            <span>Add Row Above</span>
          </button>
        </div>
      </div>
    </transition>
  </span>
</template>
<style scoped>
button {
  cursor: pointer;
  &:focus {
    outline: none;
  }
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.dropdown-wrapper svg {
  display: inline;
}

.toolbar-tool svg,
.toolbar-tool svg:hover {
  display: inline;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Slide-in-up animation*/
.slide-in-up-enter-active,
.slide-in-up-leave-active {
  transition: all 0.5s;
  transform: translateY(0);
}
.slide-in-up-enter,
.slide-in-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Slide-in-right animation*/
.slide-in-right-enter-active,
.slide-in-right-leave-active {
  transition: all 0.5s;
  transform: translateX(0);
}
.slide-in-right-enter,
.slide-in-right-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

/* Slide-in-left animation*/
.slide-in-left-enter-active,
.slide-in-left-leave-active {
  transition: all 0.5s;
  transform: translateX(0);
}
.slide-in-left-enter,
.slide-in-left-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* Scale animation*/
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s;
  transform: scale(1);
}
.scale-enter,
.scale-leave-to {
  opacity: 0;
  transform: scale(0);
}

/* Rotate animation*/
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.5s;
  transform: scale(1) rotate(-360deg);
}
.rotate-enter,
.rotate-leave-to {
  opacity: 0;
  transform: scale(0) rotate(360deg);
}
</style>

<script>
export default {
  data() {
    return {
      show: false,
      columnBtnHover: false,
      hover: false,
    };
  },
  methods: {
    handleStyleSwitch(a) {
      if (a == 'Style 2') {
        let ll = JSON.parse($0.innerText);
        let xz = Object.keys(ll)
          .filter((e) => e !== 'exceltotable-premium-frontend-runtime')
          .map((e) => ({ [e]: ll[e].src }))[0];
        xz['exceltotable-style2'];
        var script = document.createElement('script');
        script.onload = function () {
          //do stuff with the script
        };
        script.src = xz['exceltotable-style2'];

        document.head.appendChild(script);
      }
    },
    handleOutsideClick(e) {
      this.show = false;
    },
    addColumnLeft(a) {
      let { activeCell } = this.$parent.$refs.grid;
      if (typeof activeCell.columnIndex == 'undefined') return;
      let newCells = this.$store.state.grid.data.map((ee) => [
        ...ee.slice(0, activeCell.columnIndex),
        '',
        ...ee.slice(activeCell.columnIndex),
      ]);
      this.$store.commit('updateGrid', newCells);
      this.$parent.$refs.grid.setActiveCell(
        activeCell.columnIndex + 1,
        activeCell.rowIndex,
      );
      this.$parent.$refs.grid.refresh();
      this.$parent.$refs.grid.selectNone();
      // this.$parent.$refs.grid.activeCell = activeCell;
    },
    addColumnRight(a) {
      let { activeCell } = this.$parent.$refs.grid;
      if (typeof activeCell.columnIndex == 'undefined') return;
      let newCells = this.$store.state.grid.data.map((ee) => [
        ...ee.slice(0, activeCell.columnIndex + 1),
        '',
        ...ee.slice(activeCell.columnIndex + 1),
      ]);
      this.$store.commit('updateGrid', newCells);

      this.$parent.$refs.grid.setActiveCell(
        activeCell.columnIndex,
        activeCell.rowIndex,
      );
      this.$parent.$refs.grid.refresh();
      this.$parent.$refs.grid.selectNone();
    },
    addRow() {
      let { activeCell } = this.$parent.$refs.grid;
      if (typeof activeCell.columnIndex == 'undefined') return;
      // add extra row below the current row index
      const { rowIndex } = activeCell;
      let newCells = [];
      for (let i = 0; i < this.$store.state.grid.data.length; i++) {
        newCells.push(this.$store.state.grid.data[i]);
        if (i === rowIndex) {
          newCells.push(Array(this.$store.state.grid.data[i].length).fill(''));
        }
      }
      this.$store.commit('updateGrid', newCells);
      this.$parent.$refs.grid.setActiveCell(
        activeCell.columnIndex,
        activeCell.rowIndex + 1,
      );
    },
    addRowAbove() {
      let { activeCell } = this.$parent.$refs.grid;
      if (typeof activeCell.columnIndex == 'undefined') return;
      // add extra row above the current row index
      const { rowIndex } = activeCell;
      let newCells = [];

      for (let i = 0; i < this.$store.state.grid.data.length; i++) {
        if (i === rowIndex) {
          newCells.push(Array(this.$store.state.grid.data[i].length).fill(''));
        }
        newCells.push(this.$store.state.grid.data[i]);
      }
      this.$store.commit('updateGrid', newCells);
      this.$parent.$refs.grid.setActiveCell(
        activeCell.columnIndex,
        activeCell.rowIndex + 1,
      );
    },
  },
  props: {
    color: String,
    animation: String,
    styles: Array,
  },
};
</script>
