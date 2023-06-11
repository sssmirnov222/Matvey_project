import React from 'react'
import './PopUp.css';

export default function PopUp() {
    return (
        <div className='PopUp'>
            
            <form action="" className='PopUp__Form'>
                <h4 className='h4'>Расчёт стоимости</h4>
                <h5>Помогу вам с предварительным расчётом стоимости</h5>

                <label className='PopUp__typeWebSite'>
                    <span>Тип сайта</span>
                    <input type="text" placeholder='Коммерческий'/>
                </label>
                <label className='PopUp__Design'>
                    <span>Дизайн</span>
                    <input type="text" placeholder='Минимализм'/>
                </label>
                <label className='PopUp__Adaptability'>
                    <span>Адаптивность</span>
                    <input type="text" placeholder='Под мобильные устройства'/>
                </label>


            </form>
        </div>
    )
}