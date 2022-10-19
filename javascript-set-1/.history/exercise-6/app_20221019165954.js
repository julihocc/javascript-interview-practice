import {Node} from './tree.js'

const node00 = new Node('A')
const node10 = new Node('a')
const node11 = new Node('b')
const node12 = new Node('c')
const node20 = new Node('aa')
const node21 = new Node('ba')
const node22 = new Node('bb')
const node23 = new Node('ca')
const node24 = new Node('cb')
const node30 = new Node('cba')

node00.addChildren(node10, node11, node12)
node10.addChildren(node20)
node11.addChildren(node21, node22)
node1