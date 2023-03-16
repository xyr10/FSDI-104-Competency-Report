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


function displayTable() {
    //get the table for the html element
    const TABLE = document.getElementById("petTable"); //best practice to use all uppercase for a constant
     //travel the array
            let tr = "";
     for (let i=0; i<petSalon.pets.length; i++)
    {
    let pet = petSalon.pets[i];
    //creat the tr
       
    tr +=`

        <tr id="${pet.id}">
            <td>${pet.name}</td>
            <td>${pet.age}</td>            
            <td>${pet.gender}</td>            
            <td>${pet.breed}</td>       
            <td>${pet.service}</td>  
            <td>${pet.type}</td>  
            <td>${pet.owner}</td>      
            <td>${pet.phone}</td>     
            <td>${pet.vaccines}</td> 
            <td><button onclick="deletePet(${pet.id});">🗑️</button></td>
        </tr>
    `;
    }
    TABLE.innerHTML = tr;
}