class Timer{
    constructor(intervalInSeconds) {
        this.intervalInSeconds = intervalInSeconds;
    }

    alert(action) {
        setInterval( action, this.intervalInSeconds*1000)
    }
}

let firstTimer = new Timer(30)
firstTimer.alert(() => console.log('First Timer'))

let secondTimer = new Timer(60)
secondTimer.alert(() => console.log('Second Timer'))

let thirdTimer = new Timer(75)
thirdTimer.alert(() => console.log('Third firstTimer'))