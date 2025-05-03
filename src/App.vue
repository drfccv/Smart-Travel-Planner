<script setup lang="ts">
import { ref } from 'vue'
import MapComponent from './components/MapComponent.vue'
import TripPlanner from './components/TripPlanner.vue'
import { getScenicSpots, getWeather, ScenicSpot } from './services/amap'
import { generateItinerary } from './services/siliconflow'
import ItineraryCard from './components/ItineraryCard.vue'

const itinerary = ref<{
  accommodation?: string;
  transportation?: string;
} | null>(null)

const handleSubmit = async (formData: any) => {
  try {
    const [scenicSpots, weather] = await Promise.all([
      getScenicSpots(formData.city),
      getWeather(formData.city)
    ]);

    const itineraryText = await generateItinerary({
      ...formData,
      attractions: scenicSpots.map((s: ScenicSpot) => s.name)
    });

    // 按##分割每天行程
    const dailyItinerary = itineraryText.split(/##+/g)
      .filter(day => day.trim())
      .map(day => {
        const [title, ...content] = day.split('\n').filter(line => line.trim());
        return {
          title: title.replace(/[#-]/g, '').trim(),
          content: content.join('\n')
        };
      });

    itinerary.value = {
      ...formData,
      weather: `气温 ${weather.temperature}℃ ${weather.weather}`,
      dailyItinerary,
      spots: scenicSpots
    };
  } catch (error) {
    console.error('行程生成失败:', error);
  }
}
</script>

<template>
  <div class="container">
    <h1>智能旅行规划系统</h1>
    <TripPlanner @submit="handleSubmit" />
    <MapComponent />
    <div v-if="itinerary" class="result-container">
      <ItineraryCard 
        :itinerary="itinerary.dailyItinerary"
        :days="itinerary.days"
        :accommodation="itinerary.accommodation"
        :transportation="itinerary.transportation"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
}

.result-container {
  margin-top: 30px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}
</style>
