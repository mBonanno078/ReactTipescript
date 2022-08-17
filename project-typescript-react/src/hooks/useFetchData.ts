import React, { useEffect, useState } from "react";

const useFetchData = (url: string) => {
    const [data, setData] = useState({});
    const [lodiang, setLodiang] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                setLodiang(true);
                const getContent = await fetch(url);
                const resContent = await getContent.json();
                if (getContent.status === 200) {
                    setData(resContent);
                    setLodiang(false);
                } else {
                    throw new Error(getContent.statusText);
                }
            } catch (error) {
                setLodiang(true);
                return Promise.reject(error);
            }
        })();
            
      }, [url]);

      return {data, lodiang};
}

export default useFetchData;