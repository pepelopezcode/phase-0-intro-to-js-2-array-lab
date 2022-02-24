// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    const newCats = [...cats, name]
    return newCats
}
function prependCat(name){
    const newCats = [name, ...cats]
    return newCats
}
function removeLastCat(){
    const lastCat = (cats.length - 1)
    const newCats = cats.slice(0,lastCat)
    return newCats
}
function removeFirstCat(){
    const lastCat = (cats.length)
    const newCats = cats.slice(1, lastCat)
    return newCats
}