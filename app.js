var days =document.getElementById('days')
var hours =document.getElementById('hours')
var mins =document.getElementById('mins')
var sec =document.getElementById('sec')

var bakraEid = new Date()
bakraEid.setDate(18)
bakraEid.setMonth(5)
// console.log(Math.floor(bakraEid))
var currentdate = new Date()
// console.log(Math.floor(current_date))
var daysleft = bakraEid.getTime() - currentdate.getTime()
// console.log(daysleft/1000/60/60/24)
var interval = setInterval(function(){
    var current_date = new Date()
    
    daysleft = daysleft - 1000
    day_s = daysleft/1000/60/60/24
    // hour_s = daysleft/1000/60/60
    hour_s = 24 -current_date.getHours()
    // min_s = daysleft/1000/60
    min_s =60-current_date.getMinutes()
    // sec_s = daysleft/1000
    sec_s = 60- current_date.getSeconds()

    days.innerText =Math.floor(day_s)
    hours.innerText =Math.floor(hour_s)
    mins.innerText =Math.floor(min_s)
    sec.innerText =Math.floor(sec_s)
    
},1000)