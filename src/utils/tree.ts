
interface rootInterface {
    left:any,
    right:any
    type:any
}


function visitTree(root:rootInterface, type= "double_quote_string") {
    if(root?.left == false && root?.right == false) {
        return
    }
    if (root?.left){
        visitTree(root.left,type);
    }
    if(root?.right){
        visitTree(root.right,type)
    }
    if (root?.right?.type==type || root?.left?.type==type){
        console.log(root)
    }
}


export function getWhereInputNode(root:rootInterface,) {
    let type= "double_quote_string"
    visitTree(root, type)
}

export function getWhereNode(root:rootInterface,) {
    let type= "column_ref"
    visitTree(root, type)
}