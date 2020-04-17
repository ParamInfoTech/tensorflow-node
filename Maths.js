const tf = require("@tensorflow/tfjs");

console.log(tf.version.tfjs);
//Tensors are immutable, so all operations always return a new Tensor and never modify input Tensors
let a = tf.tensor([1,2,3,4]);
let b = tf.tensor([5,6,7,8]);
let c = tf.add(a, b);
b = tf.add(a, c);
console.log(c.print());
console.log(b.print());

a = tf.tensor([1,2,3,4,5,6], [2,3]);
b = tf.tensor([7,8,9,7,8,9], [2,3]);
c = tf.add(a, b);
console.log(c.print());

a = tf.tensor1d([1,2,3,4]);
b = tf.tensor1d([5,6,7,8]);
console.log("Result : " )
console.log(tf.add(a, b));
console.log("Result in print format : ")
console.log(tf.add(a, b).print());

//Sin Cos operations
console.log(tf.cos(a).print());
console.log(tf.sin(a).print());


//3-d Matrix Operations
a = tf.tensor3d([1,2,3,4,5,6,7,8], [2,2,2]);
b = tf.tensor3d([1,2,3,4,5,6,7,8],[2,2,2]);
c = tf.add(a, b);
console.log(c.print());

//Matrix Multiplication
a = tf.tensor([1,1,1,1], [2,2]);
b = tf.tensor([1,1,1,1], [2,2]);

console.log("Dot Product : ");
c = tf.dot(a, b);
console.log(c.print());

console.log("Elementwise Multiplication : ")
d = tf.mul(a, b);
console.log(d.print());

console.log("Matrix Multiplication : ");
e = tf.matMul(a, b);
console.log(e.print());