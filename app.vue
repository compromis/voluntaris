<script setup>
import CompromisLogo from "@compromis/blobby/components/logos/CompromisLogo.vue";
import BFooter from "@compromis/blobby/components/footer/BFooter.vue";
import BCard from "@compromis/blobby/components/card/BCard.vue";
import BButton from "@compromis/blobby/components/button/BButton.vue";
import { ref } from "vue";

const lang = ref("ca");
</script>

<template>
  <div class="container">
    <Head lang="ca">
      <Title>Voluntaris - Compromís</Title>
      <Meta
        name="description"
        content="El 29 de novembre tenim una cita clau. Des de Front Valencià volem portar al Congrés la mateixa força, valentia i proximitat amb la qual treballem poble a poble."
      />
      <Meta
        name="keywords"
        content="compromis, front valencia, vountaris, finançament just, altet, rodalies, dependencia, valencia, alacant, aeroport"
      />
      <Meta name="robots" content="index, follow" />

      <Meta name="og:locale" content="ca" />
      <Meta name="og:type" content="website" />
      <Meta
        name="og:description"
        content="Apunta't com a voluntari per a col·laborar en la campanya electoral de 2026!"
      />
      <Meta
        name="og:image"
        content="https://voluntaris.compromis.net/thumbnail.png"
      />
      <Meta name="og:url" content="https://voluntaris.compromis.net" />
      <Meta name="twitter:site" content="@compromis" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Voluntaris - Compromís" />
      <Meta
        name="twitter:description"
        content="Apunta't com a voluntari per a col·laborar en la campanya electoral de 2023!"
      />
      <Meta
        name="twitter:image"
        content="https://voluntaris.compromis.net/thumbnail.png"
      />
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

      <b-button size="xl" shadow href="#sign"> Emplena el formulari </b-button>
    </header>

    <main>
      <section class="card-grid my-5">
        <b-card as="article" padded class="text-xl">
          <nav class="lang-switch" aria-label="Idioma">
            <button
              type="button"
              :class="{ active: lang === 'ca' }"
              :aria-pressed="lang === 'ca'"
              @click="lang = 'ca'"
            >
              Valencià
            </button>
            <span aria-hidden="true">|</span>
            <button
              type="button"
              :class="{ active: lang === 'es' }"
              :aria-pressed="lang === 'es'"
              @click="lang = 'es'"
            >
              Castellà
            </button>
          </nav>

          <div v-if="lang === 'ca'" lang="ca" class="campaign-text">
            <h2>Front Valencià: La veu que necessitem a Madrid el 29N</h2>
            <p>
              El 29 de novembre tenim una cita clau. Des de
              <strong>Front Valencià</strong> volem portar al Congrés la mateixa
              força, valentia i proximitat amb la qual treballem poble a poble.
              Hem demostrat que sabem governar per a la majoria, però per a anar
              més lluny i defensar els nostres interessos sense amos ni lligams,
              necessitem la teua energia.
            </p>

            <h3>Què defensarem a les Corts Generals?</h3>
            <ul>
              <li>
                <strong>Finançament i inversions justes:</strong> Fi a la
                infrafinançament i condonació del deute històric per a blindar
                la nostra sanitat, educació i transport públic.
              </li>
              <li>
                <strong>Habitatge i treball digne:</strong> Topall als preus del
                lloguer, regulació contra l'especulació i suport a la joventut,
                autònoms i l'agricultura local.
              </li>
              <li>
                <strong>Drets socials i territori:</strong> Blindatge dels
                serveis públics, transició energètica respectuosa amb el
                territori i gestió eficaç davant la crisi climàtica.
              </li>
            </ul>

            <h3>Ens ajudes a fer-ho possible?</h3>
            <p>
              Per a tindre una veu pròpia i contundent a Madrid necessitem la
              participació de tots i totes. Fes córrer la veu, participa en la
              campanya o suma't com a voluntari/a.
            </p>
            <p class="closing">
              El 29N, la força valenciana depèn de tu. Ens ajudes?
            </p>
          </div>

          <div v-else lang="es" class="campaign-text">
            <h2>Front Valencià: La voz que necesitamos en Madrid el 29N</h2>
            <p>
              El 29 de noviembre tenemos una cita clave. Desde
              <strong>Front Valencià</strong> queremos llevar al Congreso la
              misma fuerza, valentía y cercanía con la que trabajamos pueblo a
              pueblo. Hemos demostrado que sabemos gobernar para la mayoría,
              pero para llegar más lejos y defender nuestros intereses sin amos
              ni ataduras, necesitamos tu energía.
            </p>

            <h3>¿Qué defenderemos en las Cortes Generales?</h3>
            <ul>
              <li>
                <strong>Financiación e inversiones justas:</strong> Fin a la
                infrafinanciación y condonación de la deuda histórica para
                blindar nuestra sanidad, educación y transporte público.
              </li>
              <li>
                <strong>Vivienda y trabajo digno:</strong> Tope a los precios
                del alquiler, regulación contra la especulación y apoyo a la
                juventud, autónomos y la agricultura local.
              </li>
              <li>
                <strong>Derechos sociales y territorio:</strong> Blindaje de los
                servicios públicos, transición energética respetuosa con el
                territorio y gestión eficaz ante la crisis climática.
              </li>
            </ul>

            <h3>¿Nos ayudas a hacerlo posible?</h3>
            <p>
              Para tener una voz propia y contundente en Madrid necesitamos la
              participación de todos y todas. Corre la voz, participa en la
              campaña o súmate como voluntario/a.
            </p>
            <p class="closing">
              El 29N, la fuerza valenciana depende de ti. ¿Nos ayudas?
            </p>
          </div>
        </b-card>
      </section>

      <section id="sign">
        <iframe
          class="form rounded overflow-hidden"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdr6Wjkey95uOHEWtGoc50b0wOI1kuP4wlkluaH6sy7ekyVGQ/viewform?embedded=true"
          width="100%"
          height="2300"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          >Loading…</iframe
        >
      </section>
    </main>
    <b-footer />
  </div>
</template>

<style lang="scss">
@import "@compromis/blobby/scss/blobby";

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

.lang-switch {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;

  span {
    opacity: 0.4;
  }

  button {
    background: none;
    border: 0;
    padding: 0;
    font: inherit;
    color: inherit;
    cursor: pointer;
    opacity: 0.6;
    text-decoration: underline;
    text-underline-offset: 0.2em;

    &:hover,
    &:focus-visible {
      opacity: 1;
    }

    &.active {
      opacity: 1;
      font-weight: 700;
      text-decoration: none;
      cursor: default;
    }
  }
}

.campaign-text {
  h2 {
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 1.25rem;
  }

  h3 {
    font-weight: 700;
    margin-top: 2rem;
    margin-bottom: 0.75rem;
  }

  p {
    margin-bottom: 1rem;
  }

  ul {
    padding-left: 1.25rem;
    margin-bottom: 1rem;

    li {
      margin-bottom: 0.75rem;
    }
  }

  .closing {
    font-weight: 700;
    margin-top: 1.5rem;
    margin-bottom: 0;
  }
}
</style>
