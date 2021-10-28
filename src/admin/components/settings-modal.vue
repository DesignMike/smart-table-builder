<template>
<div class="modal-container">
<div
  class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
  id="modal-example-small">
  <div class="relative w-auto my-6 mx-auto max-w-6xl">
    <!--content-->
    <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none flex-auto" style="height: 75vh;width: 100vh">
      <!--header-->
      <div class="flex items-start justify-between p-5 pb-0 border-b border-solid border-gray-200 rounded-t">
        <h3 class="text-3xl font-semibold">
          Table Settings
        </h3>
        <button
          class="p-1 ml-auto bg-transparent border-0 text-gray-300 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
          onclick="toggleModal('modal-example-small')">
          <span class="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none">
            <i class="fas fa-times"></i>
          </span>
        </button>
      </div>
      <!--body-->
      <div class="relative p-6 flex-auto overflow-hidden flex flex-grow-default flex-col pt-0">
        <fonts-select />
      </div>
      <!--footer-->
      <div class="flex items-center justify-end p-6 border-t border-solid border-gray-200 rounded-b">
        <button
          class="text-purple-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button" onclick="toggleModal('modal-example-small')">
          Close
        </button>
        <button
          class="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button" onclick="toggleModal('modal-example-small')">
          Save Changes
        </button>
      </div>
    </div>
  </div>
</div>
<div class="opacity-25 fixed inset-0 z-40 bg-black" id="modal-example-small-backdrop"></div>
</div>
</template>

<script>
import FontsSelect from './FontsSelect.vue'
export default {
  data() {
    return {
      fontSettings: '',
      isLoading: true,
      googleFontsMetadata: []
    }
  },
  mounted() {
    jQuery.ajax({
      url: wp.ajax.settings.url + '?action=sprdsh_get_gfonts_meta',
      success: function(data) {
        debugger;
        this.googleFontsMetadata = JSON.parse(data);
      }
    });
  },
  components: {
    FontsSelect
  }
}

</script>