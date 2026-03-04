function convert(){
    var from_unit = document.getElementById('from_unit').value;
    var to_unit = document.getElementById('to_unit').value;
    var temperature_input = parseFloat( document.getElementById('temperature_input').value);
    
    if (isNaN(temperature_input)) {
    alert("Please enter a valid numeric temperature.");
    return;
}
    var converted_value;
    var result_unit;

    //performing converstion
    switch(from_unit){
        case'C':
          if( to_unit == 'F'){
            converted_value = (temperature_input*9/5)+32;
            result_unit = '°F';
          }
          else if( to_unit == 'K'){
            converted_value = temperature_input + 273.15;
            result_unit = 'K';
          }
          else{
            converted_value = temperature_input;
            result_unit = '°C';
          }
          break;

        case'F':
          if( to_unit == 'C'){
            converted_value = ((temperature_input - 32)*5)/9;
            result_unit = '°C';
          }
          else if( to_unit == 'K'){
            converted_value = (((temperature_input - 32)*5)/9)+273.15;
            result_unit = 'K';
          }
          else{
            converted_value = temperature_input;
            result_unit = '°F';
          }
          break;

        case'K':
          if( to_unit == 'F'){
            converted_value = ((temperature_input-273.15)*(9/5))+32;
            result_unit = '°F';
          }
          else if( to_unit == 'C'){
            converted_value = temperature_input - 273.15;
            result_unit = '°C';
          }
          else{
            converted_value = temperature_input;
            result_unit = 'K';
          }
          break;
    }

    document.getElementById('result').value = converted_value.toFixed(2)+ ' ' +result_unit;
}