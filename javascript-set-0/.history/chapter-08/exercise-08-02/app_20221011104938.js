class Timer{
    constructor(intervalInSeconds) {
        this.interval = intervalIn;
    }

    alert() {
        setInterval( () => console.log(this.interval, interval) )
    }
}

let firstTimer = new Timer(30)