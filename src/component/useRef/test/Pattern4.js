import React, {useEffect, useRef} from 'react';

const data = [0, 1, 2];

const Pattern4 = () => {
    const els = useRef([]);
    data.forEach((_, i) => {
        els.current[i] = React.createRef();
    });

    useEffect(() => {
        console.log(els.current);
    }, []);

    return (
        <div>
            {
                data.map((n, i) => {
                    return (
                        <div key={n} ref={els.current[i]} >{n}</div>
                    );
                })
            }
        </div>
    );
};

export default Pattern4;