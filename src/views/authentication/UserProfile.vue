<template>
    <div class="about">
        <h1>This is an account page</h1>
        <p>You are logged in as {{this.$store.state.username}}</p>
        <button class="submit-button">Log out</button>
    </div>
</template>

<script>
export default {
    name: 'UserProfile'
}
</script>