class Timer{
    constructor(interval) {
        this.interval = interval;
    }

    alert() {
        setInterval( () => console.log(this.interval, interval) )
    }
}

let firstTimer = new Timer(30)