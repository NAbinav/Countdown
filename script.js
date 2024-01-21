
function disp(){
    const d = new Date();
    document.getElementById("month").innerHTML=11-d.getMonth()+"<br> <span class='hello'>MONTH</span>";
    document.getElementById("day").innerHTML=new Date(d.getFullYear(), d.getMonth(), 0).getDate()-d.getDate()-1+"<br> <span class='hello'>DAYS</span>";
    document.getElementById("hour").innerHTML=23-d.getHours()+"<br> <span class='hello'>HOURS</span>";
    document.getElementById("min").innerHTML=59-d.getMinutes()+"<br> <span class='hello'>MINUTES</span>";
    document.getElementById("sec").innerHTML=59-d.getSeconds()+"<br> <span class='hello'>SECONDS</span>";
}
setInterval(disp,1000); 