<template>
  <el-card class="itinerary-card">
    <div class="card-header">
      <h3>{{ days }}天行程概览</h3>
    </div>
    
    <div class="days-container">
      <el-card 
        v-for="(day, index) in itinerary"
        :key="index"
        class="day-card"
      >
        <div class="card-header">
          <h4>{{ day.title }}</h4>
        </div>
        <pre class="day-content">{{ day.content }}</pre>
      </el-card>
    </div>

    <div class="info-section">
      <div class="info-item">
        <span class="label">住宿推荐：</span>
        <el-tag type="success" effect="dark">{{ accommodation }}</el-tag>
      </div>
      <div class="info-item">
        <span class="label">交通方案：</span>
        <el-tag type="primary" effect="dark">{{ transportation }}</el-tag>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { ElCard, ElTag, ElTimeline, ElTimelineItem } from 'element-plus'

defineProps({
  itinerary: Array,
  days: Number,
  accommodation: String,
  transportation: String
})
</script>

<style scoped>
.itinerary-card {
  margin: 20px 0;
  border-radius: 12px;
}

.card-header {
  border-bottom: 1px solid #ebeef5;
  padding-bottom: 15px;
  margin-bottom: 15px;
}

.days-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.day-card {
  margin-bottom: 20px;
  border-radius: 8px;
}

.day-card:last-child {
  margin-bottom: 0;
}

.day-content {
  white-space: pre-wrap;
  line-height: 1.6;
  font-family: inherit;
}

.day-content {
  padding: 10px;
  background: #f8f9fa;
  border-radius: 6px;
  line-height: 1.6;
}

.info-section {
  margin-top: 25px;
  padding-top: 20px;
  border-top: 1px solid #ebeef5;
}

.info-item {
  display: flex;
  align-items: center;
  margin: 12px 0;
}

.label {
  font-weight: 500;
  margin-right: 15px;
  min-width: 80px;
}
</style>