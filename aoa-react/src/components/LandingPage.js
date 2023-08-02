import React,{ useState , useEffect } from 'react';
import BcAsset from '../assets/BcAsset.png';
import asasayLogo from '../assets/asasayLogo.png';
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import Getform from './SwitchForm';



function Landingpage(signins) {
    const primaryColor = "#79C750";
    const [signin, setSignup] = useState(signins)
    useEffect(()=>{
        setSignup(signins)
        console.log("signin",signin)
    })
    const [text,setText]=useState('Create Account');
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    function onClicked(){
        console.log('create account was pressed');
        if(text==='Create Account'){
            setText('Login')
        }else{
            setText('Create Account')
        }
    
    }
    
    function handleSignup() {
       setSignup(true);
       console.log("yyyy")

    }

    
    function handleSignin() {
        setSignup(false);
        console.log("xxxx")
     }
 
    
        
    return (
        <div className="container-fluid " style={{ minHeight: "100vh" }}>
            <div className="row" style={{ minHeight: "100vh" }}>
                 <div className="rounded col-md-6 p-2"  style={{ backgroundColor: primaryColor }}>
                    <h1 className="p-3"style={{ color: "#ffffff" }}>
                    Experience First Ever Decentralized Asset Management and It’s Marketplace
                    </h1>                
                    <img className="img-fluid mx-auto d-block" src={BcAsset} alt="file"></img>  
                 <div>
                  </div>
                  <div className='col-md-6 text-white'>
                </div>
                </div>
                <div className="rounded col-md-1"></div>
                <div className="rounded col-md-4 p-2">
                <img className="img-fluid mx-auto d-block" style={{width: "65%"}} src={asasayLogo} alt="file"></img>               
                {<Getform issigned= {signin ? 1:0}/>}
                 <div>
                  </div>
                  <div className='col-md-6 text-white'>
                </div>
                </div>
           
            </div>
        </div>
    );
};

export default Landingpage;