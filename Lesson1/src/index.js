import MyInfo from "./MyInfo"

function MyApp() {
    return (
        <div>
            <h1>Some Text goes Here</h1>
            <MyInfo />
        </div>
    )
}


ReactDOM.render(<MyApp />, document.getElementById('root'));