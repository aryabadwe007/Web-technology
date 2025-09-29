import { useEffect, useState } from "react";

function Counter() {
    
    const [count, setCount] = useState(0);
    
    // 2. useState for the history/table data (an array to store each count)
    const [history, setHistory] = useState([]);

    // 3. useEffect to log the counter value and update the table history
    useEffect(() => {
        console.log("useEffect running. Current Count:", count);
        
        // This condition prevents adding the initial '0' count to the history
        if (count > 0) {
            // Create a new entry object
            const newEntry = {
                id: Date.now(), // Unique key for list rendering
                value: count,
                timestamp: new Date().toLocaleTimeString(),
            };
            

            setHistory(prevHistory => [...prevHistory, newEntry]);
        }
        

    }, [count]);

    function handler() {
        setCount(count + 1);
       
        console.log("Count set to:", count + 1); 
    }

    return (
        <div style={{ padding: '20px' }}>
            
            <h1 style={{ textAlign: "center", backgroundColor: "brown", color: "beige", padding: '10px' }}>
                Counter 
            </h1>
            <br />
            
            <button 
                style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }} 
                onClick={handler}>Counter</button>
            
            <br /><br />
            
            <h2> Count: {count}</h2>
            
            <hr />

            <h2>Counter Value Records </h2>
            
          
                <table border="5" style={{ margin:"0 auto", width: '50%', borderCollapse: 'collapse', marginTop: '15px' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f4f4f4' }}>
                            <th style={{ padding: '8px' }}>Sr.no</th>
                            <th style={{ padding: '8px' }}>Counter Value</th>
                            <th style={{ padding: '8px' }}>Time Added</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((entry, index) => (
                            <tr key={entry.id}>
                                <td style={{ padding: '8px', textAlign: 'center' }}>{index + 1}</td>
                                <td style={{ padding: '8px', textAlign: 'center' }}>{entry.value}</td>
                                <td style={{ padding: '8px', textAlign: 'center' }}>{entry.timestamp}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
           
        </div>
    );
}

export default Counter;