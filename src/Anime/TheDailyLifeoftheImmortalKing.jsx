import React, { useState } from 'react';

const episodes = [
  { id: 1, title: "Episode 1", embedCode: `<iframe src="https://drive.google.com/file/d/1hy2Am-3LOIMXobMjRyVxvNKaFJX-mk4U/preview" width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },
  { id: 2, title: "Episode 2", embedCode: `<iframe src="https://drive.google.com/file/d/1Xq_iOE8MfDuqfBwzcHyZu3Q-3McoL81X/preview" width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },
  { id: 3, title: "Episode 3", embedCode: `<iframe src="https://drive.google.com/file/d/18e2H47LrJgtY7lWGQDBAjF4W8Bqj6wal/preview" width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },
  { id: 4, title: "Episode 4", embedCode: `<iframe src="https://drive.google.com/file/d/1geO-RHjPaUj3u_bcPTz1qza2o1qTc_eA/preview"  width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },
  { id: 5, title: "Episode 5", embedCode: `<iframe src="https://drive.google.com/file/d/1cjadApJ4RTOvmRU03KBu1sc3n-nfcY3G/preview" width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },
  { id: 6, title: "Episode 6", embedCode: `<iframe src="https://drive.google.com/file/d/1uyg2_20dc4KW8BX3i5hxsgCdbAOHKYvB/preview" width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },
  { id: 7, title: "Episode 7", embedCode: `<iframe src="https://drive.google.com/file/d/1yTydjHCPrXSQGWqenXshkHdhWPZG2oFL/preview" width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },
  { id: 8, title: "Episode 8", embedCode: `<iframe src="https://drive.google.com/file/d/1CZf5TK53ClmRz-zP8LacHkTtwMMjw6i5/preview" width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },
  { id: 9, title: "Episode 9", embedCode: `<iframe src="https://drive.google.com/file/d/1nZbneLPeG3Dn1Vhlu7dUE5r_mpzFLH9x/preview" width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },
  { id: 10, title: "Episode 10", embedCode: `<iframe src="https://drive.google.com/file/d/1ryv5J2AsQXomXf1pYQzTlnx-fUEP7yhx/preview" width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },
  { id: 11, title: "Episode 11", embedCode: `<iframe src="https://drive.google.com/file/d/1BDRjn41MQBu5CPtpf55iqIpfwm8GGA45/preview" width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },
  { id: 12, title: "Episode 12", embedCode: `<iframe src="https://drive.google.com/file/d/1LSV71F0bp26F_EIYunyKc4AG1YLn6DrB/preview" width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },
  { id: 13, title: "Episode 13", embedCode: `<iframe src="https://drive.google.com/file/d/1ZcFhSfngB6v1U38nYiGxY2LkX4OdAu8v/preview"  width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },
  { id: 14, title: "Episode 14", embedCode: `<iframe src="https://drive.google.com/file/d/1cEKYIVm_P9GWOO54lrJ4RyQ2iyNnsDPS/preview" width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },
  { id: 15, title: "Episode 15", embedCode: `<iframe src="https://drive.google.com/file/d/1FI3zGdMWgmDYif-toySHCnV9wbAireM4/preview" width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },

  // Add more episodes as needed
];

const TheDailyLifeoftheImmortalKing = () => {
    const [currentEpisode, setCurrentEpisode] = useState(episodes[0]);
  
    return (
      <div className="relative w-full h-screen">
        
        {/* Header Section */}
  
        {/* Content Section with 10% Top Margin */}
        <div className="flex flex-grow absolute w-full" style={{ top: "10%" }}>
          
          {/* Left Side: Episode List */}
          <div className="w-1/5 bg-gray-900 p-4 overflow-y-auto">
            <h2 className="text-white text-lg mb-4">Episodes</h2>
            <div className="space-y-2">
              {episodes.map((episode, index) => (
                
                <button
                  key={episode.id}
                  className="w-20 text-left p-3 bg-black hover:bg-blue-500 text-white rounded"
                  onClick={() => setCurrentEpisode(episode)}
                  style={{ marginBottom: '8px' }} // Adds space between buttons
                >
                  <center>{index + 1} {/* Displays just the episode number */}</center>
                </button>
              ))}
            </div>
          </div>
  
          {/* Middle Section: Video Player */}
          <div className="w-4/5 bg-black flex justify-center items-center p-4">
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <div className="absolute top-0 left-0 w-full h-full" dangerouslySetInnerHTML={{ __html: currentEpisode.embedCode }} />
            </div>
          </div>
        </div>
      </div>
      
    );
  };
  
  export default TheDailyLifeoftheImmortalKing;
  