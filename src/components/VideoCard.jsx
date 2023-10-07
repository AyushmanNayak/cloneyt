import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia, styled } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from '../utils/constants';

const HoverCard = styled(Card)({
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
    // Add any other styles for the hover effect here
  },
});

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  // Define link URLs conditionally
  const videoLink = videoId ? `/video/${videoId}` : `/video/demoVideoUrl`;
  const channelLink = snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl;

  return (
    <HoverCard
      sx={{
        width: { xs: '100%', sm: '358px', md: '320px' },
        boxShadow: '3',
        borderRadius: 0,
      }}
    >
      <Link to={videoLink}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: { xs: '100%', sm: '358px' }, height: 180, backgroundColor : "#696969" }}   
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#000', height: '106px'}}>
        <Link to={videoLink}>
          <Typography variant="subtitle1" fontWeight="bold" color="white">
            {snippet?.title.slice(0, 60) + '...'}
          </Typography>
        </Link>
        <Link to={channelLink}>
          <Typography variant="subtitle2" color="textSecondary" color="gray">
            {snippet?.channelTitle}
            <YouTubeIcon sx={{ fontSize: 18, ml: '5px', mt: '5px', color: 'textSecondary' }} />
          </Typography>
        </Link>
      </CardContent>
    </HoverCard>
  );
};

export default VideoCard;
