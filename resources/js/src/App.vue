<script setup lang="ts"></script>

<template>
    <div class="min-h-screen bg-slate-300">
        <main class="container m-auto">
            <header class="py-10 text-center">
                <ul class="grid grid-cols-5">
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/students">Students</router-link>
                    </li>
                    <li>
                        <router-link to="/teachers">Teachers</router-link>
                    </li>
                    <li>
                        <router-link to="/courses">Courses</router-link>
                    </li>
                    <li>
                        <router-link to="/registrations">Registrations</router-link>
                    </li>
    
                </ul>
            </header>
            <main>
                <RouterView />
            </main>
        </main>
    </div>
</template>
