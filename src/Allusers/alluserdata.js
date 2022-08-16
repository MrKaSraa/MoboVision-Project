
let newMembers = [
    {
        id: 1,
        username: 'Mohammad Amin',
        title: 'Web Developer',
        img:'images/profile.jfif'
    },
    {
        id: 2,
        username: 'Sasas Moq',
        title: 'Seo Eng',
        img:'images/profile.jfif'
    },
    {
        id: 3,
        username: 'Zahra Agayi',
        title: 'Weblog',
        img:'images/profile.jfif'
    },
    {
        id: 4,
        username: 'Qadir Yolme',
        title: 'Hacker',
        img:'images/profile.jfif'
    },
]

let transactions = [
    {
        id: 1,
        customer: 'Qadir Yolme',
        date: '12 Jun 2022',
        amount: 123,
        status: 'Approved',
        img: 'images/profile.jfif'
    },
    {
        id: 2,
        customer: 'Amin Saeedi',
        date: '23 Jul 2022',
        amount: 123,
        status: 'Declined',
        img: 'images/profile.jfif'
    },
    {
        id: 3,
        customer: 'Mohammad Qol',
        date: '28 May 2022',
        amount: 123,
        status: 'Pending',
        img: 'images/profile.jfif'
    },
    {
        id: 4,
        customer: 'Sasan Moq',
        date: '1 Feb 2022',
        amount: 123,
        status: 'Approved',
        img: 'images/profile.jfif'
    },
]

let userRows = [
    {
        id: 1,
        username: 'Reza Bahrami',
        avatar: 'images/tree1.jpg',
        وضعیت: 'خرید',
        مقدار: '$129.52',
        ایمیل: 'reza@gmail.com'
    },
    {
        id: 2,
        username: 'Amir Vahidi',
        avatar: 'images/flowers.jpg',
        وضعیت: 'خرید',
        مقدار: '$110',
        ایمیل: 'amir@gmail.com'
    },
    {
        id: 3,
        username: 'Saman Abedi',
        avatar: 'images/sea.jpg',
        وضعیت: 'فروش',
        مقدار: '$98',
        ایمیل: 'saman@gmail.com'
    },
    {
        id: 4,
        username: 'Zahra Zare',
        avatar: 'images/takhthjamshid.jpg',
        وضعیت: 'خرید',
        مقدار: '$0',
        ایمیل: 'zahra@gmail.com'
    },
    {
        id: 5,
        username: 'Hosein Soltani',
        avatar: 'images/moon.jpg',
        وضعیت: 'فروش',
        مقدار: '$55.98',
        ایمیل: 'hosein@gmail.com'
    },
    {
        id: 6,
        username: 'Mammad Ghorbani',
        avatar: 'images/tree1.jpg',
        وضعیت: 'فروش',
        مقدار: '$129.52',
        ایمیل: 'mammad@gmail.com'
    },
    {
        id: 7,
        username: ' Maryam Homayoon',
        avatar: 'images/flowers.jpg',
        وضعیت: 'خرید',
        مقدار: '$110',
        ایمیل: 'maryam@gmail.com'
    },
    {
        id: 8,
        username: 'Reza Amirpoor',
        avatar: 'images/sea.jpg',
        وضعیت: 'خرید',
        مقدار: '$98',
        ایمیل: 'reza@gmail.com'
    },
    {
        id: 9,
        username: 'Shahin Saeedi',
        avatar: 'images/takhthjamshid.jpg',
        وضعیت: 'خرید',
        مقدار: '$0',
        ایمیل: 'shahin@gmail.com'
    },
    {
        id: 10,
        username: 'Yousef Zare',
        avatar: 'images/moon.jpg',
        وضعیت: 'فروش',
        مقدار: '$55.98',
        ایمیل: 'yousef@gmail.com'
    },
    {
        id: 11,
        username: 'Vahid Pakravan',
        avatar: 'images/tree1.jpg',
        وضعیت: 'خرید',
        مقدار: '$129.52',
        ایمیل: 'vahid@gmail.com'
    },
    {
        id: 12,
        username: 'Sara Hoseini',
        avatar: 'images/flowers.jpg',
        وضعیت: 'فروش',
        مقدار: '$110',
        ایمیل: 'sara@gmail.com'
    },
    {
        id: 13,
        username: 'Mona Zare',
        avatar: 'images/sea.jpg',
        وضعیت: 'خرید',
        مقدار: '$98',
        ایمیل: 'mona@gmail.com'
    },
    {
        id: 14,
        username: 'Iliya Khaledi',
        avatar: 'images/takhthjamshid.jpg',
        وضعیت: 'خرید',
        مقدار: '$0',
        ایمیل: 'iliya@gmail.com'
    },
    {
        id: 15,
        username: 'Hosein Mahini',
        avatar: 'images/moon.jpg',
        وضعیت: 'فروش',
        مقدار: '$55.98',
        ایمیل: 'hosein@gmail.com'
    },
    {
        id: 16,
        username: 'Mammad Omidi',
        avatar: 'images/tree1.jpg',
        وضعیت: 'فروش',
        مقدار: '$129.52',
        ایمیل: 'mammad@gmail.com'
    },
    {
        id: 17,
        username: ' Abbas Moradi',
        avatar: 'images/flowers.jpg',
        وضعیت: 'فروش',
        مقدار: '$110',
        ایمیل: 'abbas@gmail.com'
    },
    {
        id: 18,
        username: 'Faeze Amirpoor',
        avatar: 'images/sea.jpg',
        وضعیت: 'خرید',
        مقدار: '$98',
        ایمیل: 'faeze@gmail.com'
    },
    {
        id: 19,
        username: 'Shahrokh Zare',
        avatar: 'images/takhthjamshid.jpg',
        وضعیت: 'خرید',
        مقدار: '$0',
        ایمیل: 'shahrokh@gmail.com'
    },
    {
        id: 20,
        username: 'Hamed Razi',
        avatar: 'images/moon.jpg',
        وضعیت: 'فروش',
        مقدار: '$55.98',
        ایمیل: 'hamed@gmail.com'
    }
]

export {  newMembers, transactions, userRows }