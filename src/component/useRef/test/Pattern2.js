import React, {useEffect, useRef} from 'react';

/* https://qiita.com/tonio0720/items/c265b9b65db3bb76f2d3 */
class Child extends React.Component {
    someFunc = () => {
        return 'sample';
    }

    render() {
        return <div> </div>;
    }
}

const Pattern2 = () => {
    const ins = useRef(null);

    useEffect(() => {
        console.log(ins.current);
    }, []);

    return (
        <Child ref={ins} />
    );
};

export default Pattern2;