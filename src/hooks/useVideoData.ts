import { VideoResponseData } from './../api/types';
import { useEffect, useState } from 'react';
import { getBackgroundVideo } from '../api';

export const useVideoData = () => {
  const [data, setData] = useState<VideoResponseData[]>();

  const fetchVideoData = async () => {
    const response = await getBackgroundVideo();
    const getData = response?.data.map((el) => el.params);
    if (getData) setData(getData);
  };

  useEffect(() => {
    fetchVideoData();
    const interval = setInterval(fetchVideoData, 60000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
};
