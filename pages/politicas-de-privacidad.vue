<template>
  <main>
    <div class="banner">
      <h1 class="text-center font-extrabold text-2xl lg:text-3xl">
        Políticas de privacidad
      </h1>
      <p class="max-w-lg text-center mx-auto mt-2">
        Para <strong>FourP</strong> es importante la seguridad y privacidad de la información
        de todos nuestros usuarios.
      </p>
    </div>
    <section class="block-main mb-24">
      <div class="block-lg"></div>
      <p class="mb-8">
        Ofrecemos a todos nuestros usuarios diferentes métodos de pago, para que así les sea
        más fácil adquirir los servicios ofrecidos. Por motivos de seguridad FourP no almacena
        ningún tipo de información relacionado a las compras, solamente los que se encuentren
        relacionados directamente con la empresa.
      </p>
      <h2 class="subtitle">¿Qué información recopilamos?</h2>
      <p class="content-p">
        Recopilamos información de los usuarios para llenar sus perfiles en la plataforma,
        como datos introducidos por ellos mismos, al igual datos que recopilamos de manera
        autónoma, como información recopilada por los servicios prestados al usuario
      </p>
      <h2 class="subtitle">Datos de usuario</h2>
      <p class="content-p">
        La persona que deseé acceder a cualquiera de nuestros servicios debe de estar
        registrado como usuario, en dicho proceso vamos a recopilar datos tales como
        nombre, correo electrónico. El usuario tiene la opción además de incluir una foto de perfil,
        una descripción, país, fecha de nacimiento, redes sociales.
      </p>
      <h2 class="subtitle">Información compartida</h2>
      <p class="content-p">
        Alguna parte de FourP le ofrece la posibilidad de interactuar con otros usuarios o
        publicar diferentes informaciones como ensayos sobre freelance o cursos, o al
        formular o responder preguntas o cargar imágenes o trabajas en los foros de los
        cursos, esta información estará visible para los usuarios dependiendo del sitio
        en que sea publicada dicha información.
      </p>
      <h2 class="subtitle">Información autónoma</h2>
      <p class="content-p">
        Nosotros podremos recopilar información de manera autónoma, tales como las del
        uso que le da el usuario a la plataforma, estadísticas, cursos creados o accedidos,
        tiempo de uso de la plataforma, historial de búsquedas, tipo de dispositivo desde
        el cual accede, dirección IP, y la dirección geográfica aproximada en función de
        este último.
        <br>
        Los datos anteriormente mencionados se van a obtener por medio de cookies
        y herramientas de recopilación de información.
      </p>
      <h2 class="subtitle">Divulgación de la información</h2>
      <p class="content-p">
        La información proporcionada por parte de los usuarios a FourP, será de uso
        exclusivo de la plataforma sin posibilidades de llegar a terceros, a menos de
        que existan una orden judicial, esta información será utilizada para la
        identificación adecuada de la cuenta del usuario para que tenga una mejor
        experiencia al utilizar nuestros servicios.
        <br>
        Esta información será proporcionada solamente a Freelance del usuario o
        otros usuarios dentro de la plataforma, o a diferentes redes sociales con el
        fin de hacerle publicidad si el usuario lo ha <span class="font-semibold">AUTORIZADO</span>.
      </p>
      <h2 class="subtitle">Derechos del usuario</h2>
      <p class="content-p">
        El usuario tiene la posibilidad de modificar o eliminar información personal
        cuando disponga, así mismo de desactivar los correos publicitarios y la cancelación
        de cuenta. (<i>Para actualizar los datos que el usuario proporciona directamente,
        debe iniciar sesión en su cuenta y actualizarla en cualquier momento.</i>)
        <br>
        Para solicitar acceder, corregir o eliminar los datos personales del usuario,
        debe enviar un correo electrónico a <b>soporte@fourp.space</b>. Para proteger al usuario
        se realizará una verificación de información la cual puede ser a través de varios
        medios.
      </p>
    </section>
  </main>
</template>

<script>
import dynamicMetadata from '~/plugins/metadata/metadata-dynamic'

export default {
  head() {
    const title = 'Política de privacidad';
    const description = 'Las políticas de privacidad de FourP forma una parte fundamental en el uso del sitio, aquí te explicamos que datos recopilamos y que hacemos con ellos para poder ofrecerte un mejor servicio.'
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
.banner {
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  @apply filter bg-purple-700 pt-20 pb-20 text-dark-font-title dark:saturate-65;
}

.content-p {
  @apply mt-2 mb-4;
}
</style>
