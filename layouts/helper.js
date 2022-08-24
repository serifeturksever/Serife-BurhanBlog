export default function createPagePath(array){
    array.shift()
    let arrLen = array.length;
    for(let i=1;i<arrLen;i++){
        array.splice(i,0,">")
    }

    return array.join(" ");
}