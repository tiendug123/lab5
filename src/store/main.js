// src/main.js
import store from "./store";
createApp(App)
.mixin({
methods: {
        handle,
    },
})
.use(store)
.use(router)
.mount("#app");