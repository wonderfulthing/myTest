// // 订阅者模式  一对多
// class Pubsub {
//     constructor() {
//         this.handles = {}
//     }
//     haha() {
//         console.log('test')
//     }
//     on(type, handle) {
//         if (!this.handles[type]) {
//             this.handles[type] = []
//         }
//         this.handles[type].push(handle)
//     }
//     emit(type) {
//         // console.log(this.handles[type])
//         // console.log(arguments)
//         Array.prototype.shift.call(arguments)
//         if (!this.handles[type]) return false
//         var handles = this.handles[type]
//         for (var i = 0; i < handles.length; i++) {
//             this.handles[type][i].call(this, ...arguments)
//         }
//     }
//     off(type, handle) {

//         var handles = this.handles[type]
//         if (!handle) {
//             this.handles[type].length = 0
//             return
//         }
//         for (var i = 0; i < this.handles[type].length; i++) {
//             var _handle = this.handles[type][i]
//             if (_handle === handle) {
//                 this.handles.splice(i, 1)
//             }
//         }
//     }
// }
// var event = new Pubsub()
// event.haha()
// event.on('someEvent', (...args) => {
//     console.log('someEvent', ...args)
// })
// event.emit('someEvent', 'abc', 123)
// console.log('====')
// event.off('someEvent')
// event.emit('someEvent')
const obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(obj))
console.log(Object.fromEntries)
