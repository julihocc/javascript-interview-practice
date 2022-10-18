class Timer{
    constructor(intervalInSeconds) {
        this.intervalInSeconds = intervalInSeconds;
    }

    alert(action) {
        setInterval( action, this.intervalInSeconds*1000)
    }
}

let firstTimer = new Timer(1)
firstTimer.alert(() => console.log('First Timer'))

let secondTimer = new Timer(2)
secondTimer.alert(() => console.log('Second Timer'))

let thirdTimer = new Timer(1)
thirdTimer.alert(() => console.log('Third firstTimer'))