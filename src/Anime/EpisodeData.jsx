// EpisodeData.jsx

// Episode template that can be reused
export const episodeTemplate = {
    id: null,
    title: "",
    embedCode: "",
  };
  
  // Function to generate a specified number of episodes for a series
  export const generateEpisodes = (seriesName, episodeCount, embedCodeGenerator) => {
    const episodes = [];
    
    for (let i = 1; i <= episodeCount; i++) {
      episodes.push({
        ...episodeTemplate,
        id: i,
        title: `${seriesName} - Episode ${i}`,
        embedCode: embedCodeGenerator(i),
      });
    }
  
    return episodes;
  };
  