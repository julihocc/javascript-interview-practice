(function(){
            const counter = 0;
        })

}

const limited = limitFunc(() => {
    console.log('hi')
}, 2)

limited()
limited()