function App() {
    const time = new Date().toLocaleDateString();
    const buttonStyle = { color: 'red', fontSize: 20 }
    const alertHandler = () = {
        alert("hey");
    }
    return (
        <div>
            <h1>{time}</h1>
            <h1 style={buttonStyle}>Hello World</h1>
            <button onClick={alertHandler}>Submit</button>
        </div>
    )
}

ReactDOM.render(React.createElement(App,
document.querySelector('#root')))