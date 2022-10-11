class Timer{
    constructor(intervalInSeconds) {
        this.intervalInSeconds = intervalInSeconds;
    }

    alert(action) {
        setInterval( action, this.interval
    }
}

let firstTimer = new Timer(30)
firstTimer.alert(() => console.log('hi'))