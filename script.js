function ToggleDarkMode()
{
var toggle = document.getElementById('check');

if (toggle.checked == true){
    document.querySelectorAll('.project1, .project2, .project3, .item1, .item2, .item3').forEach(element => {
        element.style.backgroundColor = '#012A4A'
       });

       document.querySelectorAll('.project1, .project2, .project3, .item1, .item2, .item3').forEach(element => {
        element.style.backgroundColor = '#012A4A'
       });

    document.querySelectorAll('p, h1, ul, li, h2, h3').forEach(element => {
        element.style.color = '#fffafa'
       });

       document.querySelectorAll('.project1, .project2, .project3, .item1, .item2, .item3, header, .projectbanner, .project2title, .project2image, .project2description, .project1image img, .project2image img, .project3image img, #bild').forEach(element => {
        element.style.borderColor = 'grey'
       });


       
}
else{

    document.querySelectorAll('.project1, .project2, .project3, .item1, .item2, .item3').forEach(element => {
        element.style.backgroundColor = '#F1FAEE'
       });

    Array.from(document.querySelectorAll('p, ul, li, h1, h2, h3')).forEach(element => {
        element.style.color = 'black'
       });

       document.querySelectorAll('#dms').forEach(element => {
        element.style.color = '#fffafa';
    })
}
}

