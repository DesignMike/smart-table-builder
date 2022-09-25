<template>
	<vue-final-modal
		v-slot="{ params, close }"
		v-bind="$attrs"
		classes="flex justify-center items-center"
		content-class="relative flex flex-col max-h-full mx-4 p-4 border dark:border-gray-800 rounded bg-white dark:bg-gray-900"
		v-on="$listeners"
	>
		<span class="mr-8 text-2xl font-bold">
			<slot name="title"></slot>
		</span>
		<div class="flex-grow overflow-y-auto">
			<slot v-bind:params="params"></slot>
		</div>
		<div class="flex-shrink-0 flex justify-center items-center pt-4">
			<button
				@click="$emit('confirm', close)"
				class="tab-item bg-white inline-block py-2 px-4 font-semibold border-l border-t border-r rounded-t text-blue-700 active"
			>
				Confirm
			</button>
			<button
				@click="$emit('cancel', close)"
				class="tab-item bg-white inline-block py-2 px-4 font-semibold border-l border-t border-r rounded-t text-red-700 active"
			>
				Cancel
			</button>
		</div>
		<button class="absolute top-0 right-0 mt-2 mr-2" @click="close">
			<close-icon></close-icon>
		</button>
	</vue-final-modal>
</template>

<script>
import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal';
import CloseIcon from 'icons/Close';
// Vue.component('close-icon', Close);
export default {
	name: 'VTailwindModal',
	inheritAttrs: false,
	components: {
		VueFinalModal,
		ModalsContainer,
		CloseIcon,
	},
};
</script>
