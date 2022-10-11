class Timer{
    constructor(intervalInSeconds) {
        this.intervalInSeconds = intervalInSeconds*1000;
        this.interval = intervalInSeconds*1000;
    }

    alert(action) {
        setInterval( action, this.interval)
    }
}

let firstTimer = new Timer(30)
firstTimer.alert(() => console.log('hi'))