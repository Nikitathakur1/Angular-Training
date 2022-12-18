class item{
    itemid: number;
    itemname : string;
    itemprice:number;
    category : string;
}

var i = new Item();
i = (itemid:12,itemname:"nikita",itemprice:20000,category:"dress")=>{
    console.log(i.itemid);
    console.log(i.itemname);
    console.log(i.itemprice);
    console.log(i.category);
}

console.log(i.itemid);
console.log(i.itemname);
console.log(i.itemprice);
console.log(i.category);