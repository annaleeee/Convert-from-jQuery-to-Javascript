
// $('.box1 span').text('흐림')
let cloudy = document.getElementById('sunny')
cloudy.textContent = '흐림'

// let day = '토'
// $('.box2 span').text(day)
let Day = document.getElementById('day')
day.textContent = '토'

// let p31 = $('.p31').text()
// $('.box3 .p32').text(p31)
let P31 = document.querySelector('.p31')
let P32 = document.querySelector('.p32')
P32.textContent = P31.textContent

// let userName = $('.box4 .p41').text()
// $('.box4 .p42').html(`<strong>${userName}</strong>님 환영합니다`)
let P41 = document.querySelector('.p41')
let P42 = document.querySelector('.p42')
P42.textContent = P41.textContent + '님 환영합니다'

/*-------------------text, html명령_end-------------------*/

/* $('.box1').css({
    width: '50%',
    height: 300,
    backgroundColor: 'lightpink'
}) */
let Box1 = document.querySelector('.box5')
Box1.style.width = '50%'
Box1.style.height = '150px'
Box1.style.backgroundColor = 'lightpink'

/* let t = $('.box2 .p21').css('display')
// t = "none"
if(t == 'none'){
    $('.box2 .p22').css({
        border: '5px solid #000'
    })
} else{
    $('.box2 .p22').css({
        border: 0
    })
} */
let P21 = document.querySelector('.p21')
let P22 = document.querySelector('.p22')
// P21.style.display = "none"
if(P21.style.display === "none"){
    P22.style.border = '5px solid #000'
} else {
    P22.style.border = 0
}
/*-------------------css명령_end-------------------*/

/* let i = $('.box1 .p11').css('display')
// i = 'block'
if(i == 'none'){
    $('.box1 .p12').addClass('on')
} else {
    $('.box1 .p12').removeClass('on')
} */

let P11 = document.querySelector('.p11')
let P12 = document.querySelector('.p12')

P11.style.display = 'none'
if(P11.style.display === 'none'){
    function addClassName(){
        P12.classList.add('on');
        return P12;
    }
} else {
    function removeClass(){
        P12.classList.remove('on');
        return P12;
    }
}
console.log(addClassName())
console.log(removeClass())
/*-------------------class명령_end-------------------*/





