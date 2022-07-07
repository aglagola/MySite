class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const string = "abaabedbb";
const array = [2, 1, 3, 5, 3, 2];
const a = [0, 0, -5, 30212];
const b = [-10, 40, -3, 9];
const v = -8;

const sumOFTwo = (a, b, v) => {
  let differences = [];
  for (i = 0; i < a.length; i++) {
    let difference = v - a[i];
    differences.push(difference);
  }

  for (i = 0; i < b.length; i++) {
    if (differences.includes(b[i])) return true;
  }

  return false;
};

const hashMapCounter = (string) => {
  counts = new Map();
  for (i = 0; i < string.length; i++) {
    let c = string[i];
    if (counts.has(c)) {
      counts.set(c, counts.get(c) + 1);
    } else {
      counts.set(c, 1);
    }
  }
  return counts;
};

const firstNonRepeatingCharacter = (string) => {
  stringCounts = new Map();
  for (i = 0; i < string.length; i++) {
    let c = string[i];
    if (stringCounts.has(c)) {
      stringCounts.set(c, stringCounts.get(c) + 1);
    } else {
      stringCounts.set(c, 1);
    }
  }

  for (i = 0; i < string.length; i++) {
    let c = string[i];
    if (stringCounts.get(c) == 1) return c;
  }

  return console.log("there are no non repeating characters");
};

const findFirstDuplicate = (array) => {
  let hashMap = new Map();
  for (i = 0; i < array.length; i++) {
    let c = array[i];
    if (hashMap.has(c)) {
      return c;
    } else {
      hashMap.set(c);
    }
  }
};

function findUniqueNumbers(numbers) {
  let counts = new Map();
  let array = [];
  for (let i = 0; i < numbers.length; i++) {
    let c = numbers[i];
    if (counts.has(c)) {
      counts.set(c, counts.get(c) + 1);
    } else {
      counts.set(c, 1);
    }
  }

  for (let x of counts) {
    console.log(x);
    if (x[1] === 1) {
      array.push(x[0]);
    }
  }
  return array;
}

console.log(findUniqueNumbers([1, 2, 1, 3]));

// tranversing a map
const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");
const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];
//Represent a Graph in two ways, a matrix or adjacency list
//Matrix takes up more space but easier to visualize and represent bc just a 2D array filled with 1's and 0's

//The Graph
const adjacencyList = new Map();

//Add Node
const addNode = (airport) => {
  adjacencyList.set(airport, []);
};

//Add Edge, undirected
const addEdge = (origin, destination) => {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
};

//Create the Graph
airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

//console.log(adjacencyList);

//BFS Breadth First Search

const bfs = (start) => {
  const visited = new Set();
  const queue = [];

  while (queue.length > 0) {
    const airport = queue.shift();
    const destinations = adjacencyList.get(airport);
    for (const destination of destinations) {
      queue.push(destination);
      if (destination === "BKK") {
        console.log("Found it!");
      }
      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
      }
    }
  }
};

//console.log(bfs())

// DFS Depth First Search

const dfs = (start, visited = new Set()) => {
  console.log(start);
  visited.add(start);

  const destinations = adjacencyList.get(start);
  for (const destination of destinations) {
    if (destination === "BKK") {
      console.log("dfs found Bangkok in steps");
      return;
    }
    if (!visited.has(destination)) {
      dfs(destination, visited);
    }
  }
};

//count vowals
const input = "hello";
const vowalCounter = (input) => {
  let vowals = ["a", "e", "i", "o", "u"];
  return input.split("").filter((letters) => {
    return vowals.includes(letters);
  }).length;
};

// Even or Odd
const evenOrOdd = (arr) => {
  if (arr % 2 === 0) {
    return console.log("Even");
  }
  return console.log("Odd");
};

const isDivisible = (n, x, y) => {
  if (n % x === 0 && n % y === 0) {
    return true;
  }
  return false;
};

const turnNumberNegative = (num) => {
  return -Math.abs(num);
};

const smallestInteger = (arr) => {
  return Math.min(...arr);
};

const summation = (num) => {
  let counter = 0;
  console.log(num);
  for (i = 1; i <= num; i++) {
    counter += i;
  }
  return counter;
};

const returnAvg = (arr) => {
  arr.reduce((a, b) => a + b) / arr.length;
};

let arr = [1, 3, 5];
//sorting arrays
const sortAscending = arr.sort((a, b) => a - b);
const sortDescending = arr.sort((a, b) => b - a);

//reducing arrays
const reducer = arr.reduce((a, b) => a + b);
//console.log(reducer)

// count how many times letter occurs in string
const countLetters = (str = "Hello World", target = "o") => {
  let search = ["o"];
  return str.split("").filter((letters) => {
    return search.includes(letters);
  }).length;
};

const removeCharFromString = (str) => {
  let result = str.slice(1, -1);
};

const repeatString = (n = 6, str = "a") => {
  let repeatedString = "";
  for (i = 0; i < n; i++) {
    repeatedString += str;
  }
  return repeatedString;
};

//console.log(repeatString())

