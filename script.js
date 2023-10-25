const data = [
    {
        name: "Kiss Elvira",
        age: 35,
        pets: ["Mirci", "Aranyka", "Blue"],
        mostRecentPurchase: {
            price: 28000,
            color: "red"
        }
    },
    {
        name: "Joe Lincoln",
        age: 46,
        pets: ["Book", "Saffron", "Swift"],
        mostRecentPurchase: {
            price: 12500,
            color: "purple"
        }
    },
    {
        name: "Botond Anna",
        age: 71,
        pets: ["Buksi", "Kócos", "Zafír"],
        mostRecentPurchase: {
            price: 11000,
            color: "brown"
        }
    },
    {
        name: "Tiszta Béla",
        age: 50,
        pets: ["Lala", "Tyutyu", "Noé"],
        mostRecentPurchase: {
            price: 29500,
            color: "green"
        }
    },
    {
        name: "Lisa Grün",
        age: 42,
        pets: ["Cincin", "Mike", "Cutie"],
        mostRecentPurchase: {
            price: 25000,
            color: "white"
        }
    },
    {
        name: "Nagy Márk",
        age: 63,
        pets: ["Pati", "Nyuszkó", "Ritka", "Fahéj"],
        mostRecentPurchase: {
            price: 16000,
            color: "orange"
        }
    },
    {
        name: "Szamosi Magda",
        age: 28,
        pets: ["Tinta", "Pintyő", "Miazka"],
        mostRecentPurchase: {
            price: 22500,
            color: "pink"
        }
    },
    {
        name: "Háros Gusztáv",
        age: 34,
        pets: ["Kacat", "Holvagy", "Sánti"],
        mostRecentPurchase: {
            price: 25600,
            color: "grey"
        }
    },
    {
        name: "Kovács Lujza",
        age: 79,
        pets: ["Matyi", "Mázli", "Mókás"],
        mostRecentPurchase: {
            price: 1500,
            color: "yellow"
        }
    },
    {
        name: "Káposz Tamás",
        age: 67,
        pets: ["Bunkó", "Bóka", "Bandita", "Bajnok"],
        mostRecentPurchase: {
            price: 30000,
            color: "purple"
        }
    }
]

for (let i = 0; i < data.length; i++) {
    if (data[i].age >= 60 && data[i].mostRecentPurchase.purchase >= 20000) {
    console.log (data[i])
    }
}

function addTwoNumbers (number1, number2) {
    let result = number1 + number2
    return result
}

const addTwoNumbersResult = addTwoNumbers(1, 2)
console.log ( "AddTwoNumbers: ", addTwoNumbersResult)

function concatenateArray ( array) {
    
    /*let result = ""
    array.forEach((string) => {
        result += string
        console.log(result)
    });  */

    let result = array.join("")
    return result
}

const arrayOfStrings = [ "kismacska", "codecool", "javascrift", "vizsga", "wednesday"]

const concatArray = concatenateArray(arrayOfStrings)
console.log(concatArray)

function getOldPeople (arrayOfPeople, minimumAge) {
    let result = []
    arrayOfPeople.map((person) => {
        if (person.age >= minimumAge) {
            result.push(person.name)
        }
    })
    return result
}

console.log(getOldPeople (data, 50))

function getRichPeople (arrayOfPeople, minimumValue) {
    let result = arrayOfPeople.filter((person) =>person.mostRecentPurchase.price > minimumValue)
    return result
}

const richPeople = getRichPeople(data, 20000)
console.log (richPeople)

function goodRecommendation (arrayOfPeople, newOffer){
    let result = []
    for (let i = 0; i< arrayOfPeople.length; i++) {
        if (arrayOfPeople[i].mostRecentPurchase.color === newOffer.color && arrayOfPeople[i].mostRecentPurchase.price > newOffer.price) {
            result.push (arrayOfPeople[i]["name"])
        }

    }    
   //result = arrayOfPeople.filter ((person) => person.mostRecentPurchase.price > newOffer.price && person.mostRecentPurchase.color === newOffer.price)
    return result
}

const newOffer1 = {
    color: "purple",
    price: 20000
}

const newOffer2 = {
    color: "red",
    price: 15000
}
const goodRecommendations = goodRecommendation(data, newOffer1)
console.log (goodRecommendations)

