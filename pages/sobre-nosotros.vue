<template>
  <main>
    <div class="banner">
      <h1 class="text-center font-extrabold text-2xl lg:text-3xl">¡Sobre nosotros!</h1>
      <p class="max-w-lg text-center mx-auto mt-2">
        Nuestro equipo de trabajo está en constante crecimiento para ofrecerte la mejor experiencia
      </p>
    </div>
    <section class="block-main mb-16 pt-4">
      <h2 class="title">Nuestro equipo</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-4">
        <article v-for="person in staff" :key="person.href" class="mb-0 p-4">
          <div class="px-8 lg:px-4">
            <div class="container-img">
              <a
                :href="person.href"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  :src="person.imageUrl"
                  :alt="`Foto de ${person.name}`">
              </a>
            </div>
          </div>
          <div class="text-center">
            <span class="font-bold">
              {{ person.occupation }}
            </span>
            <p>
              {{ person.name }}
            </p>
          </div>
        </article>
      </div>
    </section>
    <section class="block-main mb-24  pt-4">
      <h2 class="title">¡Una mirada hacia lo diferente!</h2>
      <p class="mt-8">En FourP buscamos una mirada hacia lo diferente, transformando la educación
        actual y generando más oportunidades para nuestra comunidad.
        Nuestra perspectiva en un futuro es ser reconocidos como una plataforma de
        gran ayuda académica y laboral, con la confianza de nuestros usuarios.
      </p>
      <p class="mt-2">
        El mejoramiento continuo, compromiso y cordialidad es la clave del funcionamiento
        de nuestra empresa, con el fin de brindar siempre el mejor conocimiento a nuestros
        usuarios, estando dispuestos a emplear todo nuestro potencial para ofrecer el mejor
        servicio.
      </p>
      <p class="mt-2">
        En FourP trabajamos con cordialidad, compromiso, respeto, confiabilidad y sobre todo
        innovación. No esperes más y ven a ser parte de esta gran aventura.
      </p>
    </section>
  </main>
</template>

<script>
import dynamicMetadata from '@/plugins/metadata/metadata-dynamic'

const staff = [
  {
    name: 'Mauricio Amaya Mendez',
    href: '/mauricio',
    imageUrl: 'https://fourp.blob.core.windows.net/images/user/mao.png',
    occupation: 'Marketing'
  },
  {
    name: 'Jhon Freddy Pérez',
    href: '/jhonf',
    imageUrl: 'https://fourp.blob.core.windows.net/images/user/jhonf.png',
    occupation: 'Sistemas'
  }
]
export default {
  data() {
    return {
      staff
    }
  },
  head() {
    const title = 'Nuestro equipo';
    const description = 'El equipo de FourP está en constante crecimiento para ofrecerte la mejor experiencia.'
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
  @apply filter bg-blue-700 pt-20 pb-20 text-dark-font-title dark:saturate-65;
}

.container-img {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 100%;
  @apply rounded-full mb-4 px-4 relative;
}
.container-img img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
}
</style>
