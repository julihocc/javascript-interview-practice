class Timer{
    constructor(intervalInSeconds) {
        this.intervalInSeconds = intervalInSeconds;
    }

    alert(action) {
        setInterval( action, this.intervalInSeconds*1000)
    }
}

let firstTimer = new Timer(30)
firstTimer.alert(() => console.log('hi'))