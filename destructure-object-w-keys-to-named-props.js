/*
Object entries creates an array with an array for every object. Propertyvalues are returned as array items. 
Using map we destructure every array grabbing the first el, calling it id and the second calling it visible. 
Then an object is returned where the value is assigned every key.
*/

let someObj = {3AK2 8AAC: true, 3AK2 57FW: false}
Object.entries(someObj).map(([id, visible]) => ({ id, visible })) // [{id: "3AK2 8AAC", visible: true},{id: "3AK2 57FW", visible: false}]

