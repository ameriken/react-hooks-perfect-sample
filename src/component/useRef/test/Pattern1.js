import React, {useEffect, useRef} from 'react';

const Pattern1 = () => {
    const el = useRef(null);

    useEffect(() => {
        console.log(el.current);
    }, []);

    return (
        <div ref={el}>DOM</div>
    );
};

export default Pattern1;