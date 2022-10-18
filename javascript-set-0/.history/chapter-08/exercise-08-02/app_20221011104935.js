class Timer{
    constructor(intervalInSeconds) {
        this.interval = interval;
    }

    alert() {
        setInterval( () => console.log(this.interval, interval) )
    }
}

let firstTimer = new Timer(30)