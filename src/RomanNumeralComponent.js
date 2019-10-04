import React, {useState} from 'react';

export default function RomanNumeralComponent () {
    const [calculatedAnswer, updateAnswer] = useState("Nulla");
    const [input, updateInput] = useState("");


    const addAndConvertToRomanNumerals = (ints) => {
        /* Implement me! */
        // numTotal gets the totals for the ints array provided
        const numTotal = ints.reduce((a,b) => a +b, 0);
        // let answer because it will change as the converter goes on
        let answer = '';
        // added more keys to include the "subtracted" numerals
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

        return ints;
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