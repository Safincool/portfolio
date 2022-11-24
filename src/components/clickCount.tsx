import React, { useEffect, useState } from 'react'


type ClickCountProps = {

}

const ClickCount: React.FC<ClickCountProps> = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(`Clicked the button ${count} times`);
    }, [count]);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                clicked {count} times
                </button>
        </div>
    )
    
}


export default ClickCount
