import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';

const Privacy = ()=>{

    const [privacy_txt, setPrivacy_txt] = useState('');

    const getPrivacy = async()=>{
        try{
            const response = await axios.get("https://g2vpnbtr2b.execute-api.ap-south-1.amazonaws.com/dev/api/v1/privacy");
            console.log(response.data.privacy.privacy);
            setPrivacy_txt(response?.data?.privacy?.privacy);

        }catch(err){
            console.log(err.message);
        }
    }
    
    useEffect(()=>{
        getPrivacy();
    },[])

    return (
       <>
        <div className="sixth-top-cont">
            <h3 style={{ textAlign: "center", "padding-top": "5px" }}>
            Privacy Policy
            </h3>
        </div>
        <div className="help-text">
                {privacy_txt}
             
        </div>
      </>
    )
}

export default Privacy;