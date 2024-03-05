let chart = document.querySelector("#chart").getContext('2d');

// create new chart 

new Chart(chart , {
    type:'line',
    data:{
labels : ['Jan' , 'Feb' , 'Mar' , 'Apr' , 'May' , 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec' ],

  datasets : [
    {
        label : 'BTC',
        data : [29374 , 33537 , 49631 , 59095 , 57828 
            ,36684 , 33572 , 39974 , 48847 , 48116 , 61004,48659],
        borderColor : 'red',
        borderWidth : 2
    },

    {
        label : 'EHT',
        data : [31500 , 41000 , 88800 , 26000 , 46000 
            ,32698 , 5000 , 3000 , 18656 , 24832 , 36844,75648],
        borderColor : 'blue',
        borderWidth : 2
    },
    {
        label : 'RIP',
        data : [65500 , 32000 , 43800 , 14000 , 75000 
            ,65698 , 54000 , 39000 , 34656 , 24832 , 75844,12648],
        borderColor : 'green',
        borderWidth : 2
    }
  ]

    },
    options : {
        responsive : true
    }
})


let menuBtn =document.querySelector('#menu-btn');
let closeBtn =document.querySelector('#close-btn');
let sidebar =document.querySelector('aside');

menuBtn.addEventListener('click' , () => {
    sidebar.style.display='block';
});

closeBtn.addEventListener('click' , () => {
    sidebar.style.display = 'none';
})


// change theme

let themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click' , () => {

   document.body.classList.toggle('dark-theme')

})

// dropdown
let Drop= document.querySelector('.drop');
let dropDown = document.querySelector('.drop-down');


Drop.addEventListener('click' , () => {
    setTimeout( ()=> { dropDown.classList.toggle('activee')},200)
    
   
})



