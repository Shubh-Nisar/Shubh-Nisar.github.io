document.getElementById('btn').addEventListener('click', calculate);
document.getElementById('cardBlock').style.visibility = 'hidden';
function calculate(e)
{
    e.preventDefault();
    document.getElementById('cardBlock').style.visibility = 'visible'
    heightInput = document.getElementById('heightInput').value;
    heightInput = heightInput / 100;
    weightInput = document.getElementById('weightInput').value;
    let bmiValue = weightInput / (heightInput*heightInput);
    
    if(bmiValue > 0 && bmiValue <= 18.5)
    {
        document.querySelector('#cardBlock').classList.add('bg-danger');
        document.getElementById('outputBMI').innerHTML = bmiValue;
        document.getElementById('notice').innerHTML = 'Under Weight!';
    }
    else if(bmiValue >18.5 && bmiValue <=24.9)
    {
        document.querySelector('#cardBlock').classList.remove('bg-danger');
        document.querySelector('#cardBlock').classList.remove('bg-info');
        document.querySelector('#cardBlock').classList.add('bg-success');
        document.getElementById('outputBMI').innerHTML = bmiValue;
        document.getElementById('notice').innerHTML = 'Normal Weight!';
    }
    else if(bmiValue >24.9 && bmiValue <= 29.9)
    {
        document.querySelector('#cardBlock').classList.remove('bg-danger');
        document.querySelector('#cardBlock').classList.add('bg-info');
        document.getElementById('outputBMI').innerHTML = bmiValue;
        document.getElementById('notice').innerHTML = 'Over Weight!';
    }
    else if(bmiValue > 29.9){
        document.querySelector('#cardBlock').classList.add('bg-danger');
        document.getElementById('outputBMI').innerHTML = bmiValue;
        document.getElementById('notice').innerHTML = 'Obese!';
    }
    else{
        document.querySelector('#cardBlock').classList.add('bg-danger');
        document.getElementById('outputBMI').innerHTML = bmiValue;
        document.getElementById('notice').innerHTML = 'Fill details!';
    }
}