
var string1 = "A man, a plan, a canal, Panama!";
var string2 = "Race car";
var string3 = "Hello, world!";
  
console.log(isPalindrome(string1));
console.log(isPalindrome(string2));
console.log(isPalindrome(string3));

function isPalindrome(string) {
    //check not empty string 
    if (string === "") {
        return "No String To Check!"
    }
    //remove special characters 
    string = string.replace(/[^a-zA-Z0-9 ]/g, '');
    //to lowercase 
    string = string.toLowerCase();
    //trim all spaces
    string = string.replaceAll(' ','');
    //check string by reverse 
    var reversed_string="";
    for(var i=string.length-1; i>=0; i--){
        reversed_string+= string[i];
    }
    if(reversed_string==string){
        return true;
    } else{
        return false;
    }
}
  
