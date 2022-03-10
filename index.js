console.log('Loki');

const loki = require('lokijs');

const db = new loki('adatok.data');

/**
hal{
    -id
    -halfaj
    -tomeg (g)
} 

 */

db.loadDatabase({}, () =>{
    let halaim = db.getCollection("halak");
    if(halaim === null ){
        halaim = db.addCollection("halak");
    }


    const elsoHal = {
        id: 2, //uuid kellene
        halfaj: "csuka",
        tomeg: 1900
    }

    halaim.insert(elsoHal);

    /**
    collection memória 
    db -> fizikai cucc(file itt) 
    */

    const pontyok = halaim.find({halfaj: "ponty"});
    console.table(pontyok);

    const ponty = halaim.findOne({halfaj: "ponty"});
    console.log(ponty);

    halaim.remove(ponty);  //egyet töröl csak

    db.saveDatabase(err =>{
        if(!err){
            return console.log('Mentés sikeres')
        }
        //hiba ág
    });  //Nem így kell menteni


});