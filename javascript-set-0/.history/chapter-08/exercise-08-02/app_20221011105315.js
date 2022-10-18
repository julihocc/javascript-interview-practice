class Timer{
    constructor(intervalInSeconds) {
        this.interval = intervalInSeconds*1000;
    }

    alert() {
        setInterval( () => console.log('hi'), this.interval)
    }
}

let firstTimer = new Timer(30)
firstTimer.alert()