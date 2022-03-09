function ToggleDarkMode()
{
var toggle = document.getElementById('check');

if (toggle.checked == true){
    document.querySelectorAll('.project1, .project2, .project3, .item1, .item2, .item3').forEach(element => {
        element.style.backgroundColor = '#012A4A'
       });

    document.querySelectorAll('p, h1, ul, li, h2, h3').forEach(element => {
        element.style.color = 'white'
       });
}
else{

    document.querySelectorAll('.project1, .project2, .project3, .item1, .item2, .item3').forEach(element => {
        element.style.backgroundColor = '#F1FAEE'
       });

    Array.from(document.querySelectorAll('p, h1, ul, li, h2, h3')).forEach(element => {
        element.style.color = 'black'
       });
}
}

