import { useState, useEffect, useCallback } from 'react';

const useFetch = (url, params = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Serialize params: JSON.stringify(params) trong dependency array
  // để tránh infinite loop khi params thay đổi reference (ví dụ truyền object literal vào)
  const stringifiedParams = JSON.stringify(params);

  const fetchData = useCallback(async () => {
    if (!url) return;
    
    setLoading(true);
    setError(null);
    try {
      const parsedParams = JSON.parse(stringifiedParams);
      const queryParams = new URLSearchParams(parsedParams).toString();
      const requestUrl = queryParams ? `${url}?${queryParams}` : url;

      const response = await fetch(requestUrl);
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message || 'Đã có lỗi xảy ra');
    } finally {
      setLoading(false);
    }
  }, [url, stringifiedParams]); // dependencies bao gồm url và stringifiedParams

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export default useFetch;
