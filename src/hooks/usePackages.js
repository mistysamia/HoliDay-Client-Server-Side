import { useState,useEffect } from 'react';

const usePackages = () => {
    const [packages, setPackages] = useState([]);
        useEffect(() => {
            fetch(`https://spooky-spell-89697.herokuapp.com/packages`)
                .then(res => res.json())
                .then(data => setPackages(data));
        }, []);
        return [packages, setPackages];
};

export default usePackages;