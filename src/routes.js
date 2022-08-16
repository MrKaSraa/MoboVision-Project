
import Home from './Home/Home.jsx'
import Allusers from './Allusers/Allusers'
import Phones from './Phones/Phones.jsx'
import Phonepage from './Phones/Phonepage/Phonepage.jsx'
import Login from './Login/Login'
import Register from './Login/Register'
import Emailbox from './Emailbox/Emailbox'
import Notif from './Not built/Notif'
import Complaint from './Not built/Complaint'
const routes =[
   {
         path:'/Dashboard' ,element:<Home/>
   },
   {
      path:'/Users' ,element:<Allusers/>
   },
   {
      path:'/' ,element:<Phones/>
   }, 
    {
      path:'/phones/:phoneid' ,element:<Phonepage/>
   },  
   {
      path:'/Login' ,element:<Login/>
   },
   {
      path:'/Register' ,element:<Register/>
   },
   {
      path:'/Emailbox' ,element:<Emailbox/>
   },
   {
      path:'/Notif' ,element:<Notif/>
   },
   {
      path:'/Complaint' ,element:<Complaint/>
   },
  
]


export default routes