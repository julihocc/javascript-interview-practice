class Timer{
    constructor(intervalInSeconds) {
        this.interval = intervalInSeconds*1000;
    }

    alert(action) {
        setInterval( action, interval)
    }
}

let firstTimer = new Timer(30)
firstTimer.alert()