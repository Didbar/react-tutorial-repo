
function MyApp() {
    return React.createElement(
        'ul',
        null,
        React.createElement(
            'li',
            null,
            '1'
        ),
        React.createElement(
            'li',
            null,
            '2'
        ),
        React.createElement(
            'li',
            null,
            '3'
        )
    );
}

ReactDOM.render(React.createElement(MyApp, null), document.getElementById('root'));