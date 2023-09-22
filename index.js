const d=document;

function clock(){
    // We can sinc up the tags for the id
    let hour= d.getElementById('hour');
    let minute= d.getElementById('minute');
    let seconds= d.getElementById('seconds');
    let ampm= d.getElementById('ampm');

    // we can get the dates from the day
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am='AM';

    // convert the format from am to pm
    if (h>12) {
        h=h-12;
        let am='PM'
    }

    // now we put the date in the document
    hour.innerHTML=h;
    minute.innerHTML=m;
    seconds.innerHTML=s;
    ampm.innerHTML=am;
}

let interval=setInterval(clock, 1000);//We activate the function every second