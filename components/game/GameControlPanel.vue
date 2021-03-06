<template>
  <div class="control-panel has-background-white">
    <b>State generation speed level</b> : {{ speedOptions[currentSpeed].name }}
    <div class="buttons is-centered has-addons is-marginless">
      <button
        class="button is-primary"
        :disabled="runningEvolution"
        @click="launchGridEvolution()"
      >
        <span class="icon">
          <fa-icon class="fa-lg" :icon="['far', 'play-circle']"></fa-icon>
        </span>
        <span>Launch evolution</span>
      </button>

      <button
        class="button is-danger is-outlined"
        :disabled="!runningEvolution"
        @click="stopGridEvolution()"
      >
        <span class="icon">
          <fa-icon class="fa-lg" :icon="['far', 'stop-circle']"></fa-icon>
        </span>
        <span>Stop</span>
      </button>

      <button class="button is-info is-outlined" @click="nextGridEvolution()">
        <span class="icon">
          <fa-icon :icon="['fas', 'step-forward']"></fa-icon>
        </span>
        <span>Next</span>
      </button>

      <button
        class="button is-info is-outlined"
        @click="slownDownGridEvolution()"
      >
        <span class="icon">
          <fa-icon :icon="['fas', 'angle-double-down']"></fa-icon>
        </span>
        <span>Slow down</span>
      </button>

      <button
        class="button is-info is-outlined"
        @click="speedUpGridEvolution()"
      >
        <span class="icon">
          <fa-icon :icon="['fas', 'angle-double-up']"></fa-icon>
        </span>
        <span>Speed up</span>
      </button>
    </div>

    <div class="buttons is-centered has-addons">
      <button
        class="button is-link"
        :disabled="cellsGrid.editorMode"
        @click="editorMode()"
      >
        <span class="icon">
          <fa-icon :icon="['fas', 'edit']"></fa-icon>
        </span>
        <span>Editor Mode</span>
      </button>

      <button class="button is-link is-outlined" @click="randomizeGridState()">
        <span class="icon">
          <fa-icon class="fa-lg" :icon="['fas', 'dice']"></fa-icon>
        </span>
        <span>Randomize state</span>
      </button>
      <button class="button is-danger" @click="clearGridState()">
        <span class="icon">
          <fa-icon :icon="['fas', 'trash-alt']"></fa-icon>
        </span>
        <span>Clear the grid</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'GameControlPanel',
  data() {
    return {
      runningEvolution: false,
      timerId: 0,
      currentSpeed: 3, // aim default speed
      speedOptions: [
        {
          name: 'very slow',
          timeout: 2500
        },
        {
          name: 'slow',
          timeout: 1500
        },
        {
          name: '1 seconde',
          timeout: 1000
        },
        {
          name: 'default',
          timeout: 500
        },
        {
          name: '300 ms',
          timeout: 300
        },
        {
          name: 'fast',
          timeout: 150
        },
        {
          name: 'very fast',
          timeout: 75
        },
        {
          name: 'such speed!',
          timeout: 20
        }
      ]
    }
  },
  computed: {
    ...mapState({
      cellsGrid: (state) => state['cells-grid']
    })
  },
  beforeDestroy() {
    this.$store.dispatch('cells-grid/editorModeOff')
    // Prevent timeout to still be running on switch pages
    clearTimeout(this.timerId)
  },
  methods: {
    launchGridEvolution() {
      window.console.log('launch evolution')
      this.$store.dispatch('cells-grid/editorModeOff')
      this.runningEvolution = true
      // Used recursive setTimeout to avoid multiple calls queued back to back with setInterval
      this.timerId = setTimeout(
        function tick() {
          this.nextGridState()
          this.timerId = setTimeout(
            tick.bind(this),
            this.speedOptions[this.currentSpeed].timeout
          )
        }.bind(this),
        this.speedOptions[this.currentSpeed].timeout
      )
    },
    slownDownGridEvolution() {
      if (this.currentSpeed !== 0) {
        this.currentSpeed--
      }
    },
    speedUpGridEvolution() {
      if (this.currentSpeed !== this.speedOptions.length - 1) {
        this.currentSpeed++
      }
    },
    stopGridEvolution() {
      window.console.log('stop evolution')
      this.runningEvolution = false
      clearTimeout(this.timerId)
    },
    nextGridEvolution() {
      this.stopGridEvolution()
      this.nextGridState()
    },
    nextGridState() {
      // window.console.log('next grid state')
      this.$store.dispatch('cells-grid/nextGridState')
    },
    editorMode() {
      window.console.log('editor mode')
      this.stopGridEvolution()
      this.$store.dispatch('cells-grid/editorModeOn')
    },
    randomizeGridState() {
      window.console.log('randomize state')
      this.$store.dispatch('cells-grid/randomizeGridState')
    },
    clearGridState() {
      window.console.log('clear grid state')
      this.stopGridEvolution()
      this.$store.dispatch('cells-grid/clearGridState')
    }
  }
}
</script>

<style scoped>
.control-panel {
  padding: 0.5rem 0.5rem 0 0.5rem;
}
</style>
