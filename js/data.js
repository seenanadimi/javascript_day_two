//Primitive Type
const appName = 'Cool App';
const score = 0;
const isVIP = true;


//Compound Data Types
const array = [1, '1', true]; //List data type
const object = {
    appName: '0',
    score: 0,
    isVIP: true,

}; //Object, Key value pair.

delete object.appName;
object.appName ='win';


console.log(array[0], Object.entries(object));
console.log(object.appName, object.isVIP, object.score)
console.log(object['score'], object['isVIP']);
console.log(array[1], array[2]);
console.log(array[2], object['score']);
console.log(object.appName, object.isVIP);
// console.log(typeof score, typeof appName);