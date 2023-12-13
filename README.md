# Understanding Nodes

## How weights and biases affect an activation function

Josh Stammer points out in his [excellent presentation](https://www.youtube.com/watch?v=CqOfi41LfDw) that neural networks are really Big Fancy Squiggle Fitting Machines (BFSFM). That’s exactly what they do; they fit data to a squiggly line that we can use to make predictions.

A neural network is a collection of entities (called nodes) organized in three parts: an input, an output, and the "hidden layer" - nodes between the input and output, which comprise most of the network. Almost all processing occurs in the hidden layer.

How can a group of nodes make predictions?

There are essentially two things:

1. Configuring ("training") the neural network to fit our data.
2. The process of input data passing through the nodes, which results in the best fit (ie. squiggly line) through the data’s predicted output.

For the sake of introduction, we will jump to the second component -- how data passes through the nodes, resulting in the best approximation for our data. Training neural networks is accomplished with backpropagation and will be described in later installments.

A node is an activation function f(x) plus bias b. The x parameter is the node’s input, called a weighted sum, which represents all of the incoming input data, each multiplied by its own variable called a weight. Higher weights have stronger effects on the activation function, as we will see.

When data interacts with the node, output is produced by passing the data as the argument x to f(x) + b. If you plot the node’s output on a graph enough times over a given range of inputs (assuming the weight is not 1 and the bias is greater than 0) you will see a shifted, stretched or compressed, potentially flipped version of the activation function. This style of transformation occurs at each of the nodes in the hidden layer. Later, the combined sum of the nodes gets streamed to the output and becomes our network’s prediction/output.

Node watcher allows us to visualize the effect of 1 weighted input and the node’s bias on the activation function. This effect is important to understand because it represents that node-level transformation described above, and is core to the functionality of neural networks.

Try it and see.

Let me know if it helps!