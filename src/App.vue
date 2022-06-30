<template>
    <header class="shadow-sm">
        <nav class="navbar navbar-expand-md bg-white">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">Vite App</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about">About</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <router-view class="py-4" />
</template>
