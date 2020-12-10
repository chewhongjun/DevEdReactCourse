import React from 'react';
import Testcomponent from './Testcomponent';
//Functional component
function App() {
    const items = [1, 2, 3, 4, 5]
    
    items.map((item) => {
        console.log(item)
    })
	return (
		<div className="Box">
            <h1>Hello World</h1>
            <div className="text">Lonely</div>
            <div id="world">so lonely</div>
			<Testcomponent />
		</div>
	);
}

export default App;
