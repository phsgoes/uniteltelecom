<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

// --- Props com Tipagem ---
interface Props {
  bgColor?: string
  lineColor?: string
  bgOpacity?: number // Opacidade das linhas de fundo (0 a 1)
  density?: 'low' | 'medium' | 'high'
}

const props = withDefaults(defineProps<Props>(), {
  bgColor: '#031422',
  lineColor: '#145F9C',
  bgOpacity: 0.15,
  density: 'medium'
})

// --- State & Logic ---
// Usaremos Arrays reativos para que o Vue renderize o SVG
interface PathData {
  d: string
  styleType: 'solid' | 'dashed' | 'dotted' | 'beam' | 'stream'
  strokeWidth: number
  animationDuration: string
  animationDelay?: string
  dashArray?: string
  color?: string
  opacity?: number
}

interface ParticleData {
  cx: number
  cy: number
  r: number
  animationDuration: string
  animationDelay: string
  color: string
}

const paths = ref<PathData[]>([])
const particles = ref<ParticleData[]>([])
const viewBox = '0 0 1920 1080' // Aspect Ratio 16:9 fixo lógico

// --- Helper Functions ---
const gridSize = 60
const width = 1920
const height = 1080

const randomGrid = (max: number) => Math.floor(Math.random() * (max / gridSize)) * gridSize

// Gera cores variantes baseadas na cor principal (simulação simples para demo)
// Em produção, você poderia usar uma lib como 'tinycolor2' para gerar variantes reais da prop lineColor
const getVariantColor = () => props.lineColor 

const generatePathDataString = (segments: number) => {
  let x = randomGrid(width)
  let y = randomGrid(height)
  let d = `M ${x} ${y}`
  
  for (let i = 0; i < segments; i++) {
    const length = (Math.floor(Math.random() * 6) + 2) * gridSize
    if (Math.random() > 0.5) {
      x += (Math.random() > 0.5 ? 1 : -1) * length
    } else {
      y += (Math.random() > 0.5 ? 1 : -1) * length
    }
    d += ` L ${x} ${y}`
  }
  return d
}

// --- Generation Logic ---
onMounted(() => {
  const countMultiplier = props.density === 'high' ? 1.5 : props.density === 'low' ? 0.5 : 1
  
  // 1. Background Lines
  for (let i = 0; i < 50 * countMultiplier; i++) {
    const isDashed = Math.random() > 0.5
    paths.value.push({
      d: generatePathDataString(Math.floor(Math.random() * 3) + 1),
      styleType: isDashed ? 'dashed' : 'solid',
      strokeWidth: Math.random() * 2 + 0.5,
      animationDuration: '12s',
      dashArray: isDashed ? '5, 5' : undefined,
      opacity: props.bgOpacity,
      color: props.lineColor
    })
  }

  // 2. Beams (Linhas que se desenham)
  for (let i = 0; i < 12 * countMultiplier; i++) {
    paths.value.push({
      d: generatePathDataString(Math.floor(Math.random() * 4) + 2),
      styleType: 'beam',
      strokeWidth: 1, // Será sobrescrito pela animação CSS
      animationDuration: (Math.random() * 7 + 7) + 's',
      animationDelay: (Math.random() * 5) + 's',
      color: getVariantColor(),
      opacity: 1
    })
  }

  // 3. Streams (Fluxo de dados)
  for (let i = 0; i < 8 * countMultiplier; i++) {
    paths.value.push({
      d: generatePathDataString(Math.floor(Math.random() * 3) + 2),
      styleType: 'stream',
      strokeWidth: 2,
      animationDuration: (Math.random() * 8 + 12) + 's',
      color: getVariantColor(),
      opacity: 0.8
    })
  }

  // 4. Particles
  for (let i = 0; i < 25 * countMultiplier; i++) {
    particles.value.push({
      cx: Math.random() * width,
      cy: Math.random() * height,
      r: Math.random() * 2 + 0.5,
      animationDuration: (Math.random() * 5 + 8) + 's',
      animationDelay: (Math.random() * 5) + 's',
      color: getVariantColor()
    })
  }
})

// Styles computed para passar variáveis CSS
const containerStyles = computed(() => ({
  '--bg-color': props.bgColor,
  '--line-color': props.lineColor,
  'background': `radial-gradient(circle at center, ${props.bgColor} 30%, #000000 100%)`
}))
</script>

<template>
  <div class="relative w-full h-full overflow-hidden isolate" :style="containerStyles">
    <svg 
      class="absolute inset-0 w-full h-full -z-10 object-cover pointer-events-none"
      :viewBox="viewBox" 
      preserveAspectRatio="xMidYMid slice" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <g class="circuit-container">
        <path 
          v-for="(path, index) in paths" 
          :key="`path-${index}`"
          :d="path.d"
          :stroke="path.color"
          :stroke-width="path.strokeWidth"
          :stroke-dasharray="path.dashArray"
          :stroke-opacity="path.opacity"
          fill="none"
          stroke-linecap="round"
          :class="{
            'path-dim': path.styleType === 'solid' || path.styleType === 'dashed',
            'path-beam': path.styleType === 'beam',
            'path-stream': path.styleType === 'stream'
          }"
          :style="{ 
            animationDuration: path.animationDuration,
            animationDelay: path.animationDelay 
          }"
        />

        <circle 
          v-for="(particle, index) in particles"
          :key="`part-${index}`"
          :cx="particle.cx"
          :cy="particle.cy"
          :r="particle.r"
          :fill="particle.color"
          class="particle"
          :style="{ 
            animationDuration: particle.animationDuration,
            animationDelay: particle.animationDelay
          }"
        />
      </g>
    </svg>

    <div class="relative z-10 w-full h-full">
      <slot />
    </div>
  </div>
</template>

<style scoped>
/* Keyframes e Classes Complexas */
/* Mantemos CSS puro aqui pois Tailwind não lida bem com keyframes complexos multi-step nativamente */

.path-dim {
  animation: breatheBackground 12s infinite ease-in-out;
}

.path-beam {
  stroke-linecap: square;
  filter: url(#glow);
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
  animation-name: drawAndMorph;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.path-stream {
  stroke-linecap: round;
  filter: url(#glow);
  animation-name: flowAndShape;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.particle {
  filter: url(#glow);
  animation-name: float;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  opacity: 0.6;
}

@keyframes breatheBackground {
  0%, 100% { stroke-width: 1px; opacity: calc(var(--bg-opacity, 0.15) - 0.05); }
  50% { stroke-width: 1.5px; opacity: calc(var(--bg-opacity, 0.15) + 0.05); }
}

@keyframes drawAndMorph {
  0% { stroke-dashoffset: 2000; opacity: 0; stroke-width: 1px; }
  15% { opacity: 1; stroke-width: 3px; }
  50% { stroke-width: 1px; }
  85% { opacity: 1; stroke-width: 4px; }
  100% { stroke-dashoffset: 0; opacity: 0; stroke-width: 1px; }
}

@keyframes flowAndShape {
  0% { stroke-dashoffset: 0; stroke-dasharray: 10, 10; stroke-width: 2px; }
  25% { stroke-dasharray: 40, 5; stroke-width: 1.5px; }
  50% { stroke-dasharray: 3, 5; stroke-width: 3px; }
  75% { stroke-dasharray: 100, 20; stroke-width: 1px; }
  100% { stroke-dashoffset: -500; stroke-dasharray: 10, 10; stroke-width: 2px; }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-30px); }
}
</style>