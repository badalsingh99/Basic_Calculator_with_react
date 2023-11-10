import './Demo.css';
import {useState} from 'react';
const Calculator=()=>{
    const[data,setData]=useState({fn:"",opt:"",res:""});
    const handleNo=(e)=>{       
        setData({...data,res:data.res+e.target.value});
    }
    const handleOpt=(e)=>{
        setData({fn:data.res,res:"",opt:e.target.value});
    }

    const handleEql=()=>{
        const a=Number(data.fn);
        const b=Number(data.res);
        let r="";
        switch(data.opt)
        {
            case "+" : r=a+b;
                        break;
            case "-" : r=a-b;
                        break;
            case "*" : r=a*b;
                        break;
            case "/" : r=a/b;
                        break;
            
        }
        setData({res:r,fn:"",opt:""});
    }
        //console.log("before return : ",data);
        return(
            <div className='container' align="center">

            
            <h2>Calculate Here!</h2> <br />
            

            <input className='border border-dark rounded-4' type="text" readOnly value={data.res} /> <br />
            
            <input className='border border-dark rounded-4' type="button" value="1" onClick={handleNo} />
            <input className='border border-dark rounded-4' type="button" value="2" onClick={handleNo} />
            <input className='border border-dark rounded-4' type="button" value="3" onClick={handleNo} />
            <input className='border border-dark rounded-4' type="button" value="4" onClick={handleNo} /> <br />
            <input className='border border-dark rounded-4' type="button" value="5" onClick={handleNo} />
            <input className='border border-dark rounded-4' type="button" value="6" onClick={handleNo} />
            <input className='border border-dark rounded-4' type="button" value="7" onClick={handleNo} />
            <input className='border border-dark rounded-4' type="button" value="8" onClick={handleNo} /> <br />
            <input className='border border-dark rounded-4' type="button" value="9" onClick={handleNo} />
            <input className='border border-dark rounded-4' type="button" value="0" onClick={handleNo} />

            <input className='border border-dark rounded-4' type="button" value="+" onClick={handleOpt} />
            <input className='border border-dark rounded-4' type="button" value="-" onClick={handleOpt} /> <br />
            <input className='border border-dark rounded-4' type="button" value="*" onClick={handleOpt} />
            <input className='border border-dark rounded-4' type="button" value="/" onClick={handleOpt} />

            <input className='border border-dark rounded-4' type="button" value="=" onClick={handleEql} />
            <input className='border border-dark rounded-4' type="button" value="CLR" onClick={()=>setData({fn:"",opt:"",res:""})} />
            

            </div>
            
          
    );
}
export default Calculator;