import axios from 'axios';

// This is a mock API function. In a real application, you would replace this with actual API calls.
export const generateResponse = async (message) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Mock response based on user input
  if (message.toLowerCase().includes('population')) {
    return {
      text: "According to recent estimates, the populations of some major countries are as follows: USA (331 million), China (1.439 billion), India (1.380 billion), Indonesia (273 million), and Pakistan (220 million). These figures demonstrate the significant population differences between countries, with China and India having the largest populations globally. Would you like more information on global population trends?",
      visualizations: {
        barChart: {
          labels: ['USA', 'China', 'India', 'Indonesia', 'Pakistan'],
          datasets: [{
            label: 'Population (millions)',
            data: [331, 1439, 1380, 273, 220],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          }]
        }
      }
    };
  } else if (message.toLowerCase().includes('temperature')) {
    return {
      text: "Over the past week, we've observed varying temperatures. Starting from Monday, the daily average temperatures (in °C) were: 22, 24, 27, 23, 20, 18, and 21. We can see a peak in temperature mid-week, followed by a cooler weekend. This pattern is common in many regions due to weather systems moving through. Would you like to know more about factors affecting daily temperature changes?",
      visualizations: {
        lineChart: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
            label: 'Temperature (°C)',
            data: [22, 24, 27, 23, 20, 18, 21],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        }
      }
    };
  } else if (message.toLowerCase().includes('market share')) {
    return {
      text: "The current smartphone market share shows a diverse landscape. Apple leads with 20% of the market, closely followed by Samsung at 19%. Xiaomi holds 13%, while Oppo has 9%. The remaining 39% is divided among various other brands. This distribution highlights the competitive nature of the smartphone industry, with no single brand dominating the market entirely. Would you like to discuss the factors influencing these market shares?",
      visualizations: {
        pieChart: {
          labels: ['Apple', 'Samsung', 'Xiaomi', 'Oppo', 'Others'],
          datasets: [{
            data: [20, 19, 13, 9, 39],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
            ],
          }]
        }
      }
    };
  } else if (message.toLowerCase().includes('map')) {
    return {
      text: "I've provided a world map for your reference. This map shows the general outlines and positions of countries across the globe. Maps like this are useful for understanding geographical relationships between nations, continent shapes, and relative sizes of countries. Is there a specific region or geographical feature you'd like to know more about?",
      visualizations: {
        map: true
      }
    };
  } else {
    return {
      text: "I apologize, but I don't have specific visualizations for that query. However, I'd be happy to provide information on a wide range of topics. Could you please specify what kind of information you're looking for? For example, I can discuss topics related to science, history, current events, or provide general knowledge on various subjects. Feel free to ask about any topic you're interested in, and I'll do my best to provide a helpful response.",
      visualizations: {}
    };
  }
};