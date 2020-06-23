import React, {useEffect} from 'react';

function UseDocumentTitle(count) {
    useEffect(() => {
        document.title = `カウント ${count}`
    }, [count])
};

export default UseDocumentTitle;