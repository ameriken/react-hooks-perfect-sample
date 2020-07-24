import React, {useEffect, useRef} from 'react';

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