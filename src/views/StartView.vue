<template>
  <div class="container-fluid" id="full-size">
    <div class="row h-100">
      <div
        class="h1 col-12 d-flex justify-content-center align-items-center"
        style="background-color: #4a306d; height: 200px; color: white; margin: 0 !important"
      >
        Who are you?&nbsp;<div style="font-size: 3rem;">🤔</div>
      </div>
      <div
        class="col-6 h-100 d-flex justify-content-center align-items-center"
        style="background-color: #e8d7f1"
      >
        <a href="/taker"><h1>Taker</h1></a>
      </div>
      <div
        class="col-6 h-100 d-flex justify-content-center align-items-center"
        style="background-color: #0e273c"
      >
        <a href="/maker"><h1 style="color: white">Maker</h1></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
#full-size {
  width: 100vw;
  height: calc(100vh - 200px);
}
</style>