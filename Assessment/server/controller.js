module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["You're Great!!", "Cool pants my guy!", "One day, you will colinize Mars.", "No one is as great as you!"];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = [
            "A Rabbit is never as fast as light",
            "Speeding is never the answer",
            "Just be yourself, sometimes",
            "A fresh start will put you on your way",
            "One ice cream is never enough",
            "Sharing is caring",
        ]

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },
    createUser: (req, res) => {
        database.push(req.body)
        res.status(200).send({success: true, info: database})
    },
    incUser: (req, res) => {
        const name = req.params.name
        for (let i=0; i<database.length; i++) {
            if (database[i].name === name) {
                database[i].power_level++
            }
        }
        res.status(200).send({success: true, info: database})
    },
    delUser: (req, res) => {
        const name = req.params.name
        for (let i=0; i<database.length; i++) {
            if (database[i].name === name) {
                database.splice(i, 1);
            }
        }
        res.status(200).send({success: true, info: database})
    }

}

const database = [
    {
        name: 'Pikachu',
        power_level:87
    },
    {   
        name: 'Bugs Bunny',
        power_level: 75
    },
    {
        name: 'Roger Rabbit',
        power_level: 67
    },
    {
        name: 'Scooby Doo',
        power_level: 93
    }
]