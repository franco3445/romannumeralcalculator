import React, {useState} from 'react';

export default function RomanNumeralComponent () {
    const [calculatedAnswer, updateAnswer] = useState("Nulla");
    const [input, updateInput] = useState("");


    const addAndConvertToRomanNumerals = (ints) => {
        // numTotal gets the totals for the ints array provided
        let numTotal = ints.reduce((a,b) => a +b, 0);
        // return Nulla if sum is zero as per instructions
        if (numTotal === 0) {
            return "Nulla";
        }
        // let answer because it will change as the converter goes on
        let answer = '';
        // added more keys to include the "subtracted" numerals
        // needing to go from high to low in order to get the correct "roman syntax"
        const numeralKey = [
            "M",
            "CM",
            "D",
            "CD",
            "C",
            "XC",
            "L",
            "XL",
            "X",
            "IX",
            "V",
            "IV",
            "I"
        ];
        // added values to match key above
        const numeralValues = [
            1000,
            900,
            500,
            400,
            100,
            90,
            50,
            40,
            10,
            9,
            5,
            4,
            1
        ]
        // loop through numeralValues to compare to numTotal
        for(let i =0; i < numeralValues.length; i++){
            while(numeralValues[i] <= numTotal) {
                // As we compare, we subtract the value of the numerals we are adding to our answer
                numTotal -=numeralValues[i];
                answer += numeralKey[i];
            }
        }
        return answer;
    }

    const addNumbers = (inputString) => {
        const numbersStringArray = inputString.split(",");
        const numbers = numbersStringArray.map((numberAsString) => { return parseInt(numberAsString, 10) })

        /* numbers is an array of ints. E.g. [1, 2, 3] */
        const answer = addAndConvertToRomanNumerals(numbers)

        return answer;
    }

    const handleChange = (event) => {
        updateInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const answer = addNumbers(input);
        updateAnswer(answer);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label style={{paddingRight: "10px"}}>
                    <span style={{paddingRight: "10px"}}>Numbers (separated by commas):</span>
                    <input type="text" name="input-form" onChange={handleChange}/>
                </label>
                <input type="submit" value="Add Numbers" />
            </form>
            <div>Answer in Roman Numerals: {calculatedAnswer}</div>
        </div>
    )
}