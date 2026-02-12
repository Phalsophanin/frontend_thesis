<template>
  <aside class="w-66 bg-[#ffffff] border-r border-gray-200 flex flex-col h-screen shrink-0 font-sans relative">

    <div class="absolute left-0 top-0 bottom-0 w-1.5 flex flex-col">
      <div class="flex-1 bg-[#99cc66]"></div>
      <div class="flex-1 bg-[#3399ff]"></div>
      <div class="flex-1 bg-[#ff3333]"></div>
      <div class="flex-1 bg-[#ffcc33]"></div>
    </div>

    <header class="p-10 text-center">
      <img src="../../assets/loogo.png" alt="Logo" class="h-20 mb-1" />
      <!-- <h1 class="text-xl font-bold text-gray-900 tracking-tight uppercase">Welcome</h1>
      <p class="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase mt-1">Management System</p> -->
    </header>

    <nav class="flex-1 px-8 space-y-2 overflow-y-auto no-scrollbar">

      <div class="space-y-3">
        <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">Pre-School</label>

        <div class="space-y-2">
          <a href="#"
            class="flex items-center gap-3 px-4 py-3 bg-white  border-gray-200 rounded-lg text-gray-500 hover:border-[#3399ff] hover:text-[#ff3333] transition-all text-xs font-bold uppercase ">
            <LayoutDashboard :size="18" stroke-width="2.5" />
            Dashboard
          </a>
          <button @click="openTeacher = !openTeacher"
            class="w-full flex items-center gap-3 px-4 py-3 bg-white  rounded-lg transition-all text-xs font-bold uppercase tracking-wide"
            :class="openTeacher ? 'borde r-[#ffcc33] ring-1 ring-[#ffcc33] text-[#ffcc33]' : 'border-gray-200 text-gray-500'">
            <GraduationCap :size="18" />
            <span>Teachers</span>
            <ChevronDown :size="14" class="ml-auto transition-transform" :class="{ 'rotate-180': openTeacher }" />
          </button>
          <div v-if="openTeacher" class="bg-white/50 border-x border-b border-gray-100 rounded-b-lg mx-1">
            <a href="#"
              class="block px-10 py-2.5 text-[10px] font-bold text-gray-400 hover:text-[#99cc66] uppercase">All
              Teachers</a>
            <a href="#"
              class="block px-10 py-2.5 text-[10px] font-bold text-gray-400 hover:text-[#99cc66] uppercase">Add New</a>
          </div>
          <div class="space-y-2">
            <button @click="openClass = !openClass"
              class="w-full flex items-center gap-3 px-4 py-3 bg-white rounded-lg text-gray-500 transition-all text-xs font-bold uppercase tracking-wide"
              :class="openClass ? 'border-[#99cc66] ring-1 ring-[#99cc66] text-[#99cc66]' : 'border-gray-200 text-gray-500'">
              <BookOpen :size="18" />
              <span>Class</span>
              <ChevronDown :size="14" class="ml-auto transition-transform" :class="{ 'rotate-180': openClass }" />
            </button>
            <div v-if="openClass" class="bg-white/50 border-x border-b border-gray-100 rounded-b-lg mx-1">
              <a href="#"
                class="block px-10 py-2.5 text-[10px] font-bold text-gray-400 hover:text-[#99cc66] uppercase">All
                Classes</a>
              <a href="#"
                class="block px-10 py-2.5 text-[10px] font-bold text-gray-400 hover:text-[#99cc66] uppercase">Add
                New</a>
            </div>
          </div>
        </div>
      </div>
      <div class="space-y-2">
        <button @click="openStudent = !openStudent"
          class="w-full flex items-center gap-3 px-4 py-3 bg-white rounded-lg transition-all text-xs font-bold uppercase tracking-wide"
          :class="openStudent ? 'border-[#ffcc33] ring-1 ring-[#ffcc33] text-[#ffcc33]' : 'border-gray-200 text-gray-500'">
          <GraduationCap :size="18" />
          <span>Students</span>
          <ChevronDown :size="14" class="ml-auto transition-transform" :class="{ 'rotate-180': openStudent }" />
        </button>
        <div v-if="openStudent" class="bg-white/50 border-x border-b border-gray-100 rounded-b-lg mx-1">
          <a href="#" class="block px-10 py-2.5 text-[10px] font-bold text-gray-400 hover:text-[#99cc66] uppercase">All
            Students</a>
          <a href="#" class="block px-10 py-2.5 text-[10px] font-bold text-gray-400 hover:text-[#99cc66] uppercase">Add
            New</a>
        </div>
        <a href="#"
          class="flex items-center gap-3 px-4 py-3 bg-white  border-gray-200 rounded-lg text-gray-500 hover:border-[#3399ff] hover:text-[#3399ff] transition-all text-xs font-bold uppercase ">
          <ClipboardCheck :size="18" />
          Results
        </a>
        <a href="#"
          class="flex items-center gap-3 px-4 py-3 bg-white  border-gray-200 rounded-lg text-gray-500 hover:border-[#ff3333] hover:text-[#ff3333] transition-all text-xs font-bold uppercase ">
          <ClipboardCheck :size="18" />
          Attendance
        </a>
      </div>

      <div class="space-y-1">
        <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">University</label>

        <div class="space-y-2">
          <button @click="openUni = !openUni"
            class="w-full flex items-center gap-3 px-4 py-3 bg-white rounded-lg transition-all text-xs font-bold uppercase tracking-wide "
            :class="openUni ? 'border-[#ffcc33] ring-1 ring-[#ffcc33] text-[#ffcc33]' : 'border-gray-200 text-gray-500'">
            <GraduationCap :size="18" />
            <span>Students</span>
            <ChevronDown :size="14" class="ml-auto transition-transform" :class="{ 'rotate-180': openUni }" />
          </button>
           <div v-if="openUni" class="bg-white/50 border-x border-b border-gray-100 rounded-b-lg mx-1">
          <a href="#" class="block px-10 py-2.5 text-[10px] font-bold text-gray-400 hover:text-[#99cc66] uppercase">All
            Students</a>
          <a href="#" class="block px-10 py-2.5 text-[10px] font-bold text-gray-400 hover:text-[#99cc66] uppercase">Add
            New</a>
        </div>
          <button @click="openresult = !openresult"
            class="w-full flex items-center gap-3 px-4 py-3 bg-white rounded-lg transition-all text-xs font-bold uppercase tracking-wide "
            :class="openresult ? 'border-[#ffcc33] ring-1 ring-[#ffcc33] text-[#ffcc33]' : 'border-gray-200 text-gray-500'">
            <GraduationCap :size="18" />
            <span>Results</span>
            <ChevronDown :size="14" class="ml-auto transition-transform" :class="{ 'rotate-180': openresult }" />
          </button>
           <div v-if="openresult" class="bg-white/50 border-x border-b border-gray-100 rounded-b-lg mx-1">
          <a href="#" class="block px-10 py-2.5 text-[10px] font-bold text-gray-400 hover:text-[#99cc66] uppercase">All
            Results</a>
          <a href="#" class="block px-10 py-2.5 text-[10px] font-bold text-gray-400 hover:text-[#99cc66] uppercase">Add
            New</a>
        </div>
          <button @click="openattendent = !openattendent"
            class="w-full flex items-center gap-3 px-4 py-3 bg-white rounded-lg transition-all text-xs font-bold uppercase tracking-wide "
            :class="openattendent ? 'border-[#ffcc33] ring-1 ring-[#ffcc33] text-[#ffcc33]' : 'border-gray-200 text-gray-500'">
            <GraduationCap :size="18" />
            <span>Attendance</span>
            <ChevronDown :size="14" class="ml-auto transition-transform" :class="{ 'rotate-180': openattendent }" />
          </button>
           <div v-if="openattendent" class="bg-white/50 border-x border-b border-gray-100 rounded-b-lg mx-1">
          <a href="#" class="block px-10 py-2.5 text-[10px] font-bold text-gray-400 hover:text-[#99cc66] uppercase">All
            Attendance</a>
          <a href="#" class="block px-10 py-2.5 text-[10px] font-bold text-gray-400 hover:text-[#99cc66] uppercase">Add
            New</a>
        </div>
        </div>
      </div>
    </nav>

    <footer class="p-8 border-t border-gray-200 bg-white">
      <div class="flex items-center justify-between">
        <div class="flex flex-col">
          <span class="text-[10px] font-bold text-gray-900 uppercase">Admin User</span>
          <span class="text-[9px] font-bold text-gray-300 uppercase tracking-widest mt-0.5">© HFCCF 2026</span>
        </div>
        <button class="p-2 hover:bg-red-50 rounded-lg text-gray-300 hover:text-[#ff3333] transition-colors">
          <LogOut :size="18" />
        </button>
      </div>
    </footer>

  </aside>
</template>

<script setup>
import { ref } from 'vue'
import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  ClipboardCheck,
  ChevronDown,
  LogOut
} from 'lucide-vue-next'

const openClass = ref(false)
const openStudent = ref(false)
const openUni = ref(false)
const openTeacher = ref(false)
const openresult = ref(false)
const openattendent = ref(false)
</script>
<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>