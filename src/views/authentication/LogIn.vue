<template>
  <div>
    <h1>Log In</h1>
    <form class="login-form" v-on:submit="onSubmit">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" placeholder="Username" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Password" />
      </div>
      <div class="form-group">
        <button type="submit" class="submit-button">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import * as auth from "../../services/AuthService"

export default {
  name: 'logIn',
  methods: {
    onSubmit: function (event) {
      event.preventDefault();
      auth.login();
      this.$router.push({ name: 'home' });
    }
  }
}

</script>

<style>
.login-form {
  margin: 15px auto;
  width: 350px;
  max-width: 100%;
}

.form-group {
  padding-bottom: 15px;
  display: flex;
  flex-flow: column nowrap;
  margin: auto;
  font-size: 1.2rem;
  line-height: 1.3rem;
}

.form-group label {
  font-weight: bold;
  margin-bottom: 5px;
}

.form-group input {
  text-align: center;
  padding: 4px;
  background-color: var(--lightgrey);
  border: none;
}
</style>