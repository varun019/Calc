import './App.css';
import {useState,useEffect} from 'react';
function App() {
    const [result,
        setResult] = useState("")
        const[theme,setTheme] = useState("light");
        const toggleTheme  = () =>{
          if(theme === 'light'){
            setTheme('dark');
          }
          else{
            setTheme('light')
          }
        }
        useEffect(()=>{
          document.body.className = theme;
        },[theme])
        const onSubmits = (e)=>{
          e.preventDefault()
        }
    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }
    const clear = () => {
        setResult("");
    }
    const backSpace = () => {
        setResult(result.slice(0, -1));
    }
    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch (err) {
            setResult("Error");
        }
    }
    return (
        <div className={'App ${theme}'}>
            <form onSubmit={onSubmits}>
                <h2 className='mt-5'>Calculator</h2>
                <div className="form-check form-switch slider fs-4" onClick={toggleTheme}>
                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                </div>

                <input type='text' className='text-end fs-4' placeholder='0' value={result}/>
            </form>
            <div className="calc">
                <div className='row-1'>
                    <button
                        type='button'
                        onClick={clear}
                        className='rounded-2 btn btn-danger' style={{marginRight:'14px',width:"60px"}}>AC</button>
                    <i className="fa-solid fa-delete-left back" style={{fontSize:'47px'}} onClick={backSpace}></i>
                    <button
                        name='/'
                        type='button'
                        onClick={handleClick}
                        className='button rounded-2 fs-5 opr division'>&divide;</button>
                    <button
                        name='%'
                        type='button'
                        onClick={handleClick}
                        className='button rounded-2 fs-5 opr division'>%</button>
                </div>
                <div>
                <button
                        name='7'
                        type='button'
                        onClick={handleClick}
                        className='button rounded-2 fs-5 digit'>7</button>
                    <button
                        name='8'
                        type='button'
                        onClick={handleClick}
                        className='button rounded-2 fs-5 digit'>8</button>
                    <button
                        name='9'
                        type='button'
                        onClick={handleClick}
                        className='button rounded-2 fs-5 digit'>9</button>
                         <button
                        name='*'
                        type='button'
                        onClick={handleClick}
                        className='button rounded-2 fs-5 opr'>x</button>
                </div>
                <div>
                <button
                        name='4'
                        type='button'
                        onClick={handleClick}
                        className='button rounded-2 fs-5 digit'>4</button>
                    <button
                        name='5'
                        type='button'
                        onClick={handleClick}
                        className='button rounded-2 fs-5 digit'>5</button>
                    <button
                        name='6'
                        type='button'
                        onClick={handleClick}
                        className='button rounded-2 fs-5 digit'>6</button>
                        <button
                        name='-'
                        type='button'
                        onClick={handleClick}
                        className='button rounded-2 fs-5 opr'>-</button>
                </div>
                <div>
                <button
                        name='1'
                        type='button'
                        onClick={handleClick}
                        className='button rounded-2 fs-5 digit'>1</button>
                    <button
                        name='2'
                        type='button'
                        onClick={handleClick}
                        className='button rounded-2 fs-5 digit'>2</button>
                    <button
                        name='3'
                        type='button'
                        onClick={handleClick}
                        className='button rounded-2 fs-5 digit'>3</button>
                    <button
                        name='+'
                        type='button'
                        onClick={handleClick}
                        className='button rounded-2 fs-5 opr'>+</button>
                </div>
                <div>
                    <button
                        name='0'
                        type='button'
                        onClick={handleClick}
                        className='button rounded-2 fs-5 digit zero'>0</button>
                    <button
                        name='.'
                        type='button'
                        onClick={handleClick}
                        className='button rounded-2 fs-5 point'>.</button>
                    <button
                        name='='
                        type='button'
                        onClick={calculate}
                        className='btn btn-success equalto rounded-2 fs-4 text-light fw-bolder'>=</button>
                </div>
            </div>
            </div>
    );
}
export default App;
