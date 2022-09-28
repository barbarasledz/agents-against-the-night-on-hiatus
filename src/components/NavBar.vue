<template>
    <div>
        <nav>
            <div id="navbar-brand">
                <!-- Add logo/image here? -->
                <a><h1>Agents Against the Night</h1></a>
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

<style>
/* Mobile + General styling */
nav {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    gap: 10px;
}
ul {
    list-style: none;
}
#navbar-links li {
    margin: 10px;
    height: 100%;
}

/* Desktop styling */
@media screen and (min-width:500px)  {
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