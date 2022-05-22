date_1 = new Date(1999,10,21,13,0,0)
date_2 = new Date(1999,10,21,13,10,5)
span = date_2 - date_1
hours = Math.floor((date_2 - date_1)/1000/3600)
minutes = Math.floor(span/1000/60-hours*60)
seconds = Math.floor(span/1000-hours*3600-minutes*60)
// seconds = M

console.log("剩餘:",hours,"小時", minutes,"分", seconds,"秒");
