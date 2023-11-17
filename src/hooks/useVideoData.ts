import { VideoResponseData } from './../api/types';
import { useEffect, useState } from 'react';
import { getBackgroundVideo } from '../api';

export const useVideoData = () => {
  const [data, setData] = useState<VideoResponseData[]>();

  const fetchVideoData = async () => {
    try {
      const response = await getBackgroundVideo();
      const getData = response.data.map((el) => el.params);
      setData(getData);
    } catch (error) {
      console.error('Error fetching the background video', error);
    }
  };

  useEffect(() => {
    fetchVideoData();
    const interval = setInterval(fetchVideoData, 60000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
};
