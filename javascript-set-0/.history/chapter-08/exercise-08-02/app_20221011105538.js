class Timer{
    constructor(intervalInSeconds) {
        this.intervalInSeconds = intervalInSeconds;
    }

    alert(action) {
        setInterval( action, this.intervalInSeconds*1000)
    }
}

let firstTimer = new Timer(1)
firstTimer.alert(() => console.log('firstTimer'))

let firstTimer = new Timer(1)
firstTimer.alert(() => console.log('firstTimer'))

let firstTimer = new Timer(1)
firstTimer.alert(() => console.log('firstTimer'))