import { useState, useEffect } from 'react';
import axios from 'axios';

const UseApiAxios = (endpoint) => {
  const [data, setData] = useState({ data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        endpoint,
      );

      setData(result.data);
    };
    console.log(data);
    fetchData();
  }, []);
};

export default UseApiAxios;
