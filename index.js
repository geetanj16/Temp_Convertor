const calculateTemp = () => {
    const inputTemp = document.getElementById("temp").value;

    const tempSelected = document.getElementById("temp_diff");

    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;


    // Celcius To Fahrenheit
    const celtoFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celcius

    const fahtoCel = (fah) => {
        let celcius = ((fah - 32) * 5 / 9).toFixed(1)
        return celcius; 
    }



    if(valueTemp == "cel"){
        document.getElementById("result").innerHTML=celtoFah(inputTemp) + "&#176; Fahrenheit"; 
    }

    else{
        document.getElementById("result").
        innerHTML =fahtoCel(inputTemp) + "&#176; Celcius"; 
    }
}