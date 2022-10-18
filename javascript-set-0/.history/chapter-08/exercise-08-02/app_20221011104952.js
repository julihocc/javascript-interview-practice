class Timer{
    constructor(intervalInSeconds) {
        this.interval = intervalInSeconds*1000;
    }

    alert() {
        setInterval( () => console.log(this.interval, interval) )
    }
}

let firstTimer = new Timer(30)
