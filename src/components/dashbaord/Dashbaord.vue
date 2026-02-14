<template>
  <Layout>
    <div class="max-w-[1200px] mx-auto space-y-8 animate-in fade-in duration-500">

      <div class="flex items-center gap-4">
        <div class="bg-[#3399ff] p-3 rounded-2xl text-white shadow-lg shadow-blue-100">
          <LayoutIcon :size="24" stroke-width="2.5" />
        </div>
        <div>
          <h1 class="text-2xl font-black text-slate-800 tracking-tight">Dashboard</h1>
        
        </div>
      </div>  

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="(stat, i) in stats" :key="i"
             class="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/30 flex items-center gap-5 group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
          <div class="absolute left-0 top-0 bottom-0 w-1.5" :style="{ backgroundColor: stat.color }"></div>
          <div class="p-4 rounded-2xl transition-colors" :style="{ backgroundColor: stat.color + '15', color: stat.color }">
            <component :is="stat.icon" :size="28" />
          </div>
          <div>
            <p class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">{{ stat.label }}</p>
            <p class="text-2xl font-black text-slate-800">{{ stat.value }} <span class="text-sm font-medium text-slate-300 ml-1 italic">People</span></p>
          </div>
        </div>
      </div>

      <div class="max-w-md bg-white p-6 rounded-[1.5rem] border border-gray-100 shadow-xl shadow-gray-200/40">
        
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center gap-2">
            <CalendarIcon class="text-[#3399ff]" :size="16" />
            <h3 class="text-sm font-black text-slate-800 uppercase tracking-tighter">{{ currentMonth }}</h3>
          </div>

          <div class="flex gap-1">
            <button @click="prevMonth" class="p-1.5 hover:bg-slate-50 rounded-lg text-slate-300 transition-colors">
              <ChevronLeft :size="16" />
            </button>
            <button @click="nextMonth" class="p-1.5 hover:bg-slate-50 rounded-lg text-slate-300 transition-colors">
              <ChevronRight :size="16" />
            </button>
          </div>
        </div>

        <div class="grid grid-cols-7 gap-y-3 text-center">
          <div v-for="day in ['Mo','Tu','We','Th','Fr','Sa','Su']" :key="day"
               class="text-[9px] font-black text-slate-300 uppercase tracking-widest">
            {{ day }}
          </div>

          <div v-for="date in daysInMonth" :key="date"  
               class="relative py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer mx-0.5"
               :class="{
                 'bg-[#3399ff] text-white shadow-md shadow-blue-200 scale-105 z-10': date === selectedDay,
                 'text-slate-600 hover:bg-slate-50 hover:text-[#3399ff]': date !== selectedDay
               }"
               @click="selectedDay = date">
            {{ date }}
          </div>
        </div>
      </div>

    </div>
  </Layout>
</template>

<script setup>
import Layout from '../layout/Layout.vue';
import { 
  LayoutDashboard as LayoutIcon, User, Users, BookOpen, 
  ChevronLeft, ChevronRight, Calendar as CalendarIcon 
} from 'lucide-vue-next';
import { ref, computed } from 'vue';

const stats = [
  { label: 'All Teacher', value: '5', icon: User, color: '#99cc66' },
  { label: 'All Class', value: '5', icon: BookOpen, color: '#ffcc33' },
  { label: 'All Student', value: '5', icon: Users, color: '#3399ff' },
];

const selectedDay = ref(new Date().getDate());
const currentMonthIndex = ref(new Date().getMonth());
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October','November','December'];
const currentMonth = computed(() => months[currentMonthIndex.value]);

const daysInMonth = computed(() => {
  const year = new Date().getFullYear();
  const month = currentMonthIndex.value;
  return Array.from({ length: new Date(year, month + 1, 0).getDate() }, (_, i) => i + 1);
});

function prevMonth() { currentMonthIndex.value = currentMonthIndex.value === 0 ? 11 : currentMonthIndex.value - 1; }
function nextMonth() { currentMonthIndex.value = currentMonthIndex.value === 11 ? 0 : currentMonthIndex.value + 1; }
</script>