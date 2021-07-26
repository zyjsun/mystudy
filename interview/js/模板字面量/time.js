const daySpan = document.querySelector('.daySpan'),
  hourSpan = document.querySelector('.hourSpan'),
  minuteSpan = document.querySelector('.minuteSpan'),
  secondSpan = document.querySelector('.secondSpan')
let deadline = new Date('2021-8-30 00:00');
function countdown () {
  const now = new Date(), timeRemaining = deadline - now;
  let day, hour, minute, second;
  if (timeRemaining < 0) { return 0 };
  second = Math.floor(timeRemaining / 1000 % 60)
  minute = Math.floor(timeRemaining / 1000 / 60 % 60)
  hour = Math.floor(timeRemaining / 1000 / 60 / 60 % 24)
  day = Math.floor(timeRemaining / 1000 / 60 / 60 / 24)
  console.log(day, hour, minute, second)
  daySpan.innerHTML = day + '天'
  hourSpan.innerHTML = hour + '时'
  minuteSpan.innerHTML = minute + '分'
  secondSpan.innerHTML = second + '秒'

  setTimeout(countdown, 1000)
}

countdown()