const hasUniqueChars = (s) => {
  let hashMap = new Map();
  for (i = 0; i < s.length; i++) {
    let c = s[i];
    if (hashMap.has(c)) {
      return false;
    } else {
      hashMap.set(c);
    }
  }
  return true;
};

const breakChocolate = (n, m) => {
  if ((n > 1 && m > 1) || (n > 1 && m == 1) || (n == 1 && m > 1)) {
    return m * n - 1;
  } else {
    return 0;
  }
};

/**
 * Returns a [parts]-length array of equal or nearly equal
 * integers that add up to [num].
 */
var splitInteger = function (num, parts) {
  // Complete this function
  let sumDividedParts = [];
  sumDividedParts.length = parts;
  let n;
  let mod = num % parts;
  //console.log(mod)
  if (mod == 0) {
    n = num / parts;
    sumDividedParts.fill(n);
  } else {
    n = (num - mod) / parts;
    sumDividedParts.fill(n);
    for (i = 0; i < mod; i++) {
      sumDividedParts[i] += 1;
    }
    sumDividedParts.reverse();
  }
  return sumDividedParts;
};

// Graph Problems Visual Things
// Depth and Breadth First Search, Has Path, Undirected Paths(visited), Connected compnents count, largest component,

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const depthFirstPrint = (graph, source) => {
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    for (let neighbor of graph(current)) {
      stack.push(neighbor);
    }
  }
};

const recursiveDepthFirstPrint = (graph, source) => {
  console.log(source);
  for (let neighbor of graph[source]) {
    recursiveDepthFirstPrint(graph, neighbor);
  }
};

const breadthFirstPrint = (graph, source) => {
  const queue = [source];

  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
};

const hasPathRecursive = (graph, src, dst, visited) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;

  visited.add(src);

  for (let neighbor of graph[src]) {
    if (hasPathRecursive(graph, neighbor, dst, visited) === true) return true;
  }
  return false;
};

const hasPathBreadth = (graph, src, dst) => {
  const queue = [src];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current === dst) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return false;
};

const treeincludes = (root, target) => {
  if (root === null) return false;

  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.val === target) return true;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return false;
};

const treeincludesRecusion = (root, target) => {
  if (root === null) return false;
  if (root === target) return true;
  return (
    treeincludesRecusion(root.left, target) ||
    treeincludesRecusion(root.right, target)
  );
};

const treesum = (root) => {
  if (root === 0) return 0;
  const leftsum = treesum(root.left);
  const rightsum = treesum(root.right);
  return root.val + leftsum + rightsum;
};

const treeMinValue = (root) => {
  if (root === 0) return 0;
  const leftsum = treesum(root.left);
  const rightsum = treesum(root.right);
  return Math.min(root.val, leftsum, rightsum);
};

// undirected graph

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  console.log(graph);
  return hasPathRecursive(graph, nodeA, nodeB, new Set());
};

const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const graph2 = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
};
const connectedComponentsCount = (graph) => {
  console.log(graph);
  const visited = new Set();
  let count = 0;
  for (let node in graph) {
    if (explore(graph, node, visited) === true) count += 1;
  }
  return count;
};

const explore = (graph, current, visited) => {
  if (visited.has(String(current))) return false;
  visited.add(String(current));
  for (let neighbor of graph[current]) {
    explore(graph, neighbor, visited);
  }
  return true;
};

const largestComponent = (graph) => {
  const visited = new Set();
  let longest = 0;
  for (let node in graph) {
    const size = exploreSize(graph, node, visited);
    if (size > longest) longest = size;
  }
  return longest;
};

const exploreSize = (graph, node, visited) => {
  if (visited.has(node)) return 0;
  visited.add(node);
  let size = 1;
  for (let neighbor of graph[node]) {
    size += exploreSize(graph, neighbor, visited);
  }
  return size;
};

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const visited = new Set([nodeA]);
  const queue = [[nodeA, 0]];

  while (queue.length > 0) {
    const [node, distance] = queue.shift();

    if ((node = nodeB)) return distance;

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }
  return -1;
};

//console.log(largestComponent(graph2));
//console.log(connectedComponentsCount(graph2));

//console.log(undirectedPath(edges, 'i', 'j'));

//const sampleArr = [1,2,3,4,5];
//console.log(Math.max(...sampleArr));
//console.log(sampleArr);
//key value, for in, for of

minNumberBills = (num) => {
  let amount = num;
  let dividedAmount;
  let remainder = 0;
  let arr = [0, 0, 0];

  if (amount < 20) {
    return arr;
  }

  if (amount >= 100) {
    dividedAmount = Math.floor(amount / 100);
    arr.splice(0, 1, dividedAmount);
    remainder = amount % 100;
    amount = remainder;
  }

  if (amount >= 50) {
    dividedAmount = Math.floor(amount / 50);
    arr.splice(1, 1, dividedAmount);
    remainder = amount % 50;
    amount = remainder;
  }

  if (amount >= 20) {
    dividedAmount = Math.floor(amount / 20);
    arr.splice(2, 1, dividedAmount);
    remainder = amount % 20;
    amount = remainder;
  }
  return arr;
};

// Incrementing map key value and creating if doesn't exist
if (map[key] == null) map[key] = 0;
map[key] = map[key]++;
