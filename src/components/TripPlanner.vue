<template>
  <div class="trip-planner">
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label>目的地城市：</label>
        <input v-model="formData.city" required />
      </div>
      <div class="form-group">
        <label>旅行天数：</label>
        <select v-model="formData.days" required>
          <option v-for="day in 7" :value="day">{{ day }}天</option>
        </select>
      </div>
      <div class="form-group">
        <label>住宿偏好：</label>
        <select v-model="formData.accommodation">
          <option value="经济型">经济型酒店</option>
          <option value="舒适型">舒适型酒店</option>
          <option value="豪华型">豪华型酒店</option>
        </select>
      </div>
      <div class="form-group">
        <label>交通方式：</label>
        <select v-model="formData.transportation">
          <option value="公共交通">公共交通</option>
          <option value="自驾租车">自驾租车</option>
          <option value="包车服务">包车服务</option>
        </select>
      </div>
      <div class="form-group">
        <label>旅行偏好：</label>
        <textarea 
          v-model="formData.preference"
          placeholder="例如：想多了解人文历史，喜欢自然风光"
        />
      </div>
      <button type="submit">生成行程</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  city: '',
  days: 3,
  preference: ''
})

const emit = defineEmits(['submit'])

const handleSubmit = () => {
  emit('submit', formData.value)
}
</script>

<style scoped>
.trip-planner {
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

input, select, textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  background: #646cff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>