import './index.css'

function Time({seconds,minutes,hours}) {
    return (
        <div className="time">
            <h1>{hours}:{minutes}:{seconds}</h1>
        </div> 
    )
}

export default Time;