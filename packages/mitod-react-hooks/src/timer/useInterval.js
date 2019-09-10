import { useEffect, useRef } from 'react';
const useInterval = (callback, delay) => {
    const latestCallback = useRef(() => { });
    useEffect(() => {
        latestCallback.current = callback;
    });
    useEffect(() => {
        if (delay !== null) {
            const interval = setInterval(() => latestCallback.current(), delay || 0);
            return () => clearInterval(interval);
        }
        return undefined;
    }, [delay]);
};
export default useInterval;
