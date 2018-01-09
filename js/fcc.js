//fcc.js
// Collection of the various Free code Camp exercise and algorithms. 
// Listed as the Basic Scripting Algorithms and Intermediate


function diffArray(arr1, arr2) {
  // Returns an array containing the difference in the two supplied arrays

  var newArr = [];
  var tempArr1 = []; 
  var tempArr2 = [];
  // Same, same; but different.
  tempArr1 = arr1.filter(function checkVal(value) {
    return arr2.indexOf(value) < 0;
  });
  tempArr2 = arr2.filter(function checkVal(value) {
    return arr1.indexOf(value) < 0;
  });
  newArr = tempArr1.concat(tempArr2);
  return newArr;
}
  
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


function reverseString(str) {
  var strArr = str.split();
  console.log(strArr);
  return str.split('').reverse().join('');
}

reverseString("hello");


function factorialize(num) {
  var total = 1;
  for (var i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
}

factorialize(5);



function palindrome(str) {
  // Good luck!
  var regexp = /[\W_]/g;
  var normalStr = str.toLowerCase().replace(regexp, '');
  var reverseStr = normalStr.split('').reverse().join('');
  return reverseStr === normalStr;
}

palindrome("eye");



function findLongestWord(str) {
  var longest = 0;
  var strArr = str.split(' ');
  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i].length > longest) {
      // New Longest!
      longest = strArr[i].length;
    }
  }
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val){
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

titleCase("I'm a little tea pot");



function largestOfFour(arr) {
  // You can do this!
   
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var largest = 0;
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largest) {
        // New Largest!
        largest = arr[i][j];
      }
      
    }
    newArr.push(largest);
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);



function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var strArr = str.split('');
  
  
  var ending = str.substring(str.length - target.length);
  
  if (ending === target) {
    return true;
  }
  return false;
}

confirmEnding("Bastian", "n");


function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num < 0) {
    return "";
  }
  
  return str.repeat(num);
}

repeatStringNumTimes("abc", 3);


function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length < num) {
    // No elipsis needed
    return str;
  } else if (str.length == num) {
    return str;
  } else if (num < 3) {
    return str.slice(0, num) + "...";
  }
  return str.slice(0, num - 3) + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);



function chunkArrayInGroups(arr, size) {
  // Break it up.
  // Array slice will chop the array up.
  // Functionally, we want to grab every nth set of elements and 
  // copy them to a new array as an array.
  var newArr = [];
  
  for (var i = 0; i < arr.length; i+= size) {
    //. Loop over the existing array
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);



function slasher(arr, howMany) {
  // it doesn't always pay to be first
  arr.splice(0,howMany);
  
  return arr;
}

slasher([1, 2, 3], 2);


function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) === -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);


function destroyer(arr) {
  // Remove all the values
  var args = Array.prototype.slice.call(arguments);
  
  for (i=0; i < arr.length; i++) {
    for (j=0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);



function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  // Determine if "num" is between array elements
   arr.sort(function(a, b) {
    return a - b;
  });
  for (i=0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    } 
  }
  return arr.length;
}

getIndexToIns([2, 5, 10], 15);


function rot13(str) { // LBH QVQ VG!
  return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");


function convertToRoman(num) {
    // The two arrays contain corresponding numbers to roman numerals
    var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    var romanNumeral = '';

    for (var i = 0; i < numbers.length; i++) {
        while (numbers[i]<= num) {
            romanNumeral += romans[i];
            num -= numbers[i];
        }
    }

    
    return romanNumeral;
}

convertToRoman(36);
