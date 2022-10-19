class Node {
    constructor(data) {
        this.data = data
        this.children = []
    }

    addChildren(...moreChildren) {
        this.children = (this.children).concat(moreChildren)
    }

    preorderTraverse() {
        console.log(this.data)
        if (this.children.length > 0) {
            for (let child of this.children) {
                child.preorderTraverse()
            }
        }
        return
    }

    postorderTraverse() {
        for (const child of this.children) {
            child.postorderTraverse()
        }
        console.log(this.data)
        return
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

node1.addChildren(node2, node3)

node2.addChildren(node4)

node3.addChildren(node5, node6)

node5.addChildren(node7, node8)

// node1.preorderTraverse()
node1.postorderTraverse()