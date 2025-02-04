const button = document.querySelector('.button')
const inputValue = document.querySelector('.inputValue')
const name = document.querySelector('.name');
const desc = document.querySelector('.desc');
const wind = document.querySelector('.wind');
const temp = document.querySelector('.temp');
const urlApi = "https://api.openweathermap.org/data/2.5/weather?q=";
// const units= "metric";


button.addEventListener('click', function(){
    
fetch(urlApi+inputValue.value+'&appid=44b15a8581ffb6c0cc21a142f2c8c380') 
.then(response => response.json())
.then(data =>  {
    console.log(data.name)
    const nameValue = data['name'];
    const tempValue = data['main']['temp'];
    const windValue = data['wind']['speed'];
    const descValue = data['weather']['0']['description'];
    name.innerHTML = nameValue;
    temp.innerHTML = tempValue;
    wind.innerHTML = windValue;
    desc.innerHTML = descValue;
})

.catch(error => {
    console.log(error);
});

})
