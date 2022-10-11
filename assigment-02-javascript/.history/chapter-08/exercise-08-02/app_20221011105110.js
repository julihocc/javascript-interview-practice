class Timer{
    constructor(intervalInSeconds) {
        this.interval = intervalInSeconds*1000;
    }

    alert(action) {
        setInterval( action,  )
    }
}

let firstTimer = new Timer(30)
firstTimer.alert()