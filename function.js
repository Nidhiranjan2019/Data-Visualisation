// objects stored in array named data
const data = [
    {
        question: "What is your choice of beverage ?",
        type: 'LIST',
        options: ["Tea", "Coffee", "Soft drinks", "Water"],
        responses: ["Coffee", "Coffee", "Tea", "Soft drinks", "Coffee", "Coffee", "Water"]
    },
    {
        question: "What is your favourite travel destination ?",
        type: 'MCQ',
        options: ["England", "Australia", "UAE", "Malaysia"],
        responses: ["England" , "Norway", "England", "France", "England", "Malaysia", "UAE"]
    },
    {
        question: "Which chocolates do you like ?",
        type: 'CHECKBOX',
        options: ["Dairy milk", "Five star", "Milky bar", "Munch", "KitKat"],
        responses: [["Five star", "Milky bar", "Munch", "KitKat"],
            ["KitKat"],
            ["Five star", "Milky bar", "Munch", "KitKat"],
            ["KitKat"],
            ["Dairy milk"],
            ["Dairy milk"],
            ["Dairy milk", "KitKat"]
        ]
    }
];


for(let i=0;i<data.length;i++){                                  //for loop to iterate over each object
    let myMap = new Map();
    for(let j=0;j<data[i].options.length;j++) {                  //iterating over each option in the object

        let count = 0;                                           //variable to store the frequency count of each option
        if (data[i].type === 'CHECKBOX') {                        //responses for checkboxes are stored in array
            for (let k = 0; k < data[i].responses.length; k++) {
                for (let r = 0; r < data[i].responses[k].length; r++){
                    if (data[i].options[j] === data[i].responses[k][r])
                        count++;
                }
            }
            myMap.set(data[i].options[j], count);
        }
        else {
            for (let k = 0; k < data[i].responses.length; k++) {           //iterating over responses to find frequency
                if (data[i].options[j] === data[i].responses[k])
                    count++;
            }
            myMap.set(data[i].options[j], count);
        }
    }
        console.log(myMap);           //printing the map in console for each object

    }


