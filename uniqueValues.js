const arrOfNum = [1, 2, 2, 4, 5, 6, 6];
console.log(getUniqueValues(arrOfNum)); 

function getUniqueValues(array) {
    var a = [];
    for (var i=0, l=array.length; i<l; i++)
        if (a.indexOf(array[i]) === -1 && array[i] !== '')
            a.push(array[i]);
    return a;
}
