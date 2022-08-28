// x = " ";
// for(i=0;i<2;i++)
// {
//     for(j=0;j<5;j++)
//     x+="* ";
//     x+='\n';
// }
// console.log(x)

// * * * * * 
// * * * * * 

// --------------------------------------------------------


// x = "";
// for(i=1;i<2;i++)
// {
//     for(j=0;j<5;j++){
//     x+="* ";
//     x+='\n';}
// }
// console.log(x)

// * 
// * 
// * 
// * 
// * 
// --------------------------------------------------

// x = "";
// for(i=0;i<5;i++)
// {
//     for(j=0;j<=i;j++)
//     x+="* ";
//     x+='\n';
// }

// console.log(x);

// * 
// * * 
// * * * 
// * * * * 
// * * * * * 
// ------------------------------------------------

// x = "";
// for(i=5;i>0;i--)
// {
//     for(j=0;j<i;j++)
//     x+="* ";
//     x+='\n';
// }

// console.log(x);

// * * * * * 
// * * * * 
// * * * 
// * * 
// * 
// ------------------------------------------

// x = "";
// for(i=0;i<=5;i++)
// {
//     for(j=0;j<i;j++)
//     x+="* ";
//     x+='\n';
// }

// console.log(x);

// * * * * * 
// * * * * 
// * * * 
// * * 
// * 
// ------------------------------------------

// x = "";
// for(i=0;i<5;i++)  //row
// {
//     for(j=0;j<1;j++) //col
//     x+="*  ";
//     x+='\n';
// }

// console.log(x);

// * * * * * 
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// ----------------------------------------

// x = "";
// for(i=0;i<=5;i++)
// {
//     for(s=0;s<=i-1;s++){
//         x+= (" ")
//     }
//     for(j=1;j<=1;j++){
//         x+="* ";
//     }
   
//     x+='\n';
// }

// console.log(x);
// * 
//  * 
//   * 
//    * 
//     * 
//      * 
// ---------------------------------------


// x= '';
// for(i=5;i>4;i--)
// // for(i=0;i<=5;i++)
// {
//     for(j=0;j<5;j++)
//     // for(j=0;j<5-i+0;j++)
  
//     x+='*  ';
//     x+='\n'
// }
// console.log(x)


// let x = [20,50,40,80,100,1000]
// let y=0
// length=x.length

// for (let i = 0; i <length; i++) {
//     if(y<=x[i])
//     y=x[i]
    
// }
// document.write(y)

// let shanu=[10,20,30,40]
// length=shanu.length
// let a=0;
// for(i=0;i<length;i++){
//     if(a<=shanu[i])
//     a=shanu[i]
// }
// document.write(a)


// let e =[100,200,300,400]
// length= e.length
// // let s=0;
// // for(i=0;i<length;i++){
// //     if(s<=e[i])
// //     s=e[i]
// // }
// document.write(s[2])

// 

// person =[100,500,200,400]
// length=person.length

// a = 0;
// for(i=0;i<length;i++){
//     if(a<=person[i])
//     a=person[i]
// }

// document.write(a)



// rahul=[20,40,60,80,90]
// length=rahul.length
// a=0;
// for(i=0;i<length;i++){
//     if(a<=rahul[i])
//     a=rahul[i]
// }
// document.write(a)

// shanu=
// {
//     name:"shanu",
//     dob:"16-08-1998",
//     address:"bhopal",
//     city:"patna"
// }

// console.log(shanu.name)


// var arr = [20,40,60,80,90];

// var smallest = arr.sort();

// console.log(smallest[0]);


// var arr = rahul=[20,40,60,80,90,100]

// var smallest = arr.indexOf(100);

// console.log(smallest);

// var shanu = [10,20,100,12,40]
// length=shanu.length
// console.log(length)

// var shanu = shanu.reverse()
// var shanu = shanu.indexOf(12)
// console.log(shanu)

// function reverseString(s){
//     return s.split("").reverse().join("");
// }
// x=reverseString(" Shanu");//"olleH"
// y=reverseString("Hello This Is me prashant");//"olleH"
// console.log(x)
// console.log(y)

//Linear search of an array-----------------------------------------------------------------------------------------


// var list = [5,12,6,1,20,1,1,9]
// var count =0;
// length=list.length;
// console.log(length)
//  var item =50;
// for (let index = 0; index <length; index++) {
//     if(item==list[index]){
//         count ++;
//         console.log("found")
//     }else{
//         console.log("not found")
//     }
    
// }console.log(count)

// var list = [5,12,6,1,20,1,1,9]
// var count =0;
// length=list.length;
// console.log(length)
//  var item =20;
// for (let index = 0; index <length; index++) {
//     if(item==list[index])
//        count++;
// }
//   if(count>0)
//     console.log("found")
//   else
//     console.log("not found")
//     console.log(`item found ${count} tyme`)
  


// var list = [5,12,6,20,1,1,]
// var count =0;
// length=list.length;
// console.log(length)
//  var item =1;
// for (let index = 0; index <length; index++) {
//     if(item==list[index]){
//        count++;
//        break;
//     }
// }
//   if(count>0)
//     console.log("found")
//   else
//     console.log("not found")
//     console.log(`item found ${count} tyme`)
//     console.log("item found " + count + " tyme")
var list =[5,6,2,1,4] 
var temp;

// for(i=0;i<list.length-2;i++)
// {
//     for(j=i+1;j<list.length-1;j++)
//     if(list[i]>list[j])
//     {
//         temp=list[i];
//         list[i]=list[j];
//         list[j]=temp;
//     }
// }console.log(list)


// console.log(age.sort().reverse)

// function countDown(n) {
//     for (let i = n; i>0; i--){
//         console.log(i)
//     }
//     console.log("shanu")

// }

// function countDownRecursive(n) {
//     if (n<= 0) {
//         console.log("shanu")
//         return
//     }
//     console.log(n)
//     countDownRecursive(n-1)
// }


    







// let p = x-y;
// let m = x/y;
// let l = x*y;

// console.log(z)
// console.log(p)
// console.log(l)
// console.log(m)









let shanu = [10,20,30,40];
length=shanu.length;
// shanu.push(92);
// shanu.pop();
// let kumar=shanu.indexOf(40)
// shanu.sort();
// let k=shanu.reverse()
// shanu.splice(0,2)
// let k=shanu.join(0)
// let k=shanu.slice(1,3)
// console.log(k);
// console.log(`The index of ${kumar}`);
