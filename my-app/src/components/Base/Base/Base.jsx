import React from 'react'
import './Base.css';
import task from '../../../image/task.png'
import CEO from '../../../image/CEO.png'
import web from '../../../image/web-design.png'
import marketing from '../../../image/marketing.png'
import development from '../../../image/development.png'
import one from '../../../image/portfolio_one.png'
import two from '../../../image/portfolio_two.png'

export default function Base() {
   return(
    <div className='Base'>
       <header className='header_Base'>
        
         <nav className='navigation_Base'>
                <p>MATVEY POPOV</p>
                <a href="">ОБО МНЕ</a>
                <a href="">УСЛУГИ</a>
                <a href="">ПОРТФОЛИО</a>
                <a href="">РАСЧЁТ СТОИМОСТИ</a>
                <a href="">ОТЗЫВЫ</a>
                <a href="">КОНТАКТЫ</a>
         </nav>

         <section className='section_Base'>
            <h1>Frontend-developer</h1>
            <h1>Fullsteck web-developer</h1>
            <p>Я создаю сложное очень просто</p>
            <button>Узнать больше</button>
         </section>
       </header>

       <main className='main_Base'>
          <section className='description_Base'>
            <h3>ДОБРО ПОЖАЛОВАТЬ</h3>
            <p>Меня зовут Матвей Попов. Я - веб разработчик. 
               Занимаюсь созданием сайтов под ключ <br />
                любой сложности (от лендинга до интернет-магазинов и порталов). <br />
               Также предлагаю услуги по поддержке сайтов  (доработки, размещение материалов,<br />
                решение технических проблем и т.д.) <br />
               Если вы ищете талантливого, молодого, перспективного разработчика, имеющего <br />
                огромное желание развиваться в IT-сфере, вам следует обратиться ко мне.</p>

          </section>

              {/* <div className='divs'>
                     <div className='div_one'></div>
                     <div className='div_two'></div>
              </div>   */}


            <section className='task'>

               <div className='img_taskBase'>

                   <article className='task_Base'>

                  <h3>Моя задача</h3>
                  <p>Основное направление - frontend <br />
                   разработка и поддержка сайтов <br /> 
                   Я предоставляю вам качественные <br />
                   услуги по разумным ценам
                  </p>
                  <button>Мои работы</button>

                   </article>

                  <img src={task} alt="" />
                  </div>
            </section>

            <section className='services'>

               <h3>Мои Услуги</h3>
               <p>Что я могу вам предложить</p>

            <section className='services_Base'>
                <article>
                  <img src={web} alt="" />
                  <h4>Веб-дизайн</h4>
                  <p>Составляется по <br />
                  вашему желанию в <br />
                   кротчайшие сроки </p>

               </article>

               <article>
               <img src={development} alt="" />  
               <h4>Разработка</h4>
               <p>Для вас у меня всегда <br />
               найдутся решения под <br />
                ваши нужды </p>

               </article>

               <article>
               <img src={CEO} alt="" />
               <h4>СЕО-оптимизация</h4>
               <p>Выйти за рамки <br />
               классического СЕО </p>

               </article>

               <article>
               <img src={marketing} alt="" />
               <h4>Маркетинг</h4>
               <p>Увеличу вам продажи <br />
                быстро и надежно </p>

               </article>

               <article>
                  <h5>Что-то</h5>

               </article>

               <article>
                  <h5>Что-то</h5>

               </article>

               <article>
                  <h5>Что-то</h5>

               </article>

               <article>
                  <h5>Что-то</h5>

               </article>

               <article>
                  <h5>Что-то</h5>

               </article>

               <article>
                  <h5>Что-то</h5>

               </article>

               <article>
                 <h5>Что-то</h5>

               </article>

               <article>
                 <h5>Что-то</h5>

               </article>

               <article>
                 <h5>Что-то</h5>

               </article>

               <article>
                 <h5>Что-то</h5>

               </article>

               <article>
                 <h5>Что-то</h5>

               </article>

               <article>
                 <h5>Что-то</h5>

               </article>
            </section>
         </section>

         <section className='portfolio_Base'>
            <h2>Портфолио</h2>

            <div className="img_portfolio">
               <img src={one} alt="" />
               <img src={two} alt="" />
            </div>
         </section>

         <section className='calculation_Base'>
            <h3>Расчёт стоимости</h3>
            <h5>Помогу вам с предвартельным расчётом стоимости</h5>

            <div>
               
            </div>

         </section>
       </main>

       <footer>

       </footer>
    </div>
   ) 

}