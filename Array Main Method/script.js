
// this is constructor function

// function abc() {
//     this.name = "hamza";
//     this.class="Intermidiate";
//     this.batch="18";
//     this.course="Web An App Development"
// }

// let result = new abc();
// console.log(result)


// class Students{
//     constructor(name,age,course){
//       this.name = name;
//       this.age = age;
//       this.course = course;

//     }
// }
// const result = new Students("Hamza" ,"22","Web Developments",)
// console.log(result)

// class Admin extends Students{
//      constructor(name,batch){
//         super(name);
//         this.batch = batch;

//      }
// }

// const finalResult = new Admin("Ali","18")

// console.log(finalResult)


// Array.filter ka kam hota ha ke agr array ma kisi data ko jo ke aik jasi ha or buht sari ha to ose gain kerne ke lia array.filter ka method use kerte han

// const students=[
//     {name:"Hamza",age:14,batch:18},
//     {name:"Ahmed",age:22,batch:17},
//     {name:"Hassan",age:14,batch:16},
//     {name:"Anus",age:22,batch:18},
//     {name:"Hussain",age:12,batch:14},
// ]

// const getStudentDetails =students.filter((students=>students.age>=22 && students.batch==18));

// console.log(getStudentDetails);





// Array.map() 

// ka ye kam hota ha ke ye array ma mojjod Object ke under jo data hota h us ma se agr koi data ko gain kerna hota ha to Array.map() ose aik new array ma convert ker ke return ker deta ha

// const studentData=[
//     {name:"Hamza",age:20},
//     {name:"Subhan",age:14},
//     {name:"Ali",age:21}
// ];


// let getStudentDetails=studentData.map(studentData=>{
//     return{
//      userName:studentData.name,
//      userAge:studentData.age
//     }
// });

// console.log(getStudentDetails)




// jis terha kisi value ko find kerne ke lia aik normal function ma loop chala ker value find ki jati ha to pata chal jata ha value agr hoti ha to true return ho jata ha warna false return kerta haa 

// include cheak kerta ha ke array ma jis cheez ko find kia ja rha ha wo mojod ha ya nhi agr hoti ha to ye true return kerta ha warna false return kerta ha or ye case sensitive hota ha 


// const newArr=[12,14,25,24,26,25,47,78,100,];

// const cheackNumber=14;

// const isMatched=newArr.includes(cheackNumber);

// console.log(isMatched)






// find ye array ke under jo  object hota ha os ma se kisi bhi data ko find kerne ke lia use hota ha 
// find array ka wo method ha jo Array ke ilawa her type ke data pr kam kerta ha 
// find sirf Array ma mojjod object ke under data hota ha chahe wo data aik jaisa same ho aik se ziada ho mgr wo jo object ma first pr likha hota ha find sirf ose hi return kerta ha


// const findItem = students.find((students)=>students.age == 14);

// console.log(findItem)
