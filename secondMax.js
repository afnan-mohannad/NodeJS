console.log(secondMax([1,5, 2]));
console.log(secondMax([-1, -5, 2]));
console.log(secondMax([-3, -2, -7]));
function secondMax(arr, arr_size) {
        let i;
        let max = second = -2454635434;
   
        // There should be atleast two elements
        if (arr_size < 2) {
            document.write(" Invalid Input ");
            return;
        }
   
        // finding the max element
        for (i = 0;i<arr_size;i++){
            if (arr[i]>max){
                max = arr[i];
            }
        }
   
        // Now find the second max element
        for (i = 0 ;i<arr_size;i++){
            if (arr[i]>second && arr[i]<max){
                second = arr[i];
            }
        }
  
        if (second == -2454635434){
             
        document.write("There is no second max element<br>");
        }
        else{
            document.write("The second max element is " + second);
                return;
            }
        }
