import React, {useEffect, useRef} from 'react';

/* https://qiita.com/tonio0720/items/c265b9b65db3bb76f2d3 */
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