//WebGL does not support memory management i.e. garbage collection
// SO tensorflow provides support for it.

// WebGL performs tensor operations, if we are executing tensorflow
// code in browser and background for tensorflow is 'WebGL' instead of 'cpu'

const tf = require("@tensorflow/tfjs");

let a = tf.tensor([1,2,3,4]);
let b = tf.tensor([5,6,7,8]);
let c = tf.add(a, b);

console.log("Number of tensors in Memory : " + tf.memory().numTensors);
tf.dispose(a);
console.log("Number of tensors in Memory : " + tf.memory().numTensors);
tf.dispose(b);
console.log("Number of tensors in Memory : " + tf.memory().numTensors);

// We need to pass every tensor explicitly to tf.dispose() function
// This is not convenient, when we are dealing with many tensors
// as we need to dispose every tensor explicitly

//Solution id tf.tidy() function
// this function disposes every tensor created within it,
// except which is returned by function

let result = tf.tidy(() => {
    let a = tf.tensor([1,2,3,4]);
    let b = tf.tensor([5,6,7,8]);

    let c = tf.add(a, b);

    console.log("Number of tensors in Memory : " + tf.memory().numTensors);
    console.log("Number of Bytes in Memory   : " + tf.memory().numBytes);

    return c;
});

console.log("Number of tensors in Memory : " + tf.memory().numTensors);

tf.dispose(c);
tf.dispose(result);
console.log("Number of tensors in Memory : " + tf.memory().numTensors);
