<template>
  <div>
    <div ref="interVal" style="background-color: lightblue;width: 0;height: 10px;line-height: 10px;">0%</div>
    <button @click="runSetInterVal">run setInterval</button>

    <br>
    <br>

    <div ref="timeout" style="background-color: lightblue;width: 0;height: 10px;line-height: 10px;">0%</div>
    <button @click="runSetTimeout">run setTimeout</button>


    <br>
    <br>

    <div ref="requestAF" style="background-color: lightblue;width: 0;height: 10px;line-height: 10px;">0%</div>
    <button @click="runRequestAnimationFrame">run requestAnimationFrame</button>

  </div>
</template>

<script>
export default {
  data () {
    return {
      interValTimer: null,
      timeoutTimer: null,
      reqAfTimer: null
    }
  },
  methods: {
    runSetInterVal () {
      clearInterval(this.interValTimer)
      this.$refs.interVal.style.width = '0'
      this.interValTimer = setInterval(() => {
        if (parseInt(this.$refs.interVal.style.width) < 500) {
          this.$refs.interVal.style.width = parseInt(this.$refs.interVal.style.width) + 5 + 'px'
          this.$refs.interVal.innerHTML = parseInt(this.$refs.interVal.style.width) / 5 + '%'
        } else {
          clearInterval(this.interValTimer)
        }
      }, 16)
    },
    runSetTimeout () {
      let _this = this
      clearTimeout(_this.timeoutTimer)
      _this.$refs.timeout.style.width = '0'
      _this.timeoutTimer = setTimeout(function fn () {
        if (parseInt(_this.$refs.timeout.style.width) < 500) {
          _this.$refs.timeout.style.width = parseInt(_this.$refs.timeout.style.width) + 5 + 'px'
          _this.$refs.timeout.innerHTML = parseInt(_this.$refs.timeout.style.width) / 5 + '%'
          _this.timeoutTimer = setTimeout(fn, 16)
        } else {
          clearTimeout(_this.timeoutTimer)
        }
      }, 16)
    },
    runRequestAnimationFrame () {
      let _this = this
      this.$refs.requestAF.style.width = '0'
      cancelAnimationFrame(this.reqAfTimer)
      _this.requestAF = requestAnimationFrame(function fn () {
        if (parseInt(_this.$refs.requestAF.style.width) < 500) {
          _this.$refs.requestAF.style.width = parseInt(_this.$refs.requestAF.style.width) + 5 + 'px'
          _this.$refs.requestAF.innerHTML = parseInt(_this.$refs.requestAF.style.width) / 5 + '%'
          _this.requestAF = requestAnimationFrame(fn)
        } else {
          cancelAnimationFrame(_this.requestAF)
        }
      })
    }
  },
  mounted () {
    this.runSetInterVal()
    this.runSetTimeout()
    this.runRequestAnimationFrame()
  }
}
</script>

