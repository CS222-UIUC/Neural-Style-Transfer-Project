import React, { useState, useEffect } from "react"

const Recieve = ({route}) => {

    const [data, setData] = useState(null);

    async function fetchData(route) {
        const res = await fetch(`/${route}`);
        const data = await res.json();
        setData(data.message);
    }

    useEffect(() => {
        fetchData(route);
    }, [route]);

    return (
        <p data-testid="apiRecieve">{!data ? "Loading..." : data}</p>
    );

}

export default Recieve;