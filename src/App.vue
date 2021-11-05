<template>
  <div id="app">
    <nav class="nav navbar-expand bg-dark navbar-dark">
      <a href="/" class="navbar-brand">app quan ly danh ba</a>
      <div class="mr-auto navbar nav">
        <li class="nav-item">
          <router-link to="/contactbook" class="nav-link">
            danh ba
            <i class="fas fa-address-book"></i>
          </router-link>
        </li>
      </div>
    </nav>
<div v-if="!currentUser" class="navbar-nav ml-auto">
  <li class="nav-item">
    <router-link to="/register" class="nav-link">
      Đăng ký
    </router-link>
  </li>
  <li class="nav-item">
    <router-link to="/login" class="nav-link">
      Đăng nhập
        </router-link>
    </li>
  </div>
  <div v-if="currentUser" class="navbar-nav ml-auto">
    <li class="nav-item">
      <router-link to="/profile" class="nav-link">
        {{ currentUser.username }}
      </router-link>
    </li>
    <li class="nav-item">
      <a class="nav-link" @click.prevent="logout"> Đăng xuất </a>
    </li>
  </div>
</nav>
<div class="container mt-3">
  <router-view />
  </div>
</div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      currentUser: null
    };
},
methods: {
  logout() {
    console.log("logout");
      },
  }
};
</script>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import  { mapGetters, mapMutations } from "vuex";
export default {
  name: "App",
  computed: {
    ... mapGetters({
          currentUser: "loggeInUser",
    })
  },
    methods: {
        ...mapMutations([
            "initAuthState") // map this.iniAuthState() to this.$store.commit("initAuthState")
        ]),
        logout() {
          this.$store.commit("logout");
          this.$router.commit("login");
        },
    },
    mounted() {
      this.iniAuthState();
    }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
