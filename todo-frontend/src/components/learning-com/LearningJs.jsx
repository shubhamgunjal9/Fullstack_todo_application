import React from 'react';

const person = {
    name : "shubham gunjal",
    address : {
        line : "lane 3B",
        buiding : "Atharva Building",
        colony : "shahu colony",
        area : "karve nagar",
        city : "pune",
        state : "maharashtra",
        country : "india"
    },
    profiles : ["twitter","instagram","linkedin","facebook"],
    printprofiles : () =>{
        console.log(person.profiles[0])
        console.log(person.profiles[1])
        console.log(person.profiles[2])
        console.log(person.profiles[3])
    }
}

export default function LearningJs() {
    person.printprofiles();
    return(
        <>  
            <h1>{person.name} lives at</h1>
            <h2>{person.address.line}</h2>
            <h4>{person.address.area}</h4>
        </>
    )
}
