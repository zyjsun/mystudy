var myhour, myminute, mysecond;

function flipNumber(el, newnumber) {
  var thisTop = el.find('.top').clone()
  var thisBottom = el.find('.bottom').clone()
  thisTop.addClass('new')
  thisBottom.addClass('new')
  thisBottom.find('.text').text(newnumber)
  el.find('.top').after(thisTop)
  el.find('.top.new').append(thisBottom)
  el.addClass('flipping')
  el.find('.top.new').find('.text').text(newnumber) //
  el.find('.top:not(.new)').find('.text').text(newnumber)
  setTimeout(function() {
    el.find('.bottom:not(.new)').find('.text').text(newnumber)
  }, 500)
}

function setTime() {
  var date = new Date()

  var seconds = date.getSeconds().toString()
  if (seconds.length == 1) {
    seconds = '0' + seconds
  }

  var minutes = date.getMinutes().toString()
  if (minutes.length == 1) {
    minutes = '0' + minutes
  }

  var hour = date.getHours()
  if (hour > 12) {
    hour = hour - 12
  }
  if (hour == 0) {
    hour = 12
  }
  hour = hour.toString()
  if (hour.length == 1) {
    hour = '0' + hour
  }

  // 把hour放到myhour结构里面去显示
  // console.log($(myhour[0]).text());
  // console.log(hour);
  if ($(myhour[0]).text() !== hour) {
    flipNumber($(myhour[0]).closest('.flipper'), hour)
  }
  flipNumber($(myminute[0]).closest('.flipper'), minutes)
  flipNumber($(mysecond[0]).closest('.flipper'), seconds)
}


(function() {
  myhour = $('.clock .flipper:nth-child(1) div:not(.new) .text')
  myminute = $('.clock .flipper:nth-child(2) div:not(.new) .text')
  mysecond = $('.clock .flipper:nth-child(3) div:not(.new) .text')

  // 往dom里面去设置时间
 setInterval(setTime(),100)
 
})()