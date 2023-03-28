import React from 'react';
import axios from 'axios';

const Terms = ()=>{
    const [terms_txt, setTerms_txt] = React.useState('');

    const getTerms = async()=>{
        try{
            const response = await axios.get("https://g2vpnbtr2b.execute-api.ap-south-1.amazonaws.com/dev/api/v1/terms/");
           // console.log(response.data.data[0].terms);
            setTerms_txt(response?.data?.data?.[0]?.terms);

        }catch(err){
            console.log(err.message);
        }
    }
    
    React.useEffect(()=>{
        getTerms();
    },[])

    return (
       <>
        <div className="sixth-top-cont">
            <h3 style={{ textAlign: "center", "padding-top": "5px" }}>
                Terms and Services
            </h3>
        </div>
        <div className="help-text">
                {terms_txt}
             
        </div>
      </>
    )
}

export default Terms;