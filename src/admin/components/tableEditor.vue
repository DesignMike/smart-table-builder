<template>
    
<div>
    <ul class="flex main-nav border-b tab-buttons">
        <li class="mr-1">
            <button data-tab-index="0" @click="handleTabSwitch" v-bind:class="[tabNavigation == 0 ? tabActiveClass : tabInactiveClass]" class="tab-item bg-white inline-block py-2 px-4 font-semibold">Excel Sheet</button>
        </li>
        <li class="mr-1">
            <button data-tab-index="1" @click="handleTabSwitch" v-bind:class="[tabNavigation == 1 ? tabActiveClass : tabInactiveClass]" class="tab-item bg-white inline-block py-2 px-4 font-semibold">Table</button>
        </li>
    </ul>
    <div v-if="tabNavigation == 0">
        <div  class="px-5 py-3 w-full h-full">
            <canvas-datagrid v-if="grid.data.length" v-bind:style="{ width: canvasWidth, height: canvasHeight }" @contextmenu="handleRightClick" @sortcolumn="handleGridEvent" ref="grid" :data.prop="grid.data"></canvas-datagrid>
        </div>
    </div>
    <div v-if="tabNavigation == 1">
        <div  class="px-5 py-3">
            <table-preview v-if="grid.data.length" :cellItems="grid.data" :tableTitle="tableTitle"></table-preview>
        </div>
    </div>
</div>
</template>