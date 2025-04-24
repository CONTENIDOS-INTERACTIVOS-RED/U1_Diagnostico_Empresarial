<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Definición y objetivo del diagnóstico empresarial'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5     
      .col.order-md-2.order-lg-1
        p(data-aos="fade-down") La comprensión del diagnóstico empresarial es clave para evaluar, de manera estratégica, la situación de una organización y tomar decisiones orientadas al crecimiento y la sostenibilidad.

      .col-lg-auto.mb-3.mb-lg-0.order-md-1.order-lg-2 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/5.svg", data-aos="zoom-in") 

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center         
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Definición del diagnóstico empresarial
            p.mb-4(data-aos="fade-right") En el PDF Definición del diagnóstico empresarial, se analiza este proceso como una herramienta integral que permite identificar fortalezas, debilidades, oportunidades y amenazas, a partir del estudio de factores internos y externos. A través de este enfoque, se establece una base sólida para diseñar planes de mejora continua, que impulsen la competitividad y preparen a la empresa para los desafíos del entorno actual.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Definición del diagnóstico empresarial
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/6.png', alt='')  


    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Objetivos del diagnóstico empresarial

    p(data-aos="fade-down") Los objetivos del diagnóstico empresarial, son:

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/7.png")           
            .col-lg-7
              h5 Evaluar la situación de la empresa
              p El primer paso para el diagnóstico, es obtener una imagen clara y objetiva del estado actual de la organización; esto significa analizar aspectos internos como la estructura organizacional, la eficiencia de los procesos, la salud financiera, la gestión del talento humano y la cultura organizacional. También se considera el entorno externo, como la posición de la empresa en el mercado y su competitividad. Este objetivo permite identificar qué tan alineada está la empresa con sus metas estratégicas. 

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/8.png")           
            .col-lg-7
              h5 Identificar fortalezas y ventajas
              p Reconocer las áreas donde la empresa sobresale, es importante para mantener y potenciar la competitividad; dentro de las fortalezas podemos identificar, por ejemplo, una marca consolidada, tecnología avanzada, una cartera de clientes fieles, procesos eficientes o un equipo altamente capacitado. Este objetivo permite construir estrategias que las utilicen, las distingan de la competencia y generen más valor.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/9.png")           
            .col-lg-7
              h5 Detectar debilidades internas 
              p El diagnóstico también busca localizar las fragilidades que obstaculizan el crecimiento o reducen la eficiencia de la empresa; estas pueden darse desde procesos ineficientes y recursos mal gestionados, hasta falta de innovación o problemas de liderazgo. Este objetivo permite corregir dichas debilidades, antes que se conviertan en amenazas más grandes.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/10.png")           
            .col-lg-7
              h5 Reconocer oportunidades externas 
              p Un buen diagnóstico no se queda solo dentro de la organización, también analiza el entorno externo. Por ejemplo, identificar cambios en el mercado, nuevas tendencias, avances tecnológicos o necesidades no satisfechas de los clientes, que la empresa podría aprovechar para crecer o diversificar sus operaciones. 

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/11.png")           
            .col-lg-7
              h5 Anticipar amenazas y riesgos
              p Así como se buscan oportunidades, también es fundamental detectar posibles amenazas, como la llegada de nuevos competidores, crisis económicas, cambios en la legislación o transformaciones tecnológicas que dejen obsoletos ciertos productos o procesos. Este objetivo busca tener la capacidad de anticiparse a estos riesgos, los que permite crear planes preventivos y mantener la estabilidad.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/12.png")           
            .col-lg-7
              h5 Mejorar la toma de decisiones 
              p Toda la información obtenida del diagnóstico empresarial, debe transformarse en una base firme para la toma de decisiones. Con una visión clara de la situación interna y externa, los líderes pueden planificar, con mayor precisión, reduciendo la incertidumbre y aumentando las probabilidades de éxito.

    .bg-full-width-1.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/41174?page=102" target="_blank" rel="noopener noreferrer") Blandez Ricalde, M. D. G. (2014). Proceso administrativo. Editorial Digital UNID. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.58299/edu.v19i20.82" target="_blank" rel="noopener noreferrer") Guzmán Frías, C., Ramírez Lerma, J. A., Becerra García, J. L. & Michel Rendón, J. C. (2018). La importancia del diagnóstico organizacional en las mipymes; caso: El restaurant galería la casona. EDUCATECONCIENCIA, 19(20), 187–215. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/FFNWyzxxY48?si=IvTMhmL1-O4DUk-h" target="_blank" rel="noopener noreferrer") Consultor (PEM) Planificación Estratégica. (2019). Diagnostico Empresarial.️ 7 Tipos para FORTALECER tu empresa.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
