<template>
    <div>
        <nav>
            <div id="navbar-brand">
                <!-- Add logo/image here? -->
                <router-link to="/">
                    <h1 class="appname">Agents Against <br class="hide-on-desktop" /> the Night</h1>
                </router-link>
            </div>
            <ul id="navbar-links">
                <router-link to="/">
                    <li>
                        Home
                    </li>
                </router-link>
                <router-link to="/newAgent">
                    <li>
                        Create New
                    </li>
                </router-link>
                <router-link to="/agents">
                    <li>
                        Agents
                    </li>
                </router-link>
                <router-link to="/profile" v-if="this.$store.state.username != null">
                    <li>
                        {{this.$store.state.username}}
                    </li>
                </router-link>
                <router-link to="/login" v-else>
                    <li>
                        Log In
                    </li>
                </router-link>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
/* Mobile + General styling */
h1 {
    font-size: 2rem;
    text-decoration-color: var(--purple);
}
a {
    font-weight: bold;
    color: var(--purple);
    text-decoration: none;
}

ul {
    list-style: none;
}

nav {
    padding: 15px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    background-color: var(--black);
    gap: 15px;
}

#navbar-links {
    display: flex;
    flex-flow: column nowrap;
    justify-items: center;
    row-gap: 10px;
}

#navbar-links li {
    height: 100%;
    text-transform: uppercase;
}

nav a.router-link-exact-active {
    color: var(--red);
}

nav a:active {
    color: var(--red);
}

.appname {
    font-family: 'Times New Roman', Times, serif;
}

/* Desktop styling */
@media screen and (min-width:550px) {
    h1 {
        font-size: 2rem;
    }

    nav {
        padding: 30px 20px;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
    }
    nav a:hover {
        color: var(--red);
    }

    #navbar-links {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
        column-gap: 20px;
    }
    #navbar-links li {
        display: inline-block;
        text-align: center;
        white-space: nowrap;
    }

}
</style>

<script>
export default {
    name: 'NavBar'
}
</script>