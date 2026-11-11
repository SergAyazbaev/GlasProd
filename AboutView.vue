<template>
   <div class="max-w-4xl mx-auto p-8 m-6 bg-white shadow rounded-lg">

    <h1 class="text-3xl font-bold mb-6 p-6 text-center">Добро пожаловать! Glas</h1>

    <section class="mb-6">
      <h1 class="text-xl font-semibold mb-2"> Мы рады приветствовать вас и желаем вашей компании: </h1>
     
     
        <ul class="benefits text-justify list-disc pl-11 text-gray-900 space-y-2 align-center mb-6">
               <li>📈 Устойчивого роста и развития</li>
               <li>🔒 Надежной стабильности и безопасности</li>
               <li>🌟 Процветания и успехов в бизнесе</li>
        </ul>
    </section>

    <section class="mb-6 align-center">
      <img src="@/assets/img/cargo.jpg" alt="" class="w-full h-auto rounded-lg shadow mb-6">
    </section>



    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-6 mt-12 ">  Преимущества системы  </h2>
      <ul class="list-disc  text-gray-700 space-y-1 benefits  pl-4 ">
       
        <li><strong>📦 Учёт в реальном времени:</strong> остатки, перемещения, производство.</li>
        <li><strong>📦 Удобная работа с первичкой:</strong> Минимизация влияния человеческого фактора.</li>
        <li><strong>📦 Ускоренный ввод данных:</strong> Полный контроль, валидация, шрихкоды.</li>
        <li><strong>🧾 Удобная инвентаризация в любую минуту:</strong> автоматическая сверка, печать актов, исторические данные.</li>
        
        <li><strong>🧾 Исправление ошибок внесения информации:</strong> автоматическая валидация симантика, орфография и по существующим справочникам товаров.</li>

        <li><strong>📊 Аналитика и отчёты:</strong> ABC-анализ, оборачиваемость, остатки.</li>
        <li><strong>📊 Прогноз закупок:</strong> На любой срок. По ходовым товарам.</li>
        <li><strong>👥 Права доступа:</strong> роли пользователей, разграничение полномочий.</li>
        <li><strong>📃 Документооборот:</strong> накладные, счета, история изменений.</li>
        
        <li><strong>📃 Совместимоасть:</strong> загрузка и выгрузка документов в Excel, Word, PDF.</li>

        <li><strong>🔍 Мгновенный поиск:</strong> фильтры по товарам, складам, статусам.</li>
        <li><strong>🔍 Цепочка перемещений:</strong> история перемещения товара по складам, статусам.</li>
        <li><strong>🔄 Интеграция:</strong> 1С, Excel, PDF, интернет-магазины, сканеры штрихкодов.</li>
        <li><strong>💡 Удобный интерфейс:</strong> работает на всех устройствах (компьютеры, планшеты и телефоны).</li>
        <li><strong>🔐 Безопасность:</strong> вход, аудит, резервные копии, защита данных.</li>
        <li><strong>🛠️ Масштабируемость:</strong> от одного до сотен складов.</li>
        <li><strong>🛠️ Сегментируемость:</strong> Можно создавать комьюнити из нескольких складов.</li>
   

       
      </ul>
    </section>



    <section class="mb-6 mt-12">

      <img
          src="@/assets/img/infograf/infograf.png"
          
          alt="Фото"
          class="thumb"
          @click="openImage('/src/assets/img/infograf/infograf.png')"
        />

        <div id="imgModal" class="modal" @click="closeImage()" >
          <img id="imgModalPic" class="modal__img" alt="" style="width: -webkit-fill-available;margin: 19vh;">
          <button class="modal__close" @click.stop="closeImage()">✕</button>
        </div>

    </section>

     <section class="mb-6">
      <h2 class="text-xl font-semibold mb-6 mt-12"> Единая система учета для нескольких организаций </h2>
      <p class="text-gray-700  text-justify benefits mb-4 ">

      Введение
      В современном бизнесе часто возникает необходимость вести учет для нескольких юридических лиц или организаций в рамках одной системы. Это особенно актуально для холдингов, франшиз и управляющих компаний. В этой статье мы рассмотрим преимущества и ключевые моменты при выборе такой системы учета.
      Что такое единая система учета для нескольких организаций?
      Единая система учета для нескольких организаций позволяет централизованно управлять финансовыми, складскими и операционными данными различных юридических лиц в рамках одной платформы. Это обеспечивает удобство и эффективность в ведении учета, а также упрощает процессы отчетности и анализа.
      </p>

      <h2 class="text-xl font-semibold mb-6 mt-12 ">  Преимущества единой системы учета для нескольких организаций  </h2>

      <ul class="list-disc pl-6 text-gray-700 space-y-1 benefits  pl-9 ">
       
        <li><strong>📦Экономия ресурсов:</strong> Одна программа для всех компаний.</li>
        <li><strong>📦Централизованный контроль:</strong> Единая точка управления.</li>
        <li><strong>📦Масштабируемость:</strong> Легко добавлять новые организации.</li>
        <li><strong>🧾Безопасность:</strong> Разделение данных между организациями.</li>
        <li><strong>🧾Отчетность:</strong> Сводные и раздельные отчеты.</li>
        <li><strong>📊Удобство использования:</strong> Единый интерфейс для всех пользователей.</li>
        <li><strong>📊Интеграция:</strong> Легко подключать внешние системы.</li>
        <li><strong>📊Масштабируемость:</strong> Система должна расти с вашим бизнесом.</li>
        <li><strong>🛠️ Поддержка:</strong> Наличие технической поддержки критически важно.</li>

        </ul>


      </section>


    <section class="mb-6">
    
       <h2 class="text-xl font-semibold mb-6 mt-12 ">  Данные и точность  </h2>

      <p class="text-gray-700  text-justify benefits mb-4 ">
      Складской учет — это про данные и точность. 
      Навигация максимально простая и логичная.
       Все для того, чтобы вы могли сосредоточиться на развитии вашего бизнеса, а не на рутине.
      Контроль за перемещением — легко, прозрачно и эффективно.
      </p>
      <p class="text-gray-700  text-justify benefits mb-4 ">   
      Система учета обеспечивает полный контроль над складским учетом. 
      Вы сможете легко отслеживать движение товаров, контролировать остатки на складе и оптимизировать процессы хранения и отгрузки. 
      Наш сервис предоставляет удобные инструменты для инвентаризации и маркировки товаров, что поможет вам избежать ошибок и улучшить эффективность работы вашего склада
      </p>
      <p class="text-gray-700  text-justify benefits mb-4 ">
      Полный контроль над вашими запасами. <br />
      Точные данные о наличии товаров в реальном времени.<br />
      Быстрое и удобное управление складскими операциями.<br />
            </p>
      <p class="text-gray-700  text-justify benefits mb-4 ">
        Нахождение и устранение проблемных мест, таких как отсутствие накладной или ее неправильное оформление станут проще за счет автоматической валидации данных и контроля за перемещением товаров. <br />
        Система поможет вам выявить и исправить ошибки в учете, что повысит точность данных и улучшит эффективность работы склада.      
      Синхронизация по времени между всеми пользователями системы.   Оптимизация бизнес-процессов.
      </p>
      <p class="text-gray-700  text-justify benefits mb-4 ">

      Програмно реализован интерфейс  с возможностью интеграции с другими системами.(1С, интернет-магазины и т.д.)<br />
      Всё для того, чтобы вы могли сосредоточиться на развитии вашего бизнеса, а не на рутине.<br />


      Такая система идеально подходит для холдингов, франшиз или управляющих компаний, которым нужно вести учет для нескольких юридических лиц в рамках одной инфраструктуры.

      <br>    
      </p>
    </section>

    <br>
    <br>

  </div>


  <div class="debug">
    <h1>🔍 Debug Info</h1>
    
    <div class="info-section">
      <h2>Environment ENV</h2>
      <pre>{{ envInfo }}</pre>
    </div>

    <div class="info-section">
      <h2>Window Location</h2>
      <pre>{{ locationInfo }}</pre>
    </div>

    <div class="info-section">
      <h2>Expected WebSocket URL</h2>
      <pre>{{ wsUrl }}</pre>
    </div>
  </div>


