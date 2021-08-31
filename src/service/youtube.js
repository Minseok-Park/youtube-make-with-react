class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  mostPopular() {
    const response = this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 28,
        regionCode: "KR",
      },
    });

    return response.data.items;
  }
}

export default Youtube;
