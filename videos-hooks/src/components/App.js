import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import useVideos from '../hooks/useVideos';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import './App.css';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('lo-fi')

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])

  return (
    <div className="ui container">
      <SearchBar search={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo}/>
          </div>
          <div className="five wide column">
            <VideoList 
              onVideoSelect={setSelectedVideo} 
              videos={videos} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
