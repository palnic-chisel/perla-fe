/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

export const apiStates = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

export const useApi = (url) => {
  const [data, setData] = React.useState({
    state: apiStates.LOADING,
    error: '',
    data: [],
  }, []);

  const setPartData = (partialData) => setData({ ...data, ...partialData });

  React.useEffect(() => {
    setPartData({
      state: apiStates.LOADING,
    });
    fetch(url)
      .then((response) => response.json())
      .then((datas) => {
        setPartData({
          state: apiStates.SUCCESS,
          data: datas,
        });
      })
      .catch(() => {
        setPartData({
          state: apiStates.ERROR,
          error: 'fetch failed',
        });
      });
  }, []);

  return data;
};
