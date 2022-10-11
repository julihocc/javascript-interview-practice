class Timer{
    constructor(intervalInSeconds) {
        this.interval = intervalInSeconds*;
    }

    alert() {
        setInterval( () => console.log(this.interval, interval) )
    }
}

let firstTimer = new Timer(30)