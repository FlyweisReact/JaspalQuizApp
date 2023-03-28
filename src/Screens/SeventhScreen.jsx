import React from 'react';
import img12 from "../Images/17.png";
import {useParams, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';

const SeventhScreen = ()=>{

    const navigate = useNavigate();
    const {id} = useParams();
    const [quiz, setQuiz] = useState();
    console.log(id);
    const url = `https://g2vpnbtr2b.execute-api.ap-south-1.amazonaws.com/dev/api/v1/topics/${id}`;
    const getQuizzes = async (url)=>{
        const token = JSON.parse(localStorage.getItem("token"));
        try{
            const response = await axios.get(url,
                {
                    headers:{Authorization:`Bearer ${token}`}
                }    
            );
            console.log(response.data.data.quizLists);
            setQuiz(response.data.data.quizLists);
        }catch(err){
            console.log(err.message);
        }
    }
    //console.log(quiz);

    useEffect(()=>{
        getQuizzes(url);
    },[])
 //   console.log(id);
    return(
        <>
            <div className="sixth-top-cont">
                <h3 style={{textAlign:'center', 'padding-top':'5px'}}>Quiz List</h3>
            </div>
            <div className="rest-sixth-body">
                {
                    quiz?.map((item)=>{
                       // console.log(item);
                        return (
                            
                            <div onClick={()=>navigate(`/categories/${item._id}`)}>
                                <img src={img12}  alt="" />
                                <p>{item.quizName}</p>
                            </div>
                        )
                    })
                }
             
            </div>
        </>
    )
}

export default SeventhScreen;