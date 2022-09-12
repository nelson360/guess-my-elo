<template>
  <HeaderWorld/>
  <p> place header</p>
  <BodyComp/>
  <FooterComponent/>
  <FooterComponent/>
  <FooterComponent/>
</template>

<script>
import HeaderWorld from './components/HeaderWorld.vue'
import BodyComp from './components/BodyComp.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderWorld, BodyComp, FooterComponent
  }
}
</script>


