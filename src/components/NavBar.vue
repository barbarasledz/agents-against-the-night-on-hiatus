<template>
    <div>
        <nav>
            <div id="navbar-brand">
                <!-- Add logo/image here? -->
                <a>
                    <h1 class="appname">Agents Against <br class="hide-on-desktop" /> the Night</h1>
                </a>
            </div>
            <ul id="navbar-links">
                <a>
                    <li>
                        Create New
                    </li>
                </a>
                <a>
                    <li>
                        Characters
                    </li>
                </a>
                <a>
                    <li>
                        Log In
                    </li>
                </a>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
/* Mobile + General styling */
h1 {
    font-size: 2rem;
}

a {
    font-weight: bold;
    color: var(--purple);
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
    color: var(--blue);
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

    #navbar-links {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
        column-gap: 15px;
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