</template>

<script setup>
import { computed } from 'vue'

const envInfo = computed(() => ({
  MODE: import.meta.env.MODE,
  DEV: import.meta.env.DEV,
  PROD: import.meta.env.PROD,
  VITE_APP_NAME: import.meta.env.VITE_APP_NAME,
  VITE_APP_VERSION: import.meta.env.VITE_APP_VERSION,
  VITE_API_HOST: import.meta.env.VITE_API_HOST,
  VITE_API_URL: import.meta.env.VITE_API_URL,
  VITE_WS_URL: import.meta.env.VITE_WS_URL
}))

const locationInfo = computed(() => ({
  protocol: window.location.protocol,
  host: window.location.host,
  hostname: window.location.hostname,
  port: window.location.port,
  pathname: window.location.pathname,
  href: window.location.href
}))


  // function openImage(src) {
  //   const modal = document.getElementById('imgModal')
  //   const modalImg = document.getElementById('imgModalPic')
  //   modalImg.src = src
  //   modal.classList.add('modal--open')
  //   document.body.style.overflow = 'hidden'
  // }

  // function closeImage() {
  //   const modal = document.getElementById('imgModal')
  //   modal.classList.remove('modal--open')
  //   document.body.style.overflow = ''
  // }

  // document.addEventListener('keydown', (e) => {
  //   if (e.key === 'Escape') closeImage()
  // })

</script>

<style scoped>
  .benefits li {
    margin-bottom: 0.5rem;
  }

  .modal {
    position: fixed;
    inset: 0;
    display: none;
    background: rgba(0, 0, 0, 0.85);
    z-index: 9999;
    align-items: center;
    justify-content: center;
    padding: 24px;
  }

  .modal--open {
    display: flex;
  }

  .modal__img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 12px;
  }

  .modal__close {
    position: fixed;
    top: 16px;
    right: 16px;
    width: 44px;
    height: 44px;
    border: 0;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.12);
    color: #fff;
    font-size: 20px;
    cursor: pointer;
  }
</style>  
