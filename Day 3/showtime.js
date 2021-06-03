function showTime(){
    let dateTime = new Date();

    let time = dateTime.toLocaleTimeString();
    console.log(time)
    setTimeout(showTime , 2000)

}

showTime();
