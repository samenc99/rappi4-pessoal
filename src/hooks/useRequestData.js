import { useState, useEffect } from "react";
import {api} from '../api/api'

export default function useRequestData(url, initState, id) {
  const [data, setData] = useState(initState);
  api.defaults.headers.common["auth"] = window.localStorage.getItem('token')
  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        if(id)setData(response.data[id])
        else setData(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [url]);

  return [data];
}
