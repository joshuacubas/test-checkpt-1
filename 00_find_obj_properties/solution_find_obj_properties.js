/* eslint-disable no-unused-vars */

function findObjPropsHasOwn(obj){
    let keysArr = []
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            // console.log(true)
            keysArr.push(key)
            
        }
    }
    // console.log(keysArr)
    // console.log(keysArr.join(", "))
    return keysArr.join(", ")

}
