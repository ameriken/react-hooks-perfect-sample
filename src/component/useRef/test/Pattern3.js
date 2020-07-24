import React, {useEffect, useRef} from 'react';

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