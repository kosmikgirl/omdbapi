import { useState, useEffect } from 'react';

export function useFetch(url, defaultData) {
  const [data, updateData] = useState(defaultData);

  async function getDataFromAPI() {
    try {
      if (!url) {
        updateData(defaultData);
        return;
      }
      const resp = await fetch(url);
      const json = await resp.json();
      updateData(json);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getDataFromAPI();
    // eslint-disable-next-line 
  }, [url]);

  if (data.Search) {
    return data.Search;
  }
  return null;
}