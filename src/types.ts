export interface MessageType {
  type: 'user' | 'bot';
  content: string;
}

export interface ApiResponse {
  text: string;
  visualizations: {
    barChart?: any;
    lineChart?: any;
    pieChart?: any;
    map?: boolean;
  };
}