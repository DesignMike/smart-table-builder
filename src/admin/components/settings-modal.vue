<template>
<div class="modal-container">
<div
  class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
  id="modal-example-small">
  <div class="relative w-auto my-6 mx-auto max-w-6xl">
    <!--content-->
    <div class="border-0 rounded-lg shadow-lg relative flex flex-col p-12 pb-0 w-full bg-white outline-none focus:outline-none flex-auto" style="height: 75vh;width: 100vh">
      <!--header-->
      <div class="flex items-start justify-between border-b border-solid border-gray-200 rounded-t">
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
      <div v-if="!isLoading" class="relative grid grid-cols-3 flex pt-0">
        <fonts-select :options="getFontFamilyList(this)" @updateFont="handleFontUpdate" context="fontFamily" />
        <fonts-select :options="getSizes()" context="fontSize" />
        <fonts-select :options="findFontFamilyWeights()" :key="componentKey" context="fontWeight" ref="weightDropDown" />
      </div>
      <label v-for="obj in Object.keys(settingsItems)" :key="obj" v-bind:style="{ display: evaluateDeps(obj) }" class="inline-flex mt-2 items-center">
        <input type="checkbox" class="form-checkbox" v-if="settingsItems[obj].type == 'boolean'" v-model="settingsItemProps[obj]" />
        <span v-if="settingsItems[obj].type == 'color'" v-bind:style="{ backgroundColor: settingsItemProps[obj] + ' !important' }">&nbsp;&nbsp;&nbsp;</span>
        <span class="ml-2 font-semibold">{{ settingsItems[obj].title }}</span>
      </label>
      <p v-if="isLoading" class="font-semibold text-center text-gray">Please Wait</p>
      <!--footer-->
      <div class="flex items-center justify-end p-6 border-t border-solid border-gray-200 rounded-b">
        <button
          class="text-purple-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button" @click="handleModalClose()">
          Close
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
      isLoading: true,
      googleFontsMetadata: [],
      componentKey: 0,
      settingsItems: {
        addBorderToTableCells: {
          type: 'boolean',
          default: false,
          title: "Add border to table cells",
          dependencies: []
        },
        tableHeaderBg: {
          type: 'color',
          default: 'gray',
          title: "Table Header background color",
          dependencies: []
        },
        tableCellsBg: {
          type: 'color',
          default: 'gray',
          title: "Add borders to table cells",
          dependencies: []
        },
        tableCellsBorderBg: {
          type: 'color',
          default: 'gray',
          title: "Table cell border colors",
          dependencies: ['addBorderToTableCells']
        }
      }
    }
  },
  mounted() {
    const updateGoogleFontsMetaData = (data) => {
      this.googleFontsMetadata = JSON.parse(data)
      this.isLoading = false;
    }
    jQuery.ajax({
      url: wp.ajax.settings.url + '?action=sprdsh_get_gfonts_meta',
      success: updateGoogleFontsMetaData
    });
  },
  computed: {
    settingsItemProps: {
      get: function () {
        return this.$store.state.settingsItemProps;
      },
      set: function (data) {
        debugger;
      }
    },
    getBool: {
      get: function() {
        return true;
      },
      set: function() {
        return false;
      }
    }
  },
  methods: {
    handleChkbx: (evt,obj, settingsItemProps, store) => {
      // let currentSettings = this.settingsItemProps;
      debugger;
      settingsItemProps.set(obj, evt.target.checked);
      // this.settingsItemProps = currentSettings;
      // this.$store.commit('');
    },
    getFontFamilyList: (proxy) => {
      return proxy.googleFontsMetadata.familyMetadataList.map(e => ({value: e.family, text: e.family}));
    },
    findFontFamilyWeights() {
      let family = this.$store.state.fontSettings[0];
      let weights = this.googleFontsMetadata.familyMetadataList.filter(e => e.family == family).map(e => Object.keys(e.fonts))[0];
      return weights.map(e => ({text: e, value: e}));
    },
    getSizes() {
      return [...Array(80).keys()].map(e => ({text: e+' px', value: e+' px'}));
    },
    handleFontUpdate(family) {
      // this.$refs.weightDropDown.options = this.findFontFamilyWeights();
      // // this.$refs.weightDropDown.inputText = this.findFontFamilyWeights()[0].text;
      // // this.$refs.weightDropDown.searchText = this.findFontFamilyWeights()[0].text;
      // this.$refs.weightDropDown.searchText = this.findFontFamilyWeights()[0].text;
      this.componentKey = !this.componentKey;
    },
    handleModalClose() {
      this.$store.commit("setSettingsModalStatus", false);
      this.$parent.mountFonts();
    },
    evaluateDeps(obj) {
      let depResults = this.settingsItems[obj].dependencies.map(dep => Boolean(this.settingsItemProps[dep]));
      return (depResults.length ? depResults.some(e => e == true) : true) ? 'inline' : 'none';
    }
  },
  components: {
    FontsSelect
  }
}

</script>