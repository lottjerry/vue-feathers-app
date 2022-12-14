<template>
<div>
  <h1 class="text-center text-5xl">Login</h1>
  <div class="flex justify-center">
    <div class="max-w-md mt-10">
      <form
            class="bg-gray-900 shadow-md rounded px-10 pt-6 pb-10 mb-4"
            method="post"
            @submit.prevent="onSubmit(username, password)"
          >
            <fieldset class="relative z-0 mb-6 w-full group">
              <input
                v-model="username"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                type="text"
                name="username"
                placeholder=" "
              />
              <label for="username" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
            </fieldset>
            <fieldset class="relative z-0 mb-6 w-full group">
              <input
                v-model="password"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                type="password"
                name="password"
                placeholder=" "
              />
              <label for="password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </fieldset>
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Login
            </button>
            <p class="text-white mt-6 text-center mx-10">Dont have an account?
              <router-link to="/signup" class="text-blue-500 hover:text-blue-600 focus:text-blue-600 transition duration-200 ease-in-out">Sign up</router-link>
            </p>
      </form>
    </div>
  </div>
</div>
  
</template>

<script>
</script>
