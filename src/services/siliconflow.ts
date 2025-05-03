import axios from 'axios';

const API_KEY = import.meta.env.VITE_SILICONFLOW_KEY;

export const generateItinerary = async (params: {
  city: string;
  days: number;
  preference: string;
  attractions: string[];
  accommodation: string;
  transportation: string;
}) => {
  const response = await axios.post(
    'https://api.siliconflow.cn/v1/chat/completions',
    {
      model: 'deepseek-ai/DeepSeek-V2.5',
      messages: [{
        role: 'user',
        content: `请为${params.days}天${params.city}旅行生成详细行程，住宿要求：${params.accommodation}，交通方式：${params.transportation}，需求：${params.preference}，推荐景点：${params.attractions.join('，')}`
      }],
      temperature: 0.7
    },
    {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    }
  );
  return response.data.choices[0].message.content;
};