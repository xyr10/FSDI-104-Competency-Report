// Object literal
// let myArray = [1,2,true,"Miguel"]; //array
// let myObject = { //declaring the object and assigning values
//   name: "Miguel", //property aka attributes
//   age: 26, //property
//   email: "miguel@gmail.com"  //property
//   music: ["Bad Bunny","Coldplay","Rolling Stones"] //array
// };

//object literal
let petSalon = {
    name: "Winston's Pet Salon",
    address:{
        number: 555,
        city:"Chula  Vista",
        street:"Canine Ave",
        state: "California",
        zip:"91910"
    },
    hours:{
        open:"9:00 am",
        close:"7:00 pm"
    },
    pets:[]

    };
      
// for (let i = 0; i < 0; i++){
//     myCustomers.push(i);
// }
// console.log(myCustomers);
// console.log(petSalon.pets.length); // will show the # of pets in the array
// console.log(petSalon.pets[0].name); // will show the name of Winston
// console.log(petSalon.pets[0].age);
// console.log(petSalon.pets[0].gender);
// console.log(petSalon.pets[0].service);

// console.log(petSalon.pets[1].name); // will show the name of Macy
// console.log(petSalon.pets[1].age);
// console.log(petSalon.pets[1].gender);
// console.log(petSalon.pets[1].service);

//but because of the tedious nature of the input, wouldn't it make better sense to use a For Loop?



// let myCustomers = ["Winston","Macy","Buster","Sharona"];
// let petSalon = {
//     name: "Winston's Pet Salon",
//     customer1:{
//         name: "Winston",
//         age: 9,
//         gender:"Male",
//         service: "Haircut",
//     },
//     customer2:{
//         name: "Macy",
//         age: 12,
//         gender:"Female",
//         service: "Nail Trim",
//     },
//     customer3:{
//         name: "Buster",
//         age: 15,
//         gender:"Male",
//         service: "Pet Wash",
//     },
//     customer4:{
//         name: "Sharona",
//         age: 5,
//         gender:"Female",
//         service: "Cat Bath",
//     },
// }
// console.log(myCustomers);
// console.log(petSalon);

let petID=0;
//object constructor
function Pet(n,a,g,b,s,t,o,p,v){
    this.name=n; //n is the parameter; name is the attribute or property
    this.age=a;
    this.gender=g;
    this.breed=b;
    this.service=s;
    this.type=t;
    this.owner=o;
    this.phone=p;
    this.vaccines=v;
    this.id=petID++;

}

let winston = new Pet("Winston",9,"Male","Goldendoodle","Grooming","Dog","Xyrone","808-555-5555","Parvo");
let macy = new Pet("Macy",12,"Female","Poodle Terrier","Nail Trimming","Dog","Tyler","619-555-1234","Distemper");
let buster = new Pet("Buster",15,"Male","Chihuahua","Shampoo","Dog","Anthony","510-555-1234","Bordatella");   
let sharona = new Pet("Sharona",5,"Female","Calico ","Cat Bath","Cat","Lilia","360-999-1234","Rabies");
let dogs = [winston, macy, buster, sharona];

for (let i = 0; i < petSalon.pets.length; i++) {
    let size = "small";
    if (dogs[i].weight > 10) {
        size = "large";
    }
    console.log("Pet: " + dogs[i].name)
}

// let pet1 = new Pet("Winston",9,"Male","Haircut");
// console.log(pet1);
// let pet2 = new Pet("Macy",12,"Female","Nail Trimming");
// console.log(pet2);
// let pet3 = new Pet("Buster",15,"Male","Shampoo");
// console.log(pet3);
// let pet4 = new Pet("Sharona",5,"Female","Cat Bath");
// console.log(pet4);
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputType = document.getElementById("txtType");
let inputOwner = document.getElementById("txtOwner");
let inputPhone = document.getElementById("txtPhone");
let inputVaccines = document.getElementById("txtVaccines");


function isValid(aPet){

    let valid = true; //we start assuming that the pet is valid
    if (aPet.name === "")  { //If the aPet name is empty,... 
        valid = false;         //then we want to assume false, then fill out the fields 
        inputName.classList.add("input-alert-error"); //when you click on register, it still works. So this is a failsafe method to remind the user to add an entry into the field

    if (aPet.services === "") {
        valid = false;


    }
}
    //otherwise
    return valid //note that this function has a return (I don't believe constructors has a return)

}

//register function
function register(){
    // console.log("register");
    // //get the values from the inputs
    // console.log(inputName.value);
    // //create the newPet
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputType.value,inputOwner.value,inputPhone.value, inputVaccines.value);
    if (isValid(newPet) == true)  { 

    petSalon.pets.push(newPet);
    //push the newPet obj into the array
    //display the pets into the array
    console.log(petSalon.pets);
    //displayPetCards(); //this is added in on 3.12.23 to connect the data to be displayed
    displayTable();
    //clear the form
    clearForm();
}
}
function updateInfo()
{
    document.getElementById("numberOfPets").innerHTML=petSalon.pets.length;
}
function deletePet(theId) {
    console.log("Deleting the pet", theId);
    let petIndex;
    //travel the array
    for(let i=0; i<petSalon.pets.length; i++) {
        let pet = petSalon.pets[i];
    //Find the pet's id
        if(pet.id == theId){
            let petIndex = i;
        }
    }
    petSalon.pets.splice(petIndex,1);
        //remove it from the array
    document.getElementById(theId).remove();
    updateInfo();
    }



function clearForm(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
    inputType.value="";
    inputOwner.value="";
    inputPhone.value="";
    inputVaccines.value="";
}
function init(){
    console.log("init");
    let pet1 = new Pet("Winston",9,"Male","Goldendoodle","Grooming","Dog","Xyrone","808-555-5555","Parvo");
    let pet2 = new Pet("Macy",12,"Female","Poodle Terrier","Nail Trimming","Dog","Tyler","619-555-1234","Distemper");
    let pet3 = new Pet("Buster",15,"Male","Chihuahua","Shampoo","Dog","Anthony","510-555-1234","Bordatella");   
    let pet4 = new Pet("Sharona",5,"Female","Calico ","Cat Bath","Cat","Lilia","360-999-1234","Rabies");

    petSalon.pets.push(pet1,pet2,pet3,pet4);
    // displayPetCards();
    displayTable();
    updateInfo();

}

window.onload=init;

// function Customer(name, age, gender, breed, service, type, owner, phone) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.breed = breed;
//     this.service = service;
//     this.type = type;
//     this.owner = owner;
//     this.phone = phone;
//     this.vaccines = vaccines;

// }

// var winston = new Customer(", Age, Gender", "Breed", "Service", "Type", "Owner", "Phone","Vaccines");
