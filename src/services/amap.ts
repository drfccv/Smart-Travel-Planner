import axios from 'axios';

export const AMAP_KEY = import.meta.env.VITE_AMAP_KEY;

export interface ScenicSpot {
  name: string;
  location: string;
  type: string;
  photos: string[];
}

export const getScenicSpots = async (city: string) => {
  const response = await axios.get(
    `https://restapi.amap.com/v3/place/text?keywords=景点&city=${city}&key=${AMAP_KEY}`
  );
  return response.data.pois.map((poi: any) => ({
    name: poi.name,
    location: poi.location,
    type: poi.type,
    photos: poi.photos?.map((p: any) => p.url) || []
  }));
};

export const getRoute = async (origin: string, destination: string) => {
  const response = await axios.get(
    `https://restapi.amap.com/v3/direction/driving?origin=${origin}&destination=${destination}&key=${AMAP_KEY}`
  );
  return {
    distance: response.data.route.paths[0].distance,
    duration: response.data.route.paths[0].duration
  };
};

export const getWeather = async (city: string) => {
  const response = await axios.get(
    `https://restapi.amap.com/v3/weather/weatherInfo?city=${city}&key=${AMAP_KEY}`
  );
  return response.data.lives[0];
};

export const getAccommodations = async (city: string) => {
  const response = await axios.get(
    `https://restapi.amap.com/v3/place/text?key=${AMAP_KEY}&keywords=酒店&city=${city}&types=060000`
  );
  return response.data.pois.map((p: any) => ({
    name: p.name,
    address: p.address,
    rating: p.rating || '暂无评分',
    price: p.biz_ext.cost || '价格未知'
  }));
};