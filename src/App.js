import React, { useState } from 'react'; 
import './App.css'; 

function BMICalculator() {
    const [heightValue, setHeightValue] = useState("");
    const [weightValue, setWeightValue] = useState("");
    const [BMIValue, setBMIValue] = useState("");
    const [BMIMessage, setBMIMessage] = useState("");

    const calculateBMI = () => {
        if (heightValue && weightValue) {
            let height = heightValue / 100;
            let bmi = weightValue / (height * height);
            setBMIValue(bmi.toFixed(2));

            if (bmi < 18.5) {
                setBMIMessage("You are underweight");
            } else if (bmi >= 18.5 && bmi < 25) {
                setBMIMessage("You have normal weight");
            } else if (bmi >= 25 && bmi < 29.9) {
                setBMIMessage("You are overweight");
            } else {
                setBMIMessage("You are obese");
            }
        } else {
            setBMIValue("");
            setBMIMessage("");
        }
    };

    return (
		<div style={{width: "50%", height: "50%", marginLeft: "25%", marginRight: "50%"}}>

            <h1>BMI Calculator</h1>
            <label htmlFor='height'>Please enter your height (cm)</label>
            <input 
                type='number' 
                value={heightValue} 
                id='height' 
                onChange={(e) => setHeightValue(e.target.value)} 
            />
            <label htmlFor='weight'>Please enter your weight (kg)</label>
            <input 
                type='number' 
                value={weightValue} 
                id='weight' 
                onChange={(e) => setWeightValue(e.target.value)} 
            />
            <button onClick={calculateBMI} className='button'>Calculate BMI</button>
            {BMIValue && (
                <div className="result"> 
                    <p>Your BMI: <span className="bmi-value">{BMIValue}</span></p> 
                    <p>Result: <span className="bmi-message">{BMIMessage}</span></p> 
                </div> 
			
            )}
			
        </div>
    );
}

export default BMICalculator;
