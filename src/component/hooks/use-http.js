import React, { useState } from 'react';

/**
 * 
 */
function useHttp() {
    const [isLoading, setIsLoading] = useState(false); 
    const [error_, setError_] = useState('');

    /**
     * 
     * @param {Object} requestConfig 
     * @param {Function} processData 
     */
    const sendRequest = async (requestConfig, processData) => {
        setIsLoading(true); 
        try {
            const response = await fetch(requestConfig.url); 
            const data = await response.json(); 
            processData(data);
        } catch(e) {
            setError_("Something goes wrong.."); 
        }
        setIsLoading(false); 
    }

    return [
        isLoading, error_, sendRequest 
    ]
}

export default useHttp;