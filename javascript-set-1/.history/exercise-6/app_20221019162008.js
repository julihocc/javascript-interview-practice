class Node {
    constructor(data) {
        this.data = data 
        this.children = []
    }

    addChild(child) {
        this.children.push(node)
    }

    addChildren(moreChildren) {
        this.children = (this.children).concat(moreChildren)
    }
}

const node1 = new Node('A') //root
const node2 = new Node('B')
const node3 = new Node('C')
const node4 = new Node('D')
const node5 = new Node('E')
const node6 = new Node('F')
const node7 = new Node('G')
const node8 = new Node('H')

node1.addChildren([node1, node3])
node1