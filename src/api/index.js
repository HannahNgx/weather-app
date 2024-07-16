class APIClient {
  constructor() {
    this.hostname = 'http://localhost:4567';
  }

  async getCurrentTemp() {
    const response = await fetch(`${this.hostname}/insight_weather`);
    return response.json();
  }

  async getPastTemps() {
    const response = await fetch(`${this.hostname}/insight_weather`);
    return response.json();
  }
}

const apiClient = new APIClient();

export default apiClient;
