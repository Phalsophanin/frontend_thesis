<template>
  <aside class="w-56 bg-[#ffffff] border-r border-gray-200 flex flex-col h-screen shrink-0 font-sans relative">
    <div class="absolute left-0 top-0 bottom-0 w-1 flex flex-col">
      <div class="flex-1 bg-[#99cc66]"></div>
      <div class="flex-1 bg-[#3399ff]"></div>
      <div class="flex-1 bg-[#ff3333]"></div>
      <div class="flex-1 bg-[#ffcc33]"></div>
    </div>

    <header class="p-6 text-center">
      <img src="../../assets/loogo.png" alt="Logo" class="h-14 mx-auto mb-1" />
    </header>

    <nav class="flex-1 px-4 space-y-1 overflow-y-auto no-scrollbar">
      
      <div class="py-2">
        <label class="block text-[12px] font-bold text-gray-400 uppercase tracking-widest px-4 mb-2">Pre-School</label>

        <div class="space-y-1">
          <a href="#"
            class="flex items-center gap-3 px-4 py-2 bg-white border border-transparent rounded-lg text-gray-500 hover:border-[#3399ff] hover:text-[#ff3333] transition-all text-[11px] font-bold uppercase">
            <LayoutDashboard :size="16" stroke-width="2.5" />
            Dashboard
          </a>

          <button @click="openTeacher = !openTeacher"
            class="w-full flex items-center gap-3 px-4 py-2 bg-white rounded-lg transition-all text-[11px] font-bold uppercase tracking-wide"
            :class="openTeacher ? 'ring-1 ring-[#ffcc33] text-[#ffcc33]' : 'text-gray-500'">
            <GraduationCap :size="16" />
            <span>Teachers</span>
            <ChevronDown :size="12" class="ml-auto transition-transform" :class="{ 'rotate-180': openTeacher }" />
          </button>
          <div v-if="openTeacher" class="bg-gray-50/50 rounded-b-lg mb-1">
            <a href="#" class="block px-11 py-2 text-[9px] font-bold text-gray-400 hover:text-[#99cc66] uppercase">All Teachers</a>
            <a href="#" class="block px-11 py-2 text-[9px] font-bold text-gray-400 hover:text-[#99cc66] uppercase">Add New</a>
          </div>

          <button @click="openClass = !openClass"
            class="w-full flex items-center gap-3 px-4 py-2 bg-white rounded-lg transition-all text-[11px] font-bold uppercase tracking-wide"
            :class="openClass ? 'ring-1 ring-[#99cc66] text-[#99cc66]' : 'text-gray-500'">
            <BookOpen :size="16" />
            <span>Class</span>
            <ChevronDown :size="12" class="ml-auto transition-transform" :class="{ 'rotate-180': openClass }" />
          </button>
          <div v-if="openClass" class="bg-gray-50/50 rounded-b-lg mb-1">
            <a href="#" class="block px-11 py-2 text-[9px] font-bold text-gray-400 hover:text-[#99cc66] uppercase">All Classes</a>
            <a href="#" class="block px-11 py-2 text-[9px] font-bold text-gray-400 hover:text-[#99cc66] uppercase">Add New</a>
          </div>

          <button @click="openStudent = !openStudent"
            class="w-full flex items-center gap-3 px-4 py-2 bg-white rounded-lg transition-all text-[11px] font-bold uppercase tracking-wide"
            :class="openStudent ? 'ring-1 ring-[#ffcc33] text-[#ffcc33]' : 'text-gray-500'">
            <GraduationCap :size="16" />
            <span>Students</span>
            <ChevronDown :size="12" class="ml-auto transition-transform" :class="{ 'rotate-180': openStudent }" />
          </button>
          <div v-if="openStudent" class="bg-gray-50/50 rounded-b-lg mb-1">
            <a href="#" class="block px-11 py-2 text-[9px] font-bold text-gray-400 hover:text-[#99cc66] uppercase">All Students</a>
            <a href="#" class="block px-11 py-2 text-[9px] font-bold text-gray-400 hover:text-[#99cc66] uppercase">Add New</a>
          </div>

          <a href="#" class="flex items-center gap-3 px-4 py-2 text-gray-500 hover:text-[#3399ff] transition-all text-[11px] font-bold uppercase">
            <ClipboardCheck :size="16" />
            Results
          </a>
          <a href="#" class="flex items-center gap-3 px-4 py-2 text-gray-500 hover:text-[#ff3333] transition-all text-[11px] font-bold uppercase">
            <ClipboardCheck :size="16" />
            Attendance
          </a>
        </div>
      </div>

      <div class="py-2">
        <label class="block text-[12px] font-bold text-gray-400 uppercase tracking-widest px-4 mb-2">University</label>
        <div class="space-y-1">
          <button @click="openUni = !openUni"
            class="w-full flex items-center gap-3 px-4 py-2 bg-white rounded-lg transition-all text-[11px] font-bold uppercase tracking-wide"
            :class="openUni ? 'ring-1 ring-[#ffcc33] text-[#ffcc33]' : 'text-gray-500'">
            <GraduationCap :size="16" />
            <span>Students</span>
            <ChevronDown :size="12" class="ml-auto transition-transform" :class="{ 'rotate-180': openUni }" />
          </button>
          <div v-if="openUni" class="bg-gray-50/50 rounded-b-lg mb-1">
            <a href="#" class="block px-11 py-2 text-[9px] font-bold text-gray-400 hover:text-[#99cc66] uppercase">All Students</a>
            <a href="#" class="block px-11 py-2 text-[9px] font-bold text-gray-400 hover:text-[#99cc66] uppercase">Add New</a>
          </div>

          <button @click="openresult = !openresult"
            class="w-full flex items-center gap-3 px-4 py-2 bg-white rounded-lg transition-all text-[11px] font-bold uppercase tracking-wide"
            :class="openresult ? 'ring-1 ring-[#ffcc33] text-[#ffcc33]' : 'text-gray-500'">
            <GraduationCap :size="16" />
            <span>Results</span>
            <ChevronDown :size="12" class="ml-auto transition-transform" :class="{ 'rotate-180': openresult }" />
          </button>
          <div v-if="openresult" class="bg-gray-50/50 rounded-b-lg mb-1">
            <a href="#" class="block px-11 py-2 text-[9px] font-bold text-gray-400 hover:text-[#99cc66] uppercase">All Results</a>
          </div>
        </div>
      </div>
    </nav>

    <footer class="p-4 border-t border-gray-100 bg-white">
      <div class="flex items-center justify-between">
        <div class="flex flex-col">
          <span class="text-[9px] font-bold text-gray-900 uppercase">Admin User</span>
          <span class="text-[8px] font-bold text-gray-300 uppercase tracking-widest">© HFCCF 2026</span>
        </div>
        <button class="p-1.5 hover:bg-red-50 rounded-md text-gray-300 hover:text-[#ff3333] transition-colors">
          <LogOut :size="16" />
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
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>