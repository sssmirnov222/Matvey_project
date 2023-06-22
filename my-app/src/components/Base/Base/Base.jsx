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
                  <h4 className='Calculation__h4'>Расчёт стоимости</h4>

                  <h5 className='Calculation__h5'>Помогу вам с предварительным расчётом стоимости</h5>
           
            <form action="" className='Calculation__Form'>

                  <label className='Calculation__typeWebSite'>
                      <span>Тип сайта</span>
                      <input type="text" placeholder='Коммерческий'/>
                 </label>

                 <label className='Calculation__Design'>
                     <span>Дизайн</span>
                     <input type="text" placeholder='Минимализм'/>
                </label>

                 <label className='Calculation__Adaptability'>
                    <span>Адаптивность</span>
                    <input type="text" placeholder='Под мобильные устройства'/>
                </label>
               </form>
         </section>

           
         <section className="reviews">
           <h3>Отзывы клиентов</h3> 

           <section className='reviews_people'>
            <article>
               <h4>Наталья <br />
                 Заведующий  <br />
                 МБДОУ №14</h4>
               <p>Сотрудничаю с Матвеем <br />
               недавно, но за короткий срок <br />
               помог с раскруткой группы. В <br />
               планах создание сайта. <br />
               Понравилось, что учитывает <br />
               ВСЕ пожелания клиента,<br />
               разъясняет кучу непонятных <br />
               мне моментов, за что отдельное спасибо :)</p>

            </article>


            <article>
               <h4>Ирина <br />
               Директор ООО <br />
                "ТурСистемы"</h4>
               <p>Заказывала здесь доработку <br />
               сайта, в том числе и форму с <br />
               несколькими фильтрами. <br />
               Сделал очень качественно и <br />
               недорого, что очень важно.
              </p>

            </article>


            <article>
               <h4>Сергей <br />
               Ген. директор ООО <br />
              "ТермоБетон"</h4>
               <p>Такой активный сотрудник <br />
               любит и получает <br />
               удовольствие от работы,<br />
               собираюсь нанять его снова <br />
               для следующего проекта.</p>

            </article>
           </section>
         </section>
       </main>

       <footer className='contact'>

          <section className='my_contact'>
            <h1>Мои контакты</h1>
            <p>С радостью отвечу на ваши вопросы <br />
            Вы можете использовать форму <br />
            ниже или написать по адресу</p>
            <p>popov.matvey.s62@gmail.com</p>
            <p>+7-(915)-627-38-29</p>
          </section>

          <div className='input'>
            <section className='contact_input'>
             <input type="text" placeholder='Имя'/>
             <input type="text" placeholder='Email' />
          </section>

          <section className='SMS_input' >
             <input type="text" placeholder='Сообщение' />
          </section>
          </div>
          
         
       </footer>
    </div>
   ) 

}