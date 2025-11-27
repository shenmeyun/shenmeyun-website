<template>
  <div class="tech-background">
    <div class="grid-pattern"></div>
    <div class="gradient-orb orb-1"></div>
    <div class="gradient-orb orb-2"></div>
    <div class="gradient-orb orb-3"></div>
    <div class="particles">
      <div v-for="particle in particles" :key="particle.id" class="particle" :style="particle.style"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 减少粒子数量从50到30，提升性能
const PARTICLE_COUNT = 30
const particles = ref([])

// 预计算粒子样式，避免每次渲染都重新计算
const generateParticles = () => {
  const newParticles = []
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const size = Math.random() * 3 + 1
    const left = Math.random() * 100
    const top = Math.random() * 100
    const delay = Math.random() * 5
    const duration = Math.random() * 10 + 10
    
    newParticles.push({
      id: i,
      style: {
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        top: `${top}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }
    })
  }
  particles.value = newParticles
}

onMounted(() => {
  generateParticles()
})
</script>

<style scoped>
.tech-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 0;
}

.grid-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  will-change: transform;
  transform: translateZ(0);
  animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(50px, 50px, 0);
  }
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  will-change: transform;
  transform: translateZ(0);
  animation: float 20s ease-in-out infinite;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #667eea 0%, transparent 70%);
  top: -200px;
  left: -200px;
  animation-delay: 0s;
}

.orb-2 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #764ba2 0%, transparent 70%);
  bottom: -150px;
  right: -150px;
  animation-delay: 5s;
}

.orb-3 {
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, #f093fb 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 10s;
}

@keyframes float {
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  33% {
    transform: translate3d(30px, -30px, 0) scale(1.1);
  }
  66% {
    transform: translate3d(-20px, 20px, 0) scale(0.9);
  }
}

.particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  contain: layout style paint;
}

.particle {
  position: absolute;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  will-change: transform, opacity;
  transform: translateZ(0);
  animation: particleFloat infinite ease-in-out;
}

@keyframes particleFloat {
  0%, 100% {
    transform: translate3d(0, 0, 0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  50% {
    transform: translate3d(50px, -100px, 0);
    opacity: 0.5;
  }
}
</style>

