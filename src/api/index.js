class APIClient {
  constructor() {
    this.hostname = 'http://localhost:4567';
  }

  async getCurrentWeather() {
    const response = await fetch(`${this.hostname}/insight_weather`);
    return response.json();
  }

  async getWeatherCards() {
    const response = await fetch(`${this.hostname}/insight_weather`);
    return response.json();
  }
}

const apiClient = new APIClient();

export default apiClient;
