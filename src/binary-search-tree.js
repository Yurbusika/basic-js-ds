const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this.rootNode = null;
  }

  root() {
    if(!this.rootNode) {
      return null;
    }
    return this.rootNode;
  }

  add(data) {
    const node = new Node(data);
    if (!this.rootNode) {
      this.rootNode = node;
      return;
    }
    let currentNode = this.rootNode;
    while (true) {
      if (data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = node;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = node;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    let currentNode = this.rootNode;
    while(currentNode) {
      if (data === currentNode.data) {
        return true;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left; 
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  find(data) {
    let currentNode = this.rootNode;
    let findNode = null;

    while (currentNode) {
      if (currentNode.data === data) {
        findNode = currentNode;
        return findNode;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left; 
      } else {
        currentNode = currentNode.right;
      }
    }
    return findNode;
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

   function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.right) {
          return node.left;
        }
        if (!node.left) {
          return node.right;
        }
        node.data = findMin(node.right).data;
        node.right = removeNode(node.right, node.data);
        return node;
      }
    }
    function findMin(node) {
      while (node.left) {
        node = node.left;
      }
      return node;
    }
  }

  min() {
    let currentNode = this.rootNode;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    let currentNode = this.rootNode;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};