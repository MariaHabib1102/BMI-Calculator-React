# BMI Calculator App
![Screenshot](./screenshot.png)

# File Structure

- `index.html`: This is an automatically created file in the public folder. We just have to import the icon pack in its `<head>` tag.
- `App.js`: The `App.js` file contains the main logic of the BMI Calculator application, where the hook (`useState`) is used to manage the state of the height, weight, BMI value, and BMI text. After clicking on the “Click to Calculate BMI” button, the BMI value based on user input is calculated, and depending on this BMI value, a message is also provided to the user as feedback.
- `App.css`: This is the styling file, which makes the application more attractive. We have provided some styling attributes like coloring the text, buttons, etc. Overall, all the styling is managed through this file.

## Steps to run the application

1. Type the following command in the terminal from your VS Code IDE:
    ```bash
    npm start
    ```
2. Open the web browser and type the following URL in the address bar to see the live application:
    ```bash
    http://localhost:3000/
    ```

## The formula to calculate BMI is: 

BMI = Weight(kg)/(Height(m))^2
The category of BMI is as follows:

- Underweight: BMI < 18.5
- Normal Weight: BMI between 18.5 and 25
- Overweight: BMI between 25 and 29.9
- Obese: BMI > 30