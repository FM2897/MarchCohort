// //1.From you understanding of array create an array with 15 items inside
// 2.From the array just created in the above question remove the last item in the array. You cannot alter the original array.
// 3.Add an item to the end of the list. Cannot alter the original array
// 4.Find the position of the first item, middle item and last item of the list and print them off separately.
// 5.Modify 3 items in the array and print them off

var foodArray = ["risotto", "ravioli", "dumpling", "soup", "pasta bake", "lasagne", "casserole","roast chicken", "rice", "roasted vegtables", "fried eggs", "pancakes", "chips", "crosssaint", "cinamon roll"]

console.log(foodArray.length)

foodArray.pop()
console.log(foodArray)

foodArray.push("soufflé")
console.log(foodArray)

console.log(foodArray [0])
console.log(foodArray[7])
console.log(foodArray[foodArray.length-1])

foodArray[3] = "tart" 
foodArray[6] = "cake"
foodArray[9] ="pain au cholocat"

console.log(foodArray)