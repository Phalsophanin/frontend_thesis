<template>
  <div class="min-h-screen bg-[#F2F4F7] flex items-center justify-center p-6 font-sans">
    
    <div class="w-full max-w-120 bg-white rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(0,0,0,0.04)] overflow-hidden flex">
      
      <div class="w-2 flex flex-col">
        <div class="flex-1 bg-[#99cc66]"></div>
        <div class="flex-1 bg-[rgb(51,153,255)]"></div>
        <div class="flex-1 bg-[#ff3333]"></div>
        <div class="flex-1 bg-[#ffcc33]"></div>
      </div>

      <div class="flex-1 p-10 md:p-14" align="center">
        <header class="mb-10">
          <img src="../../assets/loogo.png" alt="Logo" class="h-20 mb-10" />
          <h1 class="text-2xl font-bold text-gray-900 tracking-tight">WELCOME</h1>
          <p class="text-sm text-gray-500 mt-2">TO OUR SYSTEM</p>
        </header>

        <form @submit.prevent="handleLogin" class="space-y-6">
          <div class="space-y-2">
            <div class="flex justify-between items-center">
            <label class="block text-xs font-bold text-gray-400 uppercase tracking-widest">Username or email address</label>
            </div>
            <input 
              v-model="login"
              type="text " 
              placeholder="Username or email address" 
              class="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#3399ff] focus:border-[#3399ff] outline-none transition-all text-sm font-medium text-gray-700"
            />
          </div>

          <div class="space-y-2">
            <div class="flex justify-between items-center">
              <label class="block text-xs font-bold text-gray-400 uppercase tracking-widest">Password</label>
            </div>
            <input 
              v-model="password"
              type="password" 
              placeholder="************" 
              class="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#99cc66] focus:border-[#99cc66] outline-none transition-all text-sm font-medium text-gray-700"
            />
          </div>
           
         
          <div class=" border-gray-50 flex items-center justify-between">
          <label class="flex items-center group cursor-pointer w-fit">
            <input type="checkbox" class="w-4 h-4 rounded border-gray-300 text-[#3399ff] focus:ring-[#3399ff]" />
            <span class="ml-2 text-xs font-semibold text-gray-500 group-hover:text-gray-700 transition-colors">Keep me authenticated</span>
          </label>
           <div class="flex justify-end">
              <a href="#" class="text-[10px] font-bold text-[#ff3333] hover:underline uppercase align ">Forgot?</a>
            </div>
            </div>

          <button 
            type="submit" 
            class="w-full bg-[#3399ff] text-white py-3.5 rounded-lg font-bold text-sm hover:bg-[#2b82d9] shadow-[0_4px_10px_rgba(51,153,255,0.2)] active:shadow-none active:translate-y-0.5 transition-all"
          >
            LOGIN
          </button>
        </form>

        <footer class="mt-12 pt-8 border-t border-gray-50 flex items-center justify-between">
          <span class="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em]">(c) HFCCF 2026</span>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const login = ref('');
const password = ref('');

const handleLogin = () => {
  if (login.value && password.value) {
    router.push('/dashboard');
  }
};
</script>
