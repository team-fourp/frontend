<template>
  <main class="block-main mb-24">
    <div class="block-lg"></div>
    <h1 class="title mb-5">
      Términos y condiciones de uso
    </h1>
    <p class="mb-2">
      Bienvenido a <strong>FourP</strong> la mejor plataforma académica-laboral, nos alegra poder ofrecerle los servicios (<i>más adelante explicados</i>),
      que se encuentran sujetos a las condiciones establecidas aquí. Cada usuario que accede a nuestros servicios acepta las
      <a
        class="link"
        href="/politicas-de-privacidad" target="_blank" rel="noreferrer noopener">
        políticas de privacidad
      </a>, por tal motivo cualquier usuario que no acepte estas políticas no podrá hacer uso de los servicios ofrecidos.
    </p>

    <div class="block-lg"></div>
    <h2 class="subtitle">Adquisición de servicios</h2>

    <ol class="list-decimal pl-6">
      <li class="item">
        <b>Medio de pago: </b>
          Los métodos de pago aceptados actualmente son proveídos por
          <a class="link" href="https://paypal.com" target="_blank" rel="noreferrer noopener">
          PayPal
          </a> ó
          <a class="link" href="https://wompi.co" target="_blank" rel="noreferrer noopener">
            Wompi
          </a>(<i>este último solo si es de Colombia</i>).
          <br>
          El usuario tendrá que hacer la transacción del dinero correspondiente en
          el momento en que se acepten el o los servicios solicitados.
          Este dinero va a estar regido por las políticas de <i class="font-medium">respaldo</i> de nuestra plataforma.
      </li>
      <li class="item">
        <b>Cualidades del servicio: </b>
          El usuario está en la obligación de describir cómo y de qué manera desea
          que se le preste el servicio que está solicitando, esto en la parte de
          comentarios.
          <br>
          Todo reclamo, inconformidad o insatisfacción con cualquiera de los servicios
          prestados, la puede presentar haciendo un reporte, el cual va a ser estudiado
          por nuestra parte y emitiremos la respuesta lo más rápido posible haciendo
          saber a ambas partes el motivo de dicho reporte y la respuesta determinada.
      </li>
      <li class="item">
        <b>Contenido inadecuado: </b>
        El usuario que sea reportado por contenido, comportamiento o lenguaje inadecuado
        y que atente contra la integridad de nuestro grupo de trabajo será cancelada su
        cuenta de nuestra plataforma.
        <br>
        La suma de reportes por partes de los freelances a un mismo usuario será
        motivo de estudio para solucionar los problemas ocasionados, con la finalidad
        de mantener un ambiente sano y constructivo.
      </li>
      <li class="item">
        <b>Post servicios: </b>
        El usuario cuenta con la posibilidad de evaluar al docente o servicio
        después de adquirirlo. Así mismo, también tiene la posibilidad de reportar el docente por problemas
        ocasionados por la prestación de sus servicios.
        <br>
      </li>
    </ol>
    <div class="block-lg"></div>
    <h2 class="subtitle">Propiedad</h2>
    <p class="mt-2">
      Ningún usuario tiene la posibilidad de declarar propiedad intelectual a ninguno de los cursos ofrecidos por FourP. Debido a esto,
      todos los cursos y contenido (<i>exceptuando los trabajos académicos solicitados</i>) son propiedad de la empresa.
    </p>
    <div class="block-lg"></div>
    <h2 class="subtitle">Moneda y visualización de los precios</h2>
    <p class="mt-2">En <strong>FourP</strong> manejamos el dólar estadounidense ($USD) como moneda oficial para
      realizar compras y pagos, ya que esto ayuda a mantener la consistencia de
      los precios independientemente del país. De tal modo que cualquier compra
      que se realice, se hará en esta moneda.
    </p>
    <p class="mt-1">
      (<i>Solo para <strong>Colombia</strong></i>). La visualización de los
      precios en la plataforma es en pesos colombianos ($COP) pero al momento de comprar,
      dicha compra se realizará en dólares, como se dijo anteriormente.
      (<i>El factor de conversión que tenemos para Colombia varía según el día.</i>)
    </p>
  </main>
</template>

<script>
import dynamicMetadata from '~/plugins/metadata/metadata-dynamic'

export default {
  head() {
    const title = 'Terminos y condiciones de uso';
    const description = 'Las siguientes condiciones de uso que se encuentran redactadas rigen en todos los servicios ofrecidos de FourP, todo usuario podrá hacer uso de estos servicios siempre y cuando no infringa ninguna de estas condiciones.'
    const url = `${this.$config.baseURL}${this.$nuxt.$route.path}`
    const dynamicMeta = dynamicMetadata({
      title,
      description,
      url
    })
    return {
      title,
      meta: [...dynamicMeta]
    }
  }
}
</script>

<style scoped lang="postcss">
.item {
  @apply mt-2;
}

.item-title {
  @apply text-lg;
}

.item-content {
  @apply leading-tight mt-2;
}
</style>
