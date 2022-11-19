import { useParams,useNavigate,useState } from "react-router-dom";
import YouTube, { YouTubeProps } from 'react-youtube';
import React from "react";

export default function Video(){
    const {id}=useParams()
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    return <YouTube videoId={id}   />;
}