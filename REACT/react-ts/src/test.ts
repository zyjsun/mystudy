const getUserName = (user) => user.name
// any unknow never object array tuple
// boolean number string void undefined null symbol bigint
// let count:number=0
// console.log(count);
export default getUserName
// // // function greeter(person: string) {
// // //   return "hello," + person
// // // }
// // // greeter('Tom')

// // // const obj: object = {}

// // interface User {
// //   name: string,
// //   age?: number,
// //   readonly isMale: boolean,
// //   say: Say // (words: string) => string
// // }
// // interface Say {
// //   (words: string): string
// // }
// // const getUserName = (user: User) => {
// //   user.say = function(words: string) {
// //     return 'hello world'
// //   }
// // }
// // // const person: User = {
// // //   name: '龙三元'
// // // }



// interface Config {
//   width?: number,
//   // [propName: string]: any
// }
// function CalculateAreas(config: Config) {
//   let square = 100
//   if (config.width) {
//     square = config.width * config.width
//   }
//   return {area: square}
// }
// let options: any = { widdth: 5 }
// let mySquare = CalculateAreas(options)

// let count:number = 0
// let arr: (number | string)[] = [1, 2, '3']


// function returnItem<T, U>(tuple: [T, U]): [U, T] {
//   return [tuple[1], tuple[0]]
// }

// returnItem(['hello', 2])


interface ReturnItem<T> {
  (para: T): T
}

const returnItem: ReturnItem<number> = (para) => para
