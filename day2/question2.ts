let array:number[];
array = [20,70,50,30,40,20]
array.sort()
var result = (array:number[])=>{
    console.log(array.sort((a,b)=>a-b));
}
result(array)
