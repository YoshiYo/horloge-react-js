class TimeTab extends React.Component {

    render() {
        var date = new Date();
        return (
            <div>{date.toLocaleTimeString()}</div>
        );
    }
}

function getDate() {
    ReactDOM.render(
        <TimeTab/>,
        document.getElementById('time-open')
    );
}

setInterval(getDate, 1000);

