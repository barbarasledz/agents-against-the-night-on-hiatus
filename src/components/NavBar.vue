<template>
    <div>
        <nav>
            <div id="navbar-brand">
                <!-- Add logo/image here? -->
                <a><h1 class="appname">Agents Against the Night</h1></a>
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
    color: var(--red);
}
a {
  font-weight: bold;
  color: var(--purple);
}
ul {
    list-style: none;
}
#navbar-links li {
    margin: 10px;
    height: 100%;
}
nav a.router-link-exact-active {
  color: var(--blue);
}

/* Desktop styling */
@media screen and (min-width:500px)  {
    h1 {
        font-size: 2rem;
    }
    nav {
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
    }
    #navbar-links {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
    }
    #navbar-links li {
        margin: 0px 10px;
    }
}
</style>

<script>
export default {
    name: 'NavBar'
}
</script>