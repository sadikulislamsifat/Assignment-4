

// problem_1 radian to degree start 


function  radianToDegree(num){
    if( typeof(num) != 'number'){
        return "Enter a valid numeric value";
    }
    let degree_value = parseFloat( (num*57.2958).toFixed(2) );
    return degree_value;
 }
 console.log(radianToDegree(10));
// problem_1 radian to degree end 



// problem_2 isJavasript file start 
function isJavaScriptFile (str){
    if( typeof(str) != 'string'){
        return "Enter a valid string";
    }
    let len = str.length;
    len--;
    if( str[len] == 's' && str[len-1] == 'j' && str[len-2] == '.'){
        return true;
    }
    else{
        return false ;
    }
}
 console.log(isJavaScriptFile("index.js"));
// problem_2 isJavasript file end 



// problem_3 couunt oilPrice start
function  oilPrice (dejel,octen,petrol){
    if( typeof( dejel) != 'number' || typeof(octen) !='number' || typeof(petrol) != 'number' ){
        return "Enter a valid Numeric value";
    }
    let total = (dejel*114)+(octen*130)+(petrol*135);
    return total;
}
// console.log(oilPrice(0,2,0));
// problem_3 couunt oilPrice end


// problem_4 count publicBusFare start 
 function  publicBusFare(pssenger){
     if( typeof(pssenger) != 'number' ){
        return "Enter a valid numeric value";
     }
    let remainder = pssenger % 50 % 11;
    return remainder*250;
 }
//  console.log(publicBusFare(235));
// problem_4 count publicBusFare end 


// problem_5 find BestFriend start 

 function isBestFriend(obj1,obj2){
    if( typeof( obj1) != 'object' || typeof(obj2) != 'object' ){
        return "Enter an valid object input";
    }
     if(obj1.name == obj2.friend && obj1.friend == obj2.name){
        return true;
     }
     else{
        return false;
     }
 }
// problem_5 find BestFriend end */