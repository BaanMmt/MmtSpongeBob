const HomePage = document.querySelector('#articleKhane');
const btnHome = document.querySelector('.btnKhane');
const textBio = document.querySelector('.bio');

const MoshakhasatPage = document.querySelector('#articleMoshakhasat');
const btnMoshakhasat = document.querySelector('.btnMoshakhast');

const JostejutPage = document.querySelector('#articleJosteju');
const btnJosteju = document.querySelector('.btnJosteju');

const TamashaPage = document.querySelector('#articleTamasha');
const btnTamasha = document.querySelector('.btnTamasha');

const PorofailPage = document.querySelector('#articlePorofail');
const btnPorofail = document.querySelector('.btnPorofail');


btnHome.classList.add('btnNav')
HomePage.classList.remove('hidden')

btnHome.addEventListener('click' , () => {
    btnHome.classList.add('btnNav');
    HomePage.classList.remove('hidden');

    const pages = [MoshakhasatPage, TamashaPage, PorofailPage, JostejutPage];
    const btns = [btnMoshakhasat, btnTamasha, btnPorofail, btnJosteju];
    pages.forEach(page => {
        page.classList.add('hidden')
    })
    btns.forEach(btn => {
        btn.classList.remove('btnNav')
    })

    
})

btnMoshakhasat.addEventListener('click', ()=> {
    MoshakhasatPage.classList.remove('hidden');
    btnMoshakhasat.classList.add('btnNav');

    const pages = [HomePage, TamashaPage, PorofailPage, JostejutPage];
    const btns = [btnHome, btnTamasha, btnPorofail, btnJosteju];
    pages.forEach(page => {
        page.classList.add('hidden')
    })
    btns.forEach(btn => {
        btn.classList.remove('btnNav')
    })

})

btnJosteju.addEventListener('click', () => {
    JostejutPage.classList.remove('hidden');
    btnJosteju.classList.add('btnNav');

    const pages = [HomePage, TamashaPage, PorofailPage, MoshakhasatPage];
    const btns = [btnHome, btnTamasha, btnPorofail, btnMoshakhasat];
    pages.forEach(page => {
        page.classList.add('hidden')
    })
    btns.forEach(btn => {
        btn.classList.remove('btnNav')
    })
})
btnTamasha.addEventListener('click', () => {
    TamashaPage.classList.remove('hidden')
    btnTamasha.classList.add('btnNav')

    const pages = [HomePage, MoshakhasatPage, PorofailPage, JostejutPage];
    const btns = [btnHome, btnMoshakhasat, btnPorofail, btnJosteju];
    pages.forEach(page => {
        page.classList.add('hidden')
    })
    btns.forEach(btn => {
        btn.classList.remove('btnNav')
    })
})

btnPorofail.addEventListener('click', () => {
    PorofailPage.classList.remove('hidden')
    btnPorofail.classList.add('btnNav')

    const pages = [HomePage, MoshakhasatPage, TamashaPage, JostejutPage];
    const btns = [btnHome, btnMoshakhasat, btnTamasha, btnJosteju];
    pages.forEach(page => {
        page.classList.add('hidden')
    })
    btns.forEach(btn => {
        btn.classList.remove('btnNav')
    })
})

textBio.innerHTML = `درود من ممت هستم <br>
دارم تلاش میکنم برنامه نویسی یاد بگیرم
<br>
هفته ای یبار هم میام یه قسمت از سریال باب اسفنجی رو میبینم و تو کانال تلگرامیم منتشرش میکنم
با خودم گفتم تلاش کنم سایتشو هم بسازم آنلاین بتونین این سریالو دنبال کنید
<br>
پس برای همین قسمت به قسمت تو گوگل درایو هم فایل ها رو آپلود میکنم
<br>
چون واسه این کار فضای ذخیره سازی مناسبی بشمار میاد همم ویدیو پلیر خوبی داره
<br>
پس بدونین فایل ها تو گوگل درایو آپلود شده
<br>
جلوی نام هر قسمت یک دکمه قرار دادم به نام !click وقتی روش کلیک کنین از سایت یا خود اپلیکیشن گوگل درایو قسمت ها رو مشاهده کنین
<br>
میتونین کیفیت دلخواه خودتون رو هم برای تماشا تنظیم کنید
<br>
و همچنین به آسونی دانلودش کنید.
<br>
اینجا رو هم اگه میشه به دوستاتون معرفی کنید
<br>
سپاس!
`;

