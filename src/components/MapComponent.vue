<template>
  <div id="map-container"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

declare const AMap: any

const initMap = () => {
  try {
    const map = new AMap.Map('map-container', {
      zoom: 11,
      center: [116.397428, 39.90923]
    })
    map.plugin(['AMap.ToolBar'], () => {
      map.addControl(new AMap.ToolBar())
    })
  } catch (error) {
    console.error('地图初始化失败:', error)
  }
}

onMounted(() => {
  if (typeof AMap !== 'undefined') {
    initMap()
  } else {
    console.error('高德地图API未正确加载')
  }
})
</script>

<style scoped>
#map-container {
  width: 100%;
  height: 600px;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
</style>