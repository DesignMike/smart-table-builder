<template>
	<div class="dropdown-wrapper relative">
		<button
			class="border-2 rounded-lg text-gray-900 font-bold py-2 px-4 whitespace-no-wrap rounded transition duration-300"
			v-on:click="show = !show"
			:class="'border-' + color"
		>
			<span>{{ styles[0] }}</span>
			<div class="inline-block h-5 w-5 rounded-full bg-brand">
				<svg
					class="text-sm text-white"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M11.0001 3.67157L13.0001 3.67157L13.0001 16.4999L16.2426 13.2574L17.6568 14.6716L12 20.3284L6.34314 14.6716L7.75735 13.2574L11.0001 16.5001L11.0001 3.67157Z"
						fill="currentColor"
					/>
				</svg>
			</div>
		</button>
		<transition :name="animation">
			<div
				:class="'bg-' + color"
				class="dropdown-menu text-white mt-1 rounded-lg absolute z-10 shadow-lg w-40 max-w-xs"
				v-if="show"
			>
				<ul
					v-click-outside="handleOutsideClick"
					class="list-none overflow-hidden rounded-lg"
				>
					<li class="mb-0" v-for="(style, index) in styles" :key="index">
						<a
							href="javascript:void(0)"
							@click="handleStyleSwitch(style)"
							class="flex py-2 px-4 transition duration-300"
							:class="
								'hover:bg-' +
								color +
								'-800' +
								' ' +
								'theme-' +
								color +
								' ' +
								'hover:text-white'
							"
							>{{ style }}</a
						>
					</li>
				</ul>
			</div>
		</transition>
	</div>
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
	},
	props: {
		color: String,
		animation: String,
		styles: Array,
	},
};
</script>
