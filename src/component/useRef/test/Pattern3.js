import React, {useEffect, useRef} from 'react';

/* https://qiita.com/tonio0720/items/c265b9b65db3bb76f2d3 */

const Child = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>DOM</div>
    );
});

const Pattern3 = () => {
    const el = useRef(null);

    useEffect(() => {
        console.log(el.current);
    }, []);

    return (
        <Child ref={el} />
    );
};

export default Pattern3;