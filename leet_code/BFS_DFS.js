class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(value) {
        this.children.push(new Node(value))
    }

    //------ SOLUTION ------//
    //! Recursive solution:
    //* Time complexity O(Vertices + Edges) 
    //* Space complexity O(Vertices) 
    DFS(array) {
        array.push(this.value)
        // this.children.map(child => child.DFS(array));
        for (let child of this.children) {
            child.DFS(array)
        }
        return array;
    }

    //* O(Vertices + Edges) - time, O(Vertices - space)
    BFS(array) {
        const queue = [this];
        while (queue.length > 0) {
            const current = queue.shift();
            array.push(current.value);
            for (const child of current.children) {
                queue.push(child)
            }
        }
        return array;
    }
}



//? Traverse graph in Depth First Search approach ?//
const tree = new Node("A");
tree.addChild("B");
tree.addChild("C");
tree.children[0].addChild("D");
tree.children[0].addChild("E");
tree.children[1].addChild("F");
tree.children[1].addChild("G");
tree.children[0].children[0].addChild("H")
tree.children[0].children[0].addChild("I")
tree.children[1].children[0].addChild("J");
tree.children[1].children[0].addChild("K");
tree.children[1].children[1].addChild("L");
tree.children[1].children[1].addChild("M");


///* TEST *///
console.log("TREE:", tree)
console.log('DFS ->', tree.DFS([]));
console.log('BFS ->', tree.BFS([]));
