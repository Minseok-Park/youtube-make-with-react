class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
    this.videoList = [];
    this.channels = {};
  }

  // 유튜브 비디오 목록 리스트
  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 28,
        regionCode: "KR",
      },
    });

    this.videoList = [];
    response.data.items.map((video) => {
      return this.videoList.push(this.channel(video.snippet.channelId, video));
    });

    return Promise.all(this.videoList).then((values) => values);
  }

  //유튜브 검색
  async search(query) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        q: query,
        maxResults: 28,
        type: "video",
      },
    });

    const newVideos = [];

    this.videoList = [];

    response.data.items.map((item) => {
      return newVideos.push({ ...item, id: item.id.videoId });
    });

    newVideos.map((video) => {
      return this.videoList.push(this.channel(video.snippet.channelId, video));
    });

    return Promise.all(this.videoList) //
      .then((values) => values);
  }

  // 유튜브 채널
  async channel(channelId, video) {
    const response = await this.youtube.get("channels", {
      params: {
        part: "snippet, statistics",
        id: channelId,
      },
    });

    if (response.data.items[0].hasOwnProperty("snippet")) {
      response.data.items[0].channelInfo = response.data.items[0].snippet;
      delete response.data.items[0].snippet;
    }

    return (this.channel = { ...response.data.items[0], ...video });
  }
}
