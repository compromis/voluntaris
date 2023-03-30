<script setup>
import CompromisLogo from '@compromis/blobby/components/logos/CompromisLogo.vue'
import BFooter from '@compromis/blobby/components/footer/BFooter.vue'
import BCard from '@compromis/blobby/components/card/BCard.vue'
import BButton from '@compromis/blobby/components/button/BButton.vue'
</script>

<template>
  <div class="container">
    <Head lang="ca">
      <Title>Voluntaris - Compromís</Title>
      <Meta name="description" content="El 28 de maig hi haurà eleccions valencianes i municipals on Compromís volem donar un nou impuls a la política valenciana amb Joan Baldoví com a president de la Generalitat Valenciana. Hem fet moltes coses bones per a la majoria de valencians i valencianes, però en podem fer moltes més. I per a fer-ho possible necessitem la teua energia. Ens ajudes?" />
      <Meta name="keywords" content="compromis, finançament just, altet, rodalies, dependencia, valencia, alacant, aeroport" />
      <Meta name="robots" content="index, follow" />

      <Meta name="og:locale" content="ca" />
      <Meta name="og:type" content="website" />
      <Meta name="og:description" content="Apunta't com a voluntari per a col·laborar en la campanya electoral de 2023!" />
      <Meta name="og:image" content="https://voluntaris.compromis.net/thumbnail.png" />
      <Meta name="og:url" content="https://voluntaris.compromis.net" />
      <Meta name="twitter:site" content="@compromis" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Voluntaris - Compromís" />
      <Meta name="twitter:description" content="Apunta't com a voluntari per a col·laborar en la campanya electoral de 2023!" />
      <Meta name="twitter:image" content="https://voluntaris.compromis.net/thumbnail.png" />
      <Meta name="twitter:url" content="https://voluntaris.compromis.net" />
    </Head>
    <header class="header">
      <div class="d-flex">
        <a href="https://compromis.net" target="_blank" class="compromis-logo">
          <compromis-logo />
          <span class="visually-hidden">Compromís</span>
        </a>
      </div>

      <h1 class="site-title text-6xl">
        <span class="text-gradient d-block">Apunta't com a voluntari/a</span>
      </h1>

      <b-button size="xl" shadow href="#sign">
        Emplena el formulari
      </b-button>
    </header>

    <main>
      <section class="card-grid my-5">
        <b-card as="article" padded class="text-xl">
          <p>El 28 de maig hi haurà eleccions valencianes i municipals on Compromís volem donar un nou impuls a la política valenciana amb Joan Baldoví com a president de la Generalitat Valenciana. Hem fet moltes coses bones per a la majoria de valencians i valencianes, però en podem fer moltes més. I per a fer-ho possible necessitem la teua energia. Ens ajudes?</p>

          <p class="text-muted">El 28 de mayo habrá elecciones valencianas y municipales donde Compromís queremos dar un nuevo impulso a la política valenciana con Joan Baldoví como presidente de la Generalitat Valenciana. Hemos hecho muchas cosas buenas para la mayoría de valencianos y valencianas, pero podemos hacer muchas más. Y para hacerlo posible necesitamos tu energía. Nos ayudas?</p>
        </b-card>
      </section>

      <section id="sign">
        <iframe class="form rounded overflow-hidden" src="https://docs.google.com/forms/d/e/1FAIpQLSdr6Wjkey95uOHEWtGoc50b0wOI1kuP4wlkluaH6sy7ekyVGQ/viewform?embedded=true" width="100%" height="2300" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </section>
    </main>
    <b-footer />
  </div>
</template>

<style lang="scss">
@import '@compromis/blobby/scss/blobby';

body {
  font-weight: 500;
}

.container {
  padding: 2rem;
  max-width: 1000px;
}

.header {
  .compromis-logo {
    margin-bottom: 3rem;

    svg {
      width: 200px;
    }
  }

  .site-title {
    font-weight: 500;
    padding-bottom: 1rem;
    line-height: 1;
    margin-bottom: 1.5rem;
  }
}
</style>
