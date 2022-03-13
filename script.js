function ToggleDarkMode()
{
var toggle = document.getElementById('check');

if (toggle.checked == true){
    document.querySelectorAll('.project1, .project2, .project3, .item1, .item2, .item3').forEach(element => {
    element.style.backgroundColor = '#343A40'
    });

    document.querySelectorAll('header, .projectbanner, .stackused').forEach(element => {
        element.style.backgroundColor = '#212529'
    })

    document.querySelectorAll('p, h1, ul, li, h2, h3').forEach(element => {
        element.style.color = '#fffafa'
        });

    document.querySelectorAll('#dms').forEach(element => {
        element.style.color = '#fffafa'
    })

    document.querySelectorAll('.project1, .project2, .project3, .item1, .item2, .item3, header, .projectbanner, .project2title, .project2image, .project2description, .project1image img, .project2image img, .project3image img, #bild').forEach(element => {
        element.style.borderColor = 'grey'
        }); 
    
    document.querySelector('#lightbuttontext').innerHTML = "Dark";

    
    document.querySelector('#linkedinimg').src="./images/linkedinlight.svg";
    document.querySelector('#githubimg').src="./images/githublight.svg"
    var body = document.getElementsByTagName('body')[0];
    body.style.background = '#232526';
    body.style.background = '-webkit-linear-gradient(to right, #414345, #232526)';
    body.style.background = 'linear-gradient(to right, #414345, #232526';
}
else{
    document.querySelectorAll('.project1, .project2, .project3, .item1, .item2, .item3').forEach(element => {
        element.style.backgroundColor = '#C9CBCC'
       });

       document.querySelectorAll('.project1, .project2, .project3, .item1, .item2, .item3, header, .projectbanner, .project2title, .project2image, .project2description, .project1image img, .project2image img, .project3image img, #bild').forEach(element => {
        element.style.borderColor = 'none'
        }); 

       document.querySelector('#lightbuttontext').innerHTML = "Light";

    Array.from(document.querySelectorAll('p, ul, li, h1, h2, h3')).forEach(element => {
        element.style.color = 'black'
       });

       document.querySelectorAll('header, .projectbanner, .stackused').forEach(element => {
        element.style.backgroundColor = '#A6ACAF'
    })

    document.querySelector('#linkedinimg').src="./images/linkedindark.svg";
    document.querySelector('#githubimg').src="./images/githubdark.svg"

    var body = document.getElementsByTagName('body')[0];
    body.style.background = '#485563';
    body.style.background = '-webkit-linear-gradient(to right, #29323c, #485563)';
    body.style.background = 'linear-gradient(to right, #29323c, #485563)';

    document.querySelectorAll('header').forEach(element => {
        element.style.borderBottom = 'groove';
    })

    document.querySelectorAll('.projectbanner, .project1, .project2, .project3').forEach(element => {
        element.style.borderTop = 'groove';
    })

    console.log(screen.width);



    if (screen.width < 800){
        document.querySelectorAll('.project2, .item2').forEach(element => {
        element.style.borderRight = 'none',
        element.style.borderLeft = 'none';

        document.querySelector('.item1').style.borderBottom = 'groove';
        document.querySelector('.item2').style.borderBottom = 'groove';
        })
    }
    else {
        document.querySelectorAll('.item2, .project2').forEach(element => {
            element.style.borderRight = 'groove',
            element.style.borderLeft = 'groove';
        })
    }
    
    
}
}

