<template>
  <div>
    <div
      class="
        py-8
        px-8
        max-w-sm
        mx-auto
        bg-white
        rounded-xl
        shadow-md
        space-y-2
        sm:(py-4
        flex
        items-center
        space-y-0 space-x-6)
      "
    >
      <img
        class="block mx-auto h-24 rounded-full sm:(mx-0 flex-shrink-0)"
        src="/img/erin-lindford.jpg"
        alt="Woman's Face"
      />
      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">Erin Lindford</p>
          <p class="text-gray-500 font-medium">Product Engineer</p>
        </div>
        <button
          class="
            px-4
            py-1
            text-sm text-purple-600
            font-semibold
            rounded-full
            border border-purple-200
            hover:(text-white
            bg-purple-600
            border-transparent)
            focus:(outline-none
            ring-2 ring-purple-600 ring-offset-2)
          "
        >
          Message
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted } from "vue";
const { proxy } = getCurrentInstance();
onMounted(async () => {
  const response = await proxy.$http.get("/user/token");
  console.log(response);
});
</script>

<style lang="scss" scoped>
</style>