/* eslint-disable no-unused-vars */

function multiplicationTable(rows,columns) {
    let table  =[];
    if (rows===0 && columns===0){
        return table;
    }
    // console.log(rows,columns)
    for (let i=1;i<=rows;i++){
        //making rows
        let curRowNum = i
        let row =[];
        //add columns to row
        for (let j=1; j<=columns; j++){
            let curColNum = curRowNum*j
            row.push(curColNum)
        }
       
        
        
        table.push(row);
        
    }
    // console.log(rows,columns)
    // console.log(table)
    return table;
}

/* ****<><><> PLEASE READ BELOW, im experiencing problems during checkpoint

chrome stopped showing me jasmine test specs, Aw, Snap!" page crashes and other page
 loading errors

 did not want to restart chrome and ruin test, tried restarting vs code, not working still
 ill be working following problems without testem/jasmine then, unavailable to me now ... */
