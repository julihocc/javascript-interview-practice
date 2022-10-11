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

let secondTimer = new Timer(2)
secondTimer.alert(() => console.log('firstTimer'))

let thirdTimer = new Timer(1)
thirdTimer.alert(() => console.log('firstTimer'))