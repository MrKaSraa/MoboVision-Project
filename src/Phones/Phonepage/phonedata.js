
import {AiFillApple} from 'react-icons/ai'
import {AiFillAndroid}from 'react-icons/ai'
let appledata=[

    {
    id:1,
    image:'images/81.jpg',title:'Xs Max ',
    text:'  ایفون Xs با طراحی و ظاهری کاملا متفاوت با دیگر گوشی های سری آیفون ظاهر شده است. با توجه به اینکه نمایشگر... ',
    icon:<AiFillApple className='apple-icon' />,
    textfoot1:'64 گیگ',textfoot2:'$100',textfoot3:'شبکه 4G',
  
    },


    { 
    id:2,
    image:'images/121.jpg',title:'12 Pro Max',
    text:'   ایفون۱۲ نظیر طراحی جذاب، اتصال کامل 5G، دوربین‌های خوب و عملکرد پردازشی بهتر از هر گوشی اندرویدی نیز باعث می‌شود... ',
    icon:<AiFillApple className='apple-icon' />,
    textfoot1:'256 گیگ',textfoot2:'$160',textfoot3:'شبکه 5G',
  },


    {  
    id:3,
    image:'images/141.jpg',title:'13 Pro Max',
    text:'  از نظر زبان طراحی آیفون 12 و 13 پرو مکس هیچ تفاوتی ندارند اما این گوشی همچنان جزو یکی از زیباترین گوشی موبایل است... ',
    icon:<AiFillApple className='apple-icon' />,
    textfoot1:'256 گیگ',textfoot2:'$200',textfoot3:'شبکه 5G',
  },
]


 let samsungdata=[

    {
    id:4,
    image:'images/s201.jpg',title:'Galaxy S20',
    text:'  S20 با اینکه گوشی فوق ­العاده­ ایه اما جزء گوشی­ های پرچم­دار سامسونگ به حساب نمیاد. تمام کمپانی ­ها تو محصولات پرچم ­دارشون  ... ',
    icon:<AiFillAndroid className='apple-icon' />,
    textfoot1:'128 گیگ',textfoot2:'$130',textfoot3:'شبکه 4G',
    
    },


    {  
    id:5,   
    image:'images/s211.jpg',title:'Galaxy S21',
    text:'     گوشی سامسونگ S21 Ultra  با بهره گیری از پردازنده قدرتمند Exynos 2100 ساخته خود کمپانی سامسونگ و دوربین خاص ... ',
    icon:<AiFillAndroid className='apple-icon' />,
    textfoot1:'256 گیگ',textfoot2:'$160',textfoot3:'شبکه 5G',
  },


    {   
    id:6, 
    image:'images/s22.jpg',title:'Galaxy S22',
    text:'   گل سرسبد این سری از پرچمدارای سامسونگ اس ۲۲ اولترا محسوب میشه. این گوشی نه فقط نسبت به نسل قبل، بلکه نسبت به بقیه گوشی ها... ',
    icon:<AiFillAndroid className='apple-icon' />,
    textfoot1:'256 گیگ',textfoot2:'$200',textfoot3:'شبکه 5G',

  },
]

let swiperdata=[
  {img:'images/81.jpg',title:'Xs Max',discount:'30% تخفیف',id:1,icon:<AiFillApple className='apple-icon' />},
  {img:'images/121.jpg',title:'12 Pro Max',discount:'50% تخفیف',id:2,icon:<AiFillApple className='apple-icon' />},
  {img:'images/s22.jpg',title:'Galaxy S22',discount:'50% تخفیف',id:6,icon:<AiFillAndroid className='apple-icon' />},
  {img:'images/s211.jpg',title:'Galaxy S21',discount:'40% تخفیف',id:5,icon:<AiFillAndroid className='apple-icon' />},
  {img:'images/s201.jpg',title:'Galaxy S20',discount:'20% تخفیف',id:4,icon:<AiFillAndroid className='apple-icon' />},
  {img:'images/141.jpg',title:'13 Pro Max',discount:'50% تخفیف',id:3,icon:<AiFillApple className='apple-icon' />},
]


export {samsungdata,appledata,swiperdata}