// function displayFooterInfo(){
    //click on the button and display the info
    //on the footer
//     document.getElementById("information").innerHTML=`
//     <p>Welcome to ${petSalon.name}!</p>
//     <p>It is located at ${petSalon.address.number} ${petSalon.address.street}, ${petSalon.address.city}, ${petSalon.address.state} ${petSalon.address.zip}</p>
//     <p>It is open from ${petSalon.hours.open} to ${petSalon.hours.close}</p>
//     `;
// }
// console.log(displayFooterInfo);

//here, what we'll do is build the receiver of the input info to store and display on the site

function displayPetCards(){
    //get the Div for the html element
    const DIV = document.getElementById("pets");

    //next step is to travel in the array
    let card = ""; //this is so you can pass the string into the card
    for (let i=0; i< petSalon.pets.length; i++) {
        let pet = petSalon.pets[i];

        card += `
        <div class= "pet">
        <h5>${pet.name}</h5>
        <p>Age:${pet.age}</p>
        <p>Age:${pet.gender}</p>
        <p>Age:${pet.breed}</p>
        <p>Age:${pet.service}</p>
        <p>Age:${pet.type}</p>
        <p>Age:${pet.owner}</p>
        <p>Age:${pet.phone}</p>
        </div>
        `;
        // now that you built the card, display it with the console.log
        console.log(card); 
    }
    DIV.innerHTML = card;
}

function displayFooterInfo(){
    // click on the button and display the info
    // on the footer
    document.getElementById("petCustomers").innerHTML=`
    <p>Welcome to ${petSalon}!</p>
    <p>The names of our customers are ${myCustomers.name}</p>
    `;
}
