// $.get('http://data1_souce', function(data1) {
//   // ...
//   $.get('http://data2_souce', function(data2) {
//    // ...
//     $.get('http://data3_souce', function(data3) {
//         var html = fuck(data1, data2, data3)
//         return html
//     })
//   })
// })


// (function() {
//   var count = 0;
//   var result = {}

//   $.get('http://data1_souce', function(data) {
//     result.data1 = data
//     count++
//     handle()
//   })

//   $.get('http://data3_souce', function(data) {
//     result.data2 = data
//     count++
//     handle()
//   })

//   $.get('http://data3_souce', function(data) {
//     result.data3 = data
//     count++
//     handle()
//   })

//   function handle() {
//     if (count === 3) {
//       var html = fuck(data1, data2, data3)
//       return html
//     }
//   }
// })()
const { default: EventProxy } = require("eventproxy");
var ep = new EventProxy()

ep.all('data1_event', 'data2_event', 'data3_event', function(data1, data2, data3) {
  var html = fuck(data1, data2, data3)
  return html
})

$.get('http://data1_souce', function(data) {
  ep.emit('data1_event', data)
})

$.get('http://data2_souce', function(data) {
  ep.emit('data2_event', data)
})

$.get('http://data3_souce', function(data) {
  ep.emit('data3_event', data)
})
