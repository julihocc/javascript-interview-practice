class Timer{
    constructor(intervalInSeconds) {
        this.interval = intervalInSeconds*1000;
    }

    alert() {
        setInterval( , this.interval)
    }
}

let firstTimer = new Timer(3)
firstTimer.alert()