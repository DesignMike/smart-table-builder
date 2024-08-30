<template>
  <span class="toolbar-tool mr-2">
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
          d="M3,5v14h18V5H3z M8.33,17H5V7h3.33V17z M13.67,17h-3.33V7h3.33V17z M19,17h-3.33V7H19V17z"
        />
        *
      </svg>
      <span>Column</span>
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
          class="flex flex-col list-none overflow-hidden rounded-lg"
        >
          <button
            class="flex text-gray-900 bg-white py-2 px-4 hover:bg-gray-300"
            @click="addColumnRight"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.91683 2.08333C8.35886 2.08333 8.78278 2.25893 9.09534 2.57149C9.4079 2.88405 9.5835 3.30797 9.5835 3.75L9.5835 17.0833C9.5835 17.5254 9.4079 17.9493 9.09534 18.2618C8.78278 18.5744 8.35886 18.75 7.91683 18.75H2.0835L2.0835 17.0833H3.75016L3.75016 13.75H2.0835L2.0835 12.0833H3.75016L3.75016 8.75H2.0835L2.0835 7.08333H3.75016L3.75016 3.75H2.0835L2.0835 2.08333H7.91683ZM7.91683 17.0833L7.91683 13.75H5.41683L5.41683 17.0833H7.91683ZM7.91683 12.0833L7.91683 8.75L5.41683 8.75V12.0833H7.91683ZM7.91683 3.75L5.41683 3.75L5.41683 7.08333L7.91683 7.08333L7.91683 3.75ZM11.2502 11.25V9.58333H13.7502V7.08333H15.4168V9.58333L17.9168 9.58333V11.25H15.4168V13.75L13.7502 13.75V11.25H11.2502Z"
                fill="#4B5563"
              />
            </svg>
            <span class="mr-2" />
            <span>Add Column Right</span>
          </button>
          <button
            class="flex bg-white text-gray-900 py-2 px-4 hover:bg-gray-300"
            @click="addColumnLeft"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0835 1.25033C11.6414 1.25033 11.2175 1.42592 10.905 1.73848C10.5924 2.05104 10.4168 2.47497 10.4168 2.91699L10.4168 16.2503C10.4168 16.6924 10.5924 17.1163 10.905 17.4288C11.2175 17.7414 11.6414 17.917 12.0835 17.917H17.9168V16.2503H16.2501V12.917H17.9168V11.2503H16.2501V7.91699H17.9168V6.25033H16.2501V2.91699H17.9168V1.25033H12.0835ZM12.0835 16.2503V12.917H14.5835V16.2503H12.0835ZM12.0835 11.2503L12.0835 7.91699L14.5835 7.91699V11.2503H12.0835ZM12.0835 2.91699L14.5835 2.91699L14.5835 6.25033L12.0835 6.25033L12.0835 2.91699ZM8.75014 10.417V8.75033H6.25014V6.25033H4.58348V8.75033L2.08348 8.75033V10.417H4.58348V12.917L6.25014 12.917V10.417H8.75014Z"
                fill="#4B5563"
              />
            </svg>
            <span class="mr-2" />
            <span>Add Column Left</span>
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
  props: {
    color: String,
    animation: String,
    styles: Array,
  },
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
      let newCells = this.$store.state.grid.data.map((ee) => {
        return [
          ...Object.values(ee).slice(0, activeCell.columnIndex),
          '',
          ...Object.values(ee).slice(activeCell.columnIndex),
        ];
      });
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
      let newCells = this.$store.state.grid.data.map((ee) => {
        return [
          ...Object.values(ee).slice(0, activeCell.columnIndex + 1),
          '',
          ...Object.values(ee).slice(activeCell.columnIndex + 1),
        ];
      });
      this.$store.commit('updateGrid', newCells);

      this.$parent.$refs.grid.setActiveCell(
        activeCell.columnIndex,
        activeCell.rowIndex,
      );
      this.$parent.$refs.grid.refresh();
      this.$parent.$refs.grid.selectNone();
    },
  },
};
</script>
