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
					d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,5v3H5V5H19z M19,10v4H5v-4H19z M5,19v-3h14v3H5z"
				/>
			</svg>
			<span>Rows</span>
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
					<button @click="addRow" class="bg-white py-2 px-4 hover:bg-gray-800">
						<img
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABA0lEQVRIie3TMUoDURAG4C9qLdiInsBSbSUeIJrghewk4Ak8hpWWMbmAtinsTClYGIllLPIWHi9vs4bdLvlhYPnf/PPPDLNssVG4wgTzmjFBJ2fQRPEiPoqirchgXmP6HFqw03DRJezV1H/hAU94xy9O0Mslr7vnZ+yv0806xR+xG3Q3GOEnxLDuBJ84DJr7FXn91OC/Z3obdR7zF2gnXDc26Fjcb5XBWcgfJXxuEy+5VcVJqzCNOk9RTPLdxH+Qq9HKcM4xs7ySGU4z+UPVKxrEggOMMwbj8Jail+S1cZlw16noODEZB64M/UxDRdyViY7whtfwXYWuxbVMQwxynW9Rij+5ga2gTkQyZAAAAABJRU5ErkJggg=="
						/>
					</button>
					<button
						@click="addRowAbove"
						class="bg-white py-2 px-4 hover:bg-gray-800"
					>
						<img
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABEElEQVRIid3TMUoDQRgF4C9qLdho8AKWppZ4gGiCF7ITwRN4DCstY3ICKyGInSkFCyOx1CKzsA4Ts5tZLHzwmn/+ee/Nv//yH9HGQ2C7afE9POIr8An7TYnvYFISLzgJZ9noYJ4wmOOwCYMyCvFsbDQhUtXgBFM/k8fjqsIpeimz6Rpiy/hSiLaitE2ixR98g63M+2+4xi2e8YkDDFLNded8h+06aeqI32Az3DvDGB+Bo9wXvGI33Ln6pe8yNqi6puel5OX6EbpRrV826Fns7yqDTugfR/XUJO5To6qKWSl5jOIl7038BymNVqJWGyOrRzTMMRhEYl0cR7XTHAMWq7hsGS5yxQv0LbZlFjhUSv4Nt4WrpM/C+VsAAAAASUVORK5CYII="
						/>
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
					debugger;
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
			debugger;
		},
		addRowAbove() {
			debugger;
		},
	},
	props: {
		color: String,
		animation: String,
		styles: Array,
	},
};
</script>
