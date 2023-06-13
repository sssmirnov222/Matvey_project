import React from 'react'
import './PopUp.css';
// import img from '../image/image_exit.jpg'

export default function PopUp() {
const [typeWebSite, setTypeWebSite] = React.useState('');
const [design, setDesign] = React.useState('');
const [adaptability, setAdaptability] = React.useState('');
const [exit, setExit] = React.useState(true);


function changeInputWebSite(e) {
   setTypeWebSite(e.target.value)
}

function changeInputDesign(e) {
    setDesign(e.target.value)
 }

 function changeInputAdaptability(e) {
    setAdaptability(e.target.value)
 }

 function submitForm(e) {
    e.preventDefault();
    let data = [typeWebSite,design,adaptability]
   
console.log(data)
 }
 
    return (
     <>
      {exit && (<div className= 'PopUp'>
            <div className='PopUp__Exit' onClick={() => setExit(false)}><button>✕</button></div>    

            <form action="" className='PopUp__Form' onSubmit={submitForm}>

                <h4 className='PopUp__h4'>Расчёт стоимости</h4>

                <h5 className='PopUp__h5'>Помогу вам с предварительным расчётом стоимости</h5>

                <label className='PopUp__typeWebSite'>
                    <span>Тип сайта</span>
                    <input type="text" placeholder='Коммерческий' value = {typeWebSite} onChange={(e) => changeInputWebSite(e)}/>
                </label>

                <label className='PopUp__Design'>
                    <span>Дизайн</span>
                    <input type="text" placeholder='Минимализм' value = {design} onChange={(e) => changeInputDesign(e)}/>
                </label>

                <label className='PopUp__Adaptability'>
                    <span>Адаптивность</span>
                    <input type="text" placeholder='Под мобильные устройства' value = {adaptability} onChange={(e) => changeInputAdaptability(e)}/>
                </label>

                <button type='submit' className='PopUp__Button' >Отправить</button>
            </form>

              
        </div>)}
        </> 
    )
}