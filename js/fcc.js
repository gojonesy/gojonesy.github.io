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


function whatIsInAName(collection, source) {
  var sourceKeys = Object.keys(source);

  // Filter the collection
  return collection.filter(function (obj) {
    for (var i = 0; i < sourceKeys.length; i++) {
        if (!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
            return false;
        }
    }
    return true;
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })


function myReplace(str, before, after) {
    if (before.charAt(0) == before.charAt(0).toUpperCase()) {
        // Before is uppercase, make sure after is uppercase
        afterArr = after.split('');
        afterArr.splice(0,1, after.charAt(0).toUpperCase());
        after = afterArr.join('');
    }
    var strArr = str.split(" ");
    //console.log(strArr);

    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i] == before) {
            // Before term present. Replace with after term
            console.log("Before present: " + strArr[i]);
            strArr.splice(i, 1, after);
        }
    }

    str = strArr.join(' ');
    return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");


function translatePigLatin(str) {
    // if first letter is a vowel, just append "ay"
    // If the second letter is a vowel, move the first letter to the end and append ay
    // Otherwise, move everything prior to the first vowel to the end, and then append ay
    var vowels = ['a','e','i','o','u'];
    var strArr = str.split('');
    
    // Find the index of the first vowel:
    for (j = 0; j < strArr.length; j++) {
        for (i = 0; i < vowels.length; i++) {
            if (strArr[j] === vowels[i]) {
                
                // Get all letters prior to the vowel and remove them from the array
                var counter = 0;
                while (counter < strArr.indexOf(strArr[j])) {
                    strArr.push(strArr[0]);
                    strArr.splice(0,1);
                    counter ++;
                }
                if (counter == 0) {
                    strArr.push('way');
                } else {
                    strArr.push('ay');
                }
                
                // Add "ay" to the end:
                return strArr.join('');
            }
        }
    }
}

translatePigLatin("california");


function pairElement(str) {
    var pairMap = {T:'A', A:'T', G:'C', C:'G'};
    strArr = str.split('');

    for (var i=0; i < strArr.length; i++) {
        strArr[i]=[strArr[i], map[strArr[i]]];
    }
  return strArr;
}

pairElement("GCG");


function fearNotLetter(str) {
    for( i=0; i < str.length; i++) {
        var code = str.charCodeAt(i);

        if (code !== str.charCodeAt(0) + i) {
            return String.fromCharCode(code-1);
        }
    } 
    return undefined;
}

fearNotLetter("abce");


function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if(typeof(bool) == typeof(true)){
    return true;
  }
  return false;
}

booWho(null);


function uniteUnique(arr) {
    var newArr = [];

    // Loop through the args first. We accept any amount of args.
    for(i = 0; i < arguments.length; i++) {

        // Now loop through the first supplied arg, that should be an array
        for(j = 0; j < arguments[i].length; j++) {

            // Is the value in the new array already?
            if (newArr.indexOf(arguments[i][j]) < 0) {
                newArr.push(arguments[i][j]);
            }
        }
    }
    return newArr;
}

function convertHTML(str) {

    str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
    return str;
}

convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos")
convertHTML('Stuff in "quotation marks"')


function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var re = /\s+|_+/g;

  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  return str.replace(re, '-').toLowerCase();
  
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap")
spinalCase("AllThe-small Things")


function sumFibs(num) {
  var counter = 0;
  var currentCount = 1;
  var sum = 0; // The first two numbers are always 1 and 1.
  while (currentCount <= num) {
    if (currentCount % 2 !== 0) {
        // Number is odd. Add it to the sum
        sum+=currentCount;
    }
    currentCount += counter;
    counter = currentCount - counter;
  }
  return sum;
}

sumFibs(1000);

function sumPrimes(num) {
    // Create a sieve of Eratoshtenes
    var sieve = [], primes = []
    for (i = 2; i <= num; i++) {
        if (!sieve[i]) {
            primes.push(i);
            for (j = i << 1; j <= num; j +=i) {
                sieve[j] = true;
            }
        }
    }

    // Sum the primes
    var sum = 0;
    for (p = 0; p < primes.length; p++) {
        sum += primes[p];
    }
    return sum;
}

sumPrimes(10);
sumPrimes(977);


function smallestCommons(arr) {
    var range = [];
    for (i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
        range.push(i);
    }  

    var lcm = range[0];
    for (i = 1; i < range.length; i++) {
        var GCD = gcd(lcm, range[i]);
        lcm = (lcm * range[i]) / GCD;
    }
    return lcm

    function gcd(x, y) {
        // Implements the Euclidean Algorithm
        if (y === 0)
            return x;
        else
            return gcd(y, x%y);
    }
}

smallestCommons([1,5]);

function findElement(arr, func) {
  var num;
  // This doesn't work. Have to iterate over the array and test every num. Then, only return the first one.
  //num = arr.filter(func);
  for(var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
        num = arr[i];
        return num;
    }
    
  }
  return num;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })

function dropElements(arr, func) {
  // Drop them elements.
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func): arr.length, arr.length);
}
dropElements([1, 2, 3, 4], function(n) {return n > 5;});
dropElements([1, 2, 3], function(n) {return n < 3; });
dropElements([0, 1, 0, 1], function(n) {return n === 1;});
dropElements([1, 2, 3, 4], function(n) {return n > 5;});
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;});
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});



function steamrollArray(arr) {
  // I'm a steamroller, baby
  var flatArray = [];

  var flat = function(arg) {
    if (!Array.isArray(arg)) {
        flatArray.push(arg);
    } else {
        for (var a in arg) {
            flat(arg[a]);
        }
    }
  }
  arr.forEach(flat);
  return flatArray;
}

steamrollArray([1, [2], [3, [[4]]]]);


function binaryAgent(str) {
    
    var binArr = str.split(" ");
    var binCode = [];

    for (i = 0; i < binArr.length; i++) {
        binCode.push(String.fromCharCode(parseInt(binArr[i], 2).toString(10)));
    }
    return binCode.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

function truthCheck(collection, pre) {
  // Is everyone being true?
  var trueCount = 0;

  for (var i in collection) {
    if (collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])) {
        trueCount++;
    }
  }
  return counter == collection.length;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


function addTogether() {
    var checkNum = function(num) {
        if (typeof num !== 'number') {
            return undefined;
        } else {
            return num;
        }
    };

    if (arguments.length > 1) {
        var a = checkNum(arguments[0]);
        var b = checkNum(arguments[1]);
        if (a === undefined || b === undefined) {
            return undefined;
        } else {
            return a + b;
        }
    } else {
        // Only one agrument passed. Return a function
        var c = arguments[0];
        if (checkNum(c)) {
            return function(arg2) {
                if (c === undefined || checkNum(arg2) === undefined) {
                    return undefined;
                } else {
                    return c + arg2;
                }
            };
        }
    }
}

addTogether(2,3);

function telephoneCheck(phoneNumber) {
  var regExp = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
  var phone = phoneNumber.match(regExp);
  if (phone) {
    alert('yes');
    return true;
  }
  alert('no');
  return false;
}