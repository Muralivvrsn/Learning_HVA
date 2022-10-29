// declaration section
let name,cel,far;
const load=document.getElementById('class-load');
const videoArray = ['Nature.mp4','Rainy.mp4','Sheet.mp4','Snowflakes.mp4','Summer.mp4','Sunrise.mp4'];
const apiKey='8c88d8c6dff2e7dd93338bd93db8a4e2';
const key='27941359-4734624c8d28c40a87b08699f';
const body=document.getElementById('root');
const input = document.getElementById('input');
const main = document.getElementById('main');
const celcius = document.getElementById('cel');
const foreign = document.getElementById('far');
const details = document.getElementById('details');
const button = document.getElementById('btn-search');
const climate = document.getElementById('climate');
const change = document.getElementById('change');
function getDetails(name){
    let url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${name}`;
    load.style.display='block';
    main.style.display='none';
    let  data = fetch(url).then(response => response.json()).then(data => {
        console.log(data);
        if(data['success']==false){
            alert(data['error'].info)
        }
        else{
            let Query=data['current'].weather_descriptions[0];
            let api = `https://pixabay.com/api/?key=${key}&q=${Query}&image_type=photo`
            let image = fetch(api).then(response1=>response1.json()).then(Data =>{
                console.log(Data)
                let imgurl = Data['hits'];
                if(Object.keys(imgurl).length===0)
                body.style.background='url(seasons.jpg) no-repeat center center fixed';
                else{
                    let imageurl = imgurl['0'];
                    body.style.background=`url(${imageurl['largeImageURL']})`+'no-repeat center center fixed';
                    body.style.backgroundSize='cover';
                }
            })
            cel= data['current'].temperature
            far= Math.floor(((data['current'].temperature)*1.8)+32)
            let detailsOfcity = `<p>${data['request'].query}</p><p>${data['location'].lat}</p><p>${data['location'].lon}</p><p>${data['location'].localtime}</p>`
            details.innerHTML = detailsOfcity;
            climate.innerHTML = data['current'].weather_descriptions[0];
            change.innerHTML = cel;
            main.style.display='block';
        }
        load.style.display='none';
        input.value="";
    })
}
input.addEventListener('keypress',function(e){
    if(e.key=='Enter')
    inputTaken();
})
button.addEventListener('click', function(){inputTaken()});
function inputTaken(){
    name = input.value;
    console.log(name);
    getDetails(name);
}
function changeToCelcius(){
    change.innerHTML = `${cel}`;
    celcius.style.fontWeight = 'bolder';
    foreign.style.fontWeight = '100';
}
function changeToFarenhiet(){
    change.innerHTML = `${far}`;
    celcius.style.fontWeight = '100';
    foreign.style.fontWeight = 'bolder';
}
celcius.addEventListener('click', changeToCelcius);
foreign.addEventListener('click', changeToFarenhiet);