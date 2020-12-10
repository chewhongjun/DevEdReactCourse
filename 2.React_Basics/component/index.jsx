import ReactDOM from 'react-dom';

function App() {
    const time = new Date().toLocaleDateString();
    const buttonStyle = { color: "red", fontSize: 20 };
    const alertHandler = () => {
        alert("Hey");
    };

    return (
        <div>
            <h1 style={buttonStyle}> {time} </h1>{" "}
            <button onClick={alertHandler}> Submit </button>{" "}
            <Tweet/>
        </div>
    );
}

function Tweet() {
    return (
        <div>
            <h2>Tweet</h2>
            <p>This stuff is pretty cool</p>
        </div>
    )
}

ReactDOM.render(React.createElement(App))
document.querySelector('#root')