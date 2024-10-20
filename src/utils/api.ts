import axios from 'axios';
import { ApiResponse } from '../types';

// This is a mock API function. In a real application, you would replace this with actual API calls.
export const generateResponse = async (message: string): Promise<ApiResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Mock response based on user input
  if (message.toLowerCase().includes('population')) {
    return {
      text: "Here's a bar chart showing population data for some countries.",
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
      text: "Here's a line chart showing average temperatures over the past week.",
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
      text: "Here's a pie chart showing market share for smartphone brands.",
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
      text: "Here's a world map for your reference.",
      visualizations: {
        map: true
      }
    };
  } else {
    return {
      text: "I'm sorry, I don't have specific visualizations for that query. Is there a particular type of data you're interested in seeing visualized?",
      visualizations: {}
    };
  }
};