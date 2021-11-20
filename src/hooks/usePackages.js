import { useState,useEffect } from 'react';

const usePackages = () => {
    const [packages, setPackages] = useState([]);
        useEffect(() => {
            fetch(`https://ancient-anchorage-65062.herokuapp.com/packages`)
                .then(res => res.json())
                .then(data => setPackages(data));
        }, []);
        return [packages, setPackages];
};

export default usePackages;