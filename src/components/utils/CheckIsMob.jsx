import {useState, useEffect} from 'react';
    
// Cheers to https://stackoverflow.com/a/79600668 for this neat solution
export default function CheckIsMob() {
    const [isMob, setIsMob] = useState(window.innerWidth < 899);

    useEffect(() => {
        const handleResize = () => {
            setIsMob(window.innerWidth < 899);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (isMob ? false : true)
}