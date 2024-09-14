import React, { useState } from 'react';

const episodes = [
    { id: 1, title: "Episode 1", embedCode: `<iframe src="https://drive.google.com/file/d/1_ymb06sYsgMthf5PpHjWmuPLwwKZyzL6/preview" width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },
    { id: 2, title: "Episode 2", embedCode: `<iframe src="https://drive.google.com/file/d/1uN--fhBz8IoVVKTYKZG3N81w2Nn_RofU/preview" width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },
    { id: 3, title: "Episode 3", embedCode: `<iframe src="https://drive.google.com/file/d/1J_yMRL-T932YPlyW5IvJfhcgbM_-yXOC/preview" width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },
    { id: 4, title: "Episode 4", embedCode: `<iframe src="https://drive.google.com/file/d/1al_6lZU_MZJZvJrkOnHR-feA3NVrBbQf/preview" width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },
    { id: 5, title: "Episode 5", embedCode: `<iframe src="https://drive.google.com/file/d/1pbrP36P7kgAe0PwijpwMEtda6P_ei4OM/preview" width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },
    { id: 6, title: "Episode 6", embedCode: `<iframe src="https://drive.google.com/file/d/1gyOEy-XksVBZzq8YGFXDCrUbmK99yC_E/preview" width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },
    { id: 7, title: "Episode 7", embedCode: `<iframe src="https://drive.google.com/file/d/1heqRvX1XJx21PpDMci50IiOE73KJjqIo/preview" width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },
    { id: 8, title: "Episode 8", embedCode: `<iframe src="https://drive.google.com/file/d/1BYT63_wK-7aQxyOwYy1TpzRDLfWkriTc/preview" width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },
    { id: 9, title: "Episode 9", embedCode: `<iframe src="https://drive.google.com/file/d/1BYT63_wK-7aQxyOwYy1TpzRDLfWkriTc/preview" width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },
    { id: 10, title: "Episode 10", embedCode: `<iframe src="https://drive.google.com/file/d/1DcB187HY2NzIR1PhPZ3SzDzJNw5jfLVj/preview" width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },
    { id: 11, title: "Episode 11", embedCode: `<iframe src="https://drive.google.com/file/d/1aW1V_lS_4TefDFDK8uGlIz7X9rejQk2L/preview" width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },
    { id: 12, title: "Episode 12", embedCode: `<iframe src="https://drive.google.com/file/d/1vxvaBVD444BbAYkiKX4Kl6bfPH-ezpYj/preview" width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },
    ];

const ThatTimeIGotReincarnatedasaSlime = () => {
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

export default ThatTimeIGotReincarnatedasaSlime;
