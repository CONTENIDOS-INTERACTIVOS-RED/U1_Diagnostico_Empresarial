<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Importancia de la información en el diagnóstico'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden  
    .row.mb-5       
      .col-lg-8
        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/54.svg")
            .col-lg
              p.mb-0 La información representa la base sobre la cual se construye un diagnóstico empresarial efectivo, por tanto, su adecuada recolección, organización y análisis permite comprender a fondo la situación interna y externa de la empresa, facilitando la identificación de factores que influyen en el desempeño y los resultados organizacionales.
        p(data-aos="fade-down") Para lograr una recopilación de datos eficiente, es fundamental aplicar herramientas estratégicas que permitan analizar tanto el entorno interno como externo:
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/64.png", data-aos="zoom-in")

    TabsC(data-aos="fade-right").color-primario.mb-5
      .bg-color-10.border.px-4.p-md-5.py-3(titulo="Análisis interno" :icon="require('@/assets/curso/temas/67.svg')")
        .row.justify-content-center
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img.img-a.img-t(src='@/assets/curso/temas/65.png', alt='')          
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Análisis interno 
            p La Matriz EFI (Evaluación de Factores Internos) ayuda a identificar las fortalezas y debilidades internas, mientras que el Balanced Scorecard (BSC) permite evaluar el desempeño a través de indicadores financieros, clientes, procesos internos y aprendizaje organizacional. La Matriz BCG, por su parte, es útil para analizar la posición de los productos o unidades de negocio dentro del mercado, diferenciando aquellos que generan más ingresos de los que requieren más inversión.

      .bg-color-10.border.px-4.p-md-5.py-3(titulo="Ámbito externo" :icon="require('@/assets/curso/temas/67.svg')")
        .row.justify-content-center
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img.img-a.img-t(src='@/assets/curso/temas/66.png', alt='')        
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Ámbito externo 
            p La Matriz EFE (Evaluación de Factores Externos), permite identificar oportunidades y amenazas que provienen del entorno; el modelo de las 5 Fuerzas de Porter, evalúa la competencia a través de factores como el poder de los proveedores, la amenaza de nuevos entrantes o productos sustitutos, el poder de los clientes y la rivalidad entre competidores. Por otro lado, el análisis PESTEL examina factores políticos, económicos, sociales, tecnológicos, ecológicos y legales, que pueden impactar la empresa.
    
    p(data-aos="fade-down") El benchmarking es otra herramienta valiosa que permite comparar el desempeño de la empresa con el de sus competidores o líderes de la industria, buscando identificar buenas prácticas que puedan ser adoptadas. Finalmente, la matriz DOFA (Debilidades, Oportunidades, Fortalezas y Amenazas) integra los resultados del análisis interno y externo, facilitando la generación de estrategias más precisas y enfocadas.

    .row.justify-content-center.mb-5           
      .col-lg-4
        .bg-color-1.p-3.h-100.brounded.j1
          p(data-aos="fade-down").mb-0 Una vez recopilada la información mediante estas herramientas, es necesario realizar una curaduría rigurosa; esta acción implica clasificar los datos, eliminar redundancias y centrarse en los aspectos que proporcionan una visión más clara y profunda de la situación empresarial. La curaduría ayuda a reducir la cantidad de datos, y a mejorar su calidad, dejando únicamente aquellos que aportan valor al análisis.   
      .col-lg-4.my-4.my-lg-0
        figure
          img.img-a.img-t(src='@/assets/curso/temas/68.png', alt='', data-aos="zoom-in")          
      .col-lg-4
        .bg-color-2.p-3.h-100.brounded.j1
          p(data-aos="fade-down").mb-0 El análisis de la información seleccionada permite identificar patrones, tendencias y relaciones que podrían pasar desapercibidos si se analizan de forma aislada. Por ejemplo, en una empresa automotriz, combinar la Matriz BCG con el análisis PESTEL, puede revelar qué líneas de productos son más rentables y cómo las tendencias tecnológicas emergentes podrían afectar esa rentabilidad.

    .row.mb-5       
      .col-lg-8
        p(data-aos="fade-down") Además, integrar diversas herramientas, brinda una perspectiva más completa y evita decisiones basadas en información parcial; por ejemplo, combinar la matriz DOFA con el Balanced Scorecard, facilita conectar las fortalezas internas con los objetivos estratégicos, mientras se monitorean los resultados a través de indicadores claves.    
        .bg-color-3.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/69.svg")
            .col-lg
              p.mb-0 La información bien gestionada y analizada, respaldada por herramientas estratégicas, permite elaborar diagnósticos empresariales más precisos, lo que facilita anticipar riesgos y tomar decisiones que impulsen el crecimiento y la competitividad de la empresa.            
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/70.png", data-aos="zoom-in")

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://revistascientificas.cuc.edu.co/bilo/article/view/3860/3822" target="_blank" rel="noopener noreferrer") Berben-Soñett, K., Pérez-Sánchez, Á., Troncoso-Palacio, A. & Rojas-Millán, R. (2021). Aplicación de un Diagnóstico Empresarial para Identificar y Analizar Falencias Organizacionales. Boletín de Innovación, Logística y Operaciones, 3(1). 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/uiSqdl3z0hM?si=fGKXMWyPke5d5ZKQ" target="_blank" rel="noopener noreferrer") INDEE. (2022). El diagnóstico situacional.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'DIAGNÓSTICO EMPRESARIAL',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es el objetivo principal del diagnóstico empresarial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Identificar oportunidades de mejora y fortalezas.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Describir la historia de la empresa y sus logros.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Presentar los resultados financieros actuales.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Comparar la empresa con sus competidores directos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué aspecto se analiza en el entorno interno de la empresa?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La situación económica global y sus tendencias.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Los procesos, recursos y cultura organizacional.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'El comportamiento de los clientes potenciales.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Las estrategias comerciales de los competidores.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de las siguientes herramientas se usa comúnmente en un diagnóstico empresarial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Diagrama de Gantt para la planificación de tiempos.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Análisis FODA para evaluar la situación interna y externa.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Método Kanban para la gestión de tareas.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Benchmarking para establecer metas de producción.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué área es clave para evaluar el desempeño financiero en una empresa?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La gestión del talento humano y la motivación.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'La planificación de campañas de mercadeo.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'La estructura organizacional y jerarquías.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'El análisis de los estados financieros básicos.',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál es un resultado esperado tras realizar un diagnóstico empresarial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La mejora en la producción a corto plazo.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Un informe detallado con recomendaciones estratégicas.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'La creación de una nueva estructura organizacional.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'El incremento inmediato de las ventas.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
