//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {

var values = [];

for(var key in object) {
    values.push(object[key])
}
return values;
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
// intitialize empty string to hold value
var string = ""
// acccess each key in the loop using a for..in loop
for (var key in object){
// use output strong += each key plus space for iteration
    string += key + " "
}
// return all of its keys in a string
// use trim method to cut extra space
return string.trim();



}

/*
I: takes in an object
O: returns all of the keys in a single string each seperated by a space
C: use a for loop
E: 
*/

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {

// initialize an empty string to hold value
    let newString = '';

// iterate over the objects properties
for(let key in object){
// check and see if the value is a string
    if(typeof object[key] === 'string'){
//  if result is not empty, add a space before adding next value
        if(newString){           
            newString += ' ';
        }
// add the string value to the new string        
        newString += object[key];
    }

}
// return new string
     return newString
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
// check to see if the collection is an array
    if(Array.isArray(collection)){
// return array
        return 'array';
// check to see if collection is an object
    } else if ( typeof collection === 'object' && collection !== null){
// return object
        return 'object';
    }
}
//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {

// capializa the first letter of the word
// combine the capitalized letter with the rest of the wprd
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string){
// set new variable equal to the string split
    let newString = string.split(' ');
// loop through the new split string
for(let i = 0; i < newString.length; i++){
// new string iteration make first letter uppercase then add
// to string startng at [1] index
newString[i] = newString[i][0].toUpperCase() + newString[i].substr(1)
}
// return new string joined back together
return newString.join(' ');

}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
const name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
return "Welcome " + name + "!";

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
const name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
const species = object.species.charAt(0).toUpperCase() + object.species.slice(1);
return name + " is a " + species;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    // chekc to see if object.noises is an array and not an empty array
if(Array.isArray(object.noises) && object.noises.length > 0){
    // if object.noises is an array return a string spearated by spaces
    return object.noises.join(" ");
    // else if not an array return 
} else {
    return "there are no noises";
}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
// initailize a new variable and split the string into words with spaces
var wordArray = string.split(' ');
// check to see if word is included in wordArray
return wordArray.includes(word)
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
// push name onto object friends array
object.friends.push(name);
// return object
return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
// check to see if obbjet has a friends property and is an array
if (Array.isArray(object.friends)){
// iterate through the friends array
    for (let i = 0; i < object.friends.length; i++){
// check to see if name is found in the array and return true
        if (object.friends[i] === name) {
            return true
        }
    }
}
// if not return false
 return false


}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

// update the object with key and set to new value
// if key does not exist update when returned
object[key] = value
return object

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
// loop through the properties array
 for (var i = 0; i < array.length; i++){
// delete any properties on the objects array
    delete object[array[i]] 
 }
 // return object
 return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
// use a set to remove any ddoubles
// then convert back to an array
    return Array.from(new Set(array));

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}