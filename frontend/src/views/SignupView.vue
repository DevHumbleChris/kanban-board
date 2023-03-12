<template>
    <div class="relative py-10 sm:py-5">
        <div class="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
            <div class="m-auto space-y-3 md:w-8/12 lg:w-6/12 xl:w-6/12">
                <div class="flex items-center justify-center">
                    <img src="../assets/vue-kenya.png" loading="lazy" class="w-24" alt="vue-kenya-logo" />
                    <h1 class="text-3xl font-bold text-primary">Kanban Board.</h1>
                </div>
                <div
                    class="rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
                    <div class="p-8 py-6 sm:p-10">
                        <h2 class="mb-4 text-2xl font-bold text-primary text-center">Register an account.</h2>
                        <form action="" class="space-y-8 sm:space-y-4">
                            <div class="space-y-2">
                                <label for="username" class="text-primary">Username</label>
                                <input type="text" name="username" id="username" autocomplete="off"
                                    class="focus:outline-none block w-full rounded-md border border-gray-300 bg-transparent px-4 py-3 transition duration-300 focus:ring-2 focus:ring-cyan-300" />
                            </div>
                            <div class="space-y-2">
                                <label for="email" class="text-primary">Email</label>
                                <input type="email" name="email" id="email" autocomplete="off"
                                    class="focus:outline-none block w-full rounded-md border border-gray-300 bg-transparent px-4 py-3 transition duration-300 focus:ring-2 focus:ring-cyan-300" />
                            </div>

                            <div class="space-y-2">
                                <label for="pwd" class="text-primary">Password</label>
                                <input type="password" name="pwd" id="pwd" autocomplete="off"
                                    class="focus:outline-none block w-full rounded-md border border-gray-300 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300" />
                            </div>

                            <button type="submit"
                                class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                                <span class="relative text-base font-semibold text-white dark:text-dark">Register</span>
                            </button>

                            <p
                                class="text-sm block text-center text-gray-600">
                                Already have an account ?
                                <router-link to="/login" class="text-primary">Sign in</router-link>.
                            </p>
                        </form>
                    </div>
                </div>
                <a href="https://the-coding-montana.vercel.app" class="block space-x-4 text-center text-gray-500">
                    <span>&copy; The Coding Montana 😍</span>
                </a>
            </div>
        </div>
    </div>
</template>
