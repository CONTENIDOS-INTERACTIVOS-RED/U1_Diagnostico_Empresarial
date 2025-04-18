<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Metodologías de diagnóstico'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-5       
      .col-lg-8
        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/13.svg")
            .col-lg
              p.mb-0 Según Prieto Herrera (2011), para adentrarse en la gestión estratégica de una organización, es esencial comprender primero el marco conceptual del diagnóstico empresarial. Este puede entenderse como un proceso que ayuda a identificar tanto las fortalezas como las debilidades de la empresa, además de reconocer los factores que limitan su crecimiento, la dinámica de los cambios que enfrenta, la manera en que opera y su estado general. En otras palabras, permite obtener una visión integral del funcionamiento de la organización, para orientar decisiones más acertadas y estratégicas.   
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/14.png", data-aos="zoom-in")   

    p(data-aos="fade-down") Pasos para elaborar un diagnóstico empresarial:
    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/15.png", alt="")
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Preparación")
            p Al realizar un diagnóstico empresarial, es fundamental que tanto la organización como sus colaboradores, se preparen adecuadamente.
            h5 Preparación de la empresa:
            p Para facilitar el trabajo del asesor o del equipo interno encargado, la empresa debe reunir y organizar con anticipación, toda la información relevante que sirva como base para el diagnóstico. Esta información incluye documentos esenciales como balances financieros, estados de resultados, informes de gestión, manuales de funciones y procedimientos, catálogos de productos, actas de reuniones, comunicaciones con clientes, reportes de asesoría, boletines del sector, análisis de la competencia, estadísticas relacionadas y material bibliográfico complementario. Además, contar con un equipo de cómputo actualizado y con el software apropiado, agiliza el proceso y mejora la precisión del análisis.
            p El asesor o el equipo de diagnóstico elabora una propuesta de plan de acción que detalla las actividades principales a desarrollar. Este plan se presenta a la gerencia para su revisión y ajuste y, posteriormente, se estructura en un cronograma de actividades que debe ser comunicado de manera clara y oportuna, a todos los involucrados en el proyecto.
            h5 Preparación de los colaboradores:
            p Es esencial programar reuniones con los colaboradores que participarán directamente en el proceso diagnóstico. Durante estos encuentros, es importante explicar los objetivos y beneficios que traerá el diagnóstico, tanto para la empresa como para sus empleados y los clientes. Transmitir la importancia del proceso y destacar las oportunidades de mejora, ayudará a obtener el compromiso y la colaboración activa de todos los participantes. 
          .div(titulo="Análisis")
            p Una empresa, por lo general, se organiza en diversas áreas funcionales, entre las que se destacan: administración, mercadeo, recursos humanos, producción y finanzas. Estas áreas no operan de manera aislada, sino que mantienen una estrecha interdependencia, lo que significa que el funcionamiento de una, influye directamente en las demás.

            p Para llevar a cabo un diagnóstico empresarial integral, es indispensable analizar cada una de estas áreas, junto con cualquier otra que resulte relevante, según la estructura y el giro de la empresa. Este análisis detallado permite identificar tanto las fortalezas como las debilidades presentes en cada departamento, lo que resulta esencial para que la organización pueda anticiparse y responder de manera efectiva, a las amenazas externas y aprovechar las oportunidades que surjan en el entorno.

            p Es importante que las conclusiones obtenidas durante el diagnóstico, no se basen únicamente en percepciones subjetivas. Por el contrario, deben sustentarse en información concreta y verificable, como cifras financieras, registros contables, informes de desempeño, estadísticas del mercado y otros datos objetivos que reflejen la realidad operativa de la empresa. De esta manera, se asegura que las decisiones estratégicas que se tomen posteriormente, tengan una base sólida y confiable, facilitando la planificación de acciones correctivas o de mejora. 
          .div(titulo="Definición de la situación o necesidad")
            p Después de examinar cada área mediante diversas técnicas y haber identificado sus fortalezas y debilidades, se elabora una lista priorizada. Este proceso permite determinar el problema central, la necesidad o el evento fundamental que afecta a toda la organización. Una vez identificado, se analizan las posibles causas que lo originaron y las repercusiones que tiene en el desarrollo general de la empresa.                         

    .row.align-items-start.mb-5
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Plan de acción")
            p Una vez identificado el "problema central" de la organización y debatido dentro del equipo de trabajo, el siguiente paso es diseñar un plan de acción. Este plan consiste en establecer una serie de lineamientos o pasos que se llevarán a cabo en plazos cortos, medianos y largos, de acuerdo con las prioridades definidas. Es esencial que el plan sea realista y se ajuste a los recursos disponibles. Además, debe ser claro, práctico y contar con el respaldo firme de la alta dirección para garantizar su implementación efectiva. 
          .div(titulo="Redacción del informe de diagnóstico")
            p El informe final del diagnóstico, debe presentarse de manera escrita y complementarse con una exposición oral dirigida a los interesados. Esta presentación tiene como propósito explicar los puntos claves del análisis y aclarar cualquier duda que surja en su interpretación. El documento debe iniciar con una descripción clara de los objetivos planteados, la metodología empleada y los resultados obtenidos, tanto de forma general como desglosada por áreas específicas. Es fundamental resaltar las fortalezas identificadas, proponer las correcciones necesarias y sugerir ajustes, además de incluir mecanismos de control que aseguren la correcta implementación del plan de acción.

            p Este informe debe convertirse en una herramienta clave que facilite la toma de decisiones estratégicas, promoviendo la continuidad, el crecimiento y la rentabilidad de la organización. Asimismo, es esencial que los líderes de cada área y el resto del equipo comprendan la información presentada, especialmente cuando se apoya en gráficos, tablas y esquemas visuales. De esta manera, se podrá dar inicio al plan de forma eficiente y en el momento adecuado.                
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/16.png", alt="")

    .titulo-figura.mb-4(data-aos="fade-up")
      h5 Figura 1. 
      span Pasos del diagnóstico empresarial

    .bg-color-5.p-4.mb-1(data-aos="fade-left")
      figure
        img.img-a.img-t(src="@/assets/curso/temas/17.svg", alt="")

    figcaption.bg-color-6.mb-5(data-aos="fade-down") Nota: tomado y adaptado de Prieto Herrera (2011).

    .row.mb-5  
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/18.png", data-aos="zoom-in")              
      .col-lg-8
        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          p Continuando con Prieto Herrera (2011), el diagnóstico empresarial debe ser, ante todo, un análisis detallado, que examine tanto el pasado como el presente de la organización; en este proceso, se evalúan sus capacidades y recursos en función de la misión, visión y objetivos establecidos; resulta necesario e importante que los resultados obtenidos se compartan con los directivos y el equipo de trabajo, para garantizar una comprensión colectiva de la situación de la empresa.   
            
        p(data-aos="fade-down") Además, es fundamental que la organización refuerce el diagnóstico a través de una revisión crítica, honesta y profunda, sobre la precisión y fiabilidad del análisis realizado:

    .bg-full-width.bg-fondo-slider.mb-0(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5         
            .col-lg-7
              h5 La validez
              p La validez del diagnóstico radica en su capacidad para reflejar fielmente, la realidad de la empresa, asegurando que el análisis revele la situación auténtica y no una percepción distorsionada de lo que se cree que sucede.

              p Este diagnóstico debe servir como una base para orientar la toma de decisiones, considerando las fortalezas, debilidades, oportunidades y potenciales de la organización; su propósito principal es el de reducir o eliminar la incertidumbre en áreas como la estructura interna, la gestión, la estrategia, la producción, el marketing y los sistemas de información, proporcionando una guía más clara y efectiva para el futuro de la empresa.

            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/19.png")

          .row.align-items-center.p-4.p-md-5       
            .col-lg-7
              h5 La confiabilidad
              p La confiabilidad se refiere al grado de confianza que los miembros de la organización depositan en el diagnóstico, una vez que este ha sido evaluado y validado, según los criterios aportados por todos los involucrados. Dicha confianza surge de la participación activa y del sentido de pertenencia generado a través de un análisis integral, tanto interno como externo, en el que colaboran diversos actores de la empresa.

              p Esta confiabilidad se fortalece cuando el diagnóstico se asume como un proceso participativo, impulsado por la toma de conciencia colectiva y enfocado en mejorar la eficiencia y efectividad de la organización, siempre con la mira puesta en alcanzar la excelencia.

            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/20.png")    

    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/21.svg")
          .col-lg
            p.mb-0 En definitiva, el diagnóstico debe ser lo suficientemente sólido y claro, para que las personas crean y respalden las decisiones que se deriven de los análisis realizados. Todo esto debe desarrollarse en un entorno basado en la sinceridad, la transparencia y el respeto mutuo, garantizando, de esta manera, que las acciones posteriores cuenten con el apoyo y la convicción del equipo.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/articulo.oa?id=28063104008" target="_blank" rel="noopener noreferrer") Sansores Guerrero, E. A., Navarrete Marneou, J. E., Alvarado-Peña, L. J. & Licandro, Ó. D. (2020). Diagnóstico situacional en microempresas mexicanas: Fracaso o sobrevivencia empresarial. Revista de Ciencias Sociales (Ve), XXVI(1).  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://revistascientificas.cuc.edu.co/economicascuc/article/view/3580/3403" target="_blank" rel="noopener noreferrer") Arrieta Jiménez, V., Cervantes Borrero, Y. E., De la Cruz Lara, L. M. & López Cadena, D. M. (2021). La importancia del diagnóstico estratégico en las organizaciones. ECONÓMICAS CUC, 42(2). 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/KPU9fcOmEog?si=FUCMHD8luGRj6bj5" target="_blank" rel="noopener noreferrer") Naser Publicidad. (2016). Tips para diagnosticar su empresa.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/WbJwG1EgBbY?si=uGJBMWnYVOW26R5U" target="_blank" rel="noopener noreferrer") Mesples, S. (2021). Módulo 1 - Análisis Predictivo - 4. PESTEL.              

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')


  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
