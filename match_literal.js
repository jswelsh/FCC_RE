/* 
Using regexes like /coding/, you can 
look for the pattern "coding" in another string.

This is powerful to search single strings, but it's 
limited to only one pattern. You can search for 
multiple patterns using the alternation or OR 
operator: |.

This operator matches patterns either before or after it.
For example, if you wanted to match "yes" or "no", 
the regex you want is /yes|no/.

You can also search for more than just two patterns. 
You can do this by adding more patterns with more 
OR operators separating them, like /yes|no|maybe/.

Complete the regex petRegex to match the 
pets "dog", "cat", "bird", or "fish".
*/

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

console.log(result)

/* 
Up until now, you've looked at regexes to do literal matches of strings. But sometimes, you might want to also match case differences.

Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Examples of uppercase are "A", "B", and "C". Examples of lowercase are "a", "b", and "c".

You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag. You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can match the strings "ignorecase", "igNoreCase", and "IgnoreCase".

Write a regex fccRegex to match "freeCodeCamp", no matter its case. Your regex should not match any abbreviations or variations with spaces. 
*/
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);
