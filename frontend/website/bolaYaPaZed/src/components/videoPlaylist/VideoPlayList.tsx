import React from 'react';
import vidImage from '../../assets/images/video_img01.jpg';
import VideoCard from '../videoCard/VideoCard';
import VideoItem from './VideoItem';
import videoImg02 from '../../assets/images/video_img02.jpg';
import videoImg03 from '../../assets/images/video_img03.jpg';
import videoImg04 from '../../assets/images/video_img04.jpeg';

function VideoPlayList() {
  return (
    <div className='flex flex-col gap-8'>
      {/* main video */}
      <VideoCard
        img={vidImage}
        title={"Lionel Messi Scores again"}
        description={
          "Barcelona has beaten the opponent to the death, watch the video below."
        }
      />
      {/* playList videos */}
      <div>
        <VideoItem 
            video={videoImg02} 
            title={'ICT Analysis: Lowe matching top creators'} 
        />
        <VideoItem 
            video={videoImg03} 
            title={'ICT Analysis: Nkana football squard'} 
        />

        <VideoItem 
            video={videoImg04} 
            title={'Set pieces: patson daka can benefit from mwepu absence'} 
        />
      </div>
    </div>
  );
}

export default VideoPlayList;