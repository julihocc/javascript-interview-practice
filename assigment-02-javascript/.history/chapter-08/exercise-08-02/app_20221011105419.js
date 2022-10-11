class Timer{
    constructor(intervalInSeconds) {
        this.interval = intervalInSeconds*1000;
    }

    alert(action) {
        setInterval( action, this.interval)
    }
}

let firstTimer = new Timer(3)
firstTimer.alert(() => console.log('hi'))