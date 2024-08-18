import './timer.css'

export function Timer () {
    return(
        <div className='container--timer'>
            <span>0</span>
            <span>0</span>

            <div className='separator--timer'>:</div>

            <span>0</span>
            <span>0</span>
        </div>
    )
}