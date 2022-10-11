class Timer{
    constructor(intervalInSeconds) {
        this.intervalInSeconds = intervalInSeconds;
    }

    alert(action) {
        setInterval( action, this.intervalInSeconds*)
    }
}

let firstTimer = new Timer(30)
firstTimer.alert(() => console.log('hi'))