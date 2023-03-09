import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    /**
     * It fetches the channel details and the videos from the API and sets the state.
     */
    const fetchResults = async () => {
      /* Fetching the channel details and the videos from the API and sets the state. */
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]);

      /* Fetching the videos from the API and sets the state. */
      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );
      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
            zIndex: 10,
            height: '225px',
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
        <Box display="flex" p="2">
          <Box sx={{ mr: { sm: '100px' } }} />
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
