function App() {
    var [name, setName] = React.useState("")
    var [finalName, setFinalName] = React.useState("")

    return (
        <div>
            <h3 onClick={() => console.log("Hello, World")}>Hello{finalName && ", "}{finalName}!</h3>
            <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)}/>
            <button onClick={() => setFinalName(name)}>Click Me!</button>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);