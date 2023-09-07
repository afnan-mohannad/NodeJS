console.log(commonCharacters('acexivou', 'aegihobu'));

function commonCharacters(str1, str2) {
    
    const set1 = new Set(str1.split(''))
    const set2 = new Set(str2.split(''))


    const result = []

    for(let char of set1.values()){
       if(set2.has(char)) result.push(char)
    }
       
    return result
 }
