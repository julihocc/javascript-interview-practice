class Node {
    constructor(data, children) {
        this.data = data 
        this.children = new Set(...children)
    }

    addChild(child) {
        this.children.push(node)
    }
}

const root = new Node('A')
const node2 = new Node('B')
const node3 = new Node('C')
const node4