import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch data from the server when the component mounts
        fetch('/api/hello')
          .then((response) => response.json())
          .then((data) => setMessage(data.message))
          .catch((error) => console.error('Error fetching data:', error));
      }, []);

      const listItems = data.map(d =>
        <tr>
            key = {d.id}
        </tr>
        );

      return(
        <div>
            <aside>
                <table>
                    
                </table>
            </aside>
            <table>

            </table>
        </div>
      );
}
