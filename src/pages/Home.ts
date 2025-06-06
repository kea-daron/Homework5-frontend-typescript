export function renderHome(): string {
  return `
  <body class="bg-gray-900 text-white overflow-x-hidden">

    <section class="relative min-h-screen gradient-bg hero-pattern flex items-center justify-center px-4 pt-20">
        <!-- Floating Elements -->
        <div class="absolute top-20 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 floating"></div>
        <div class="absolute top-40 right-20 w-32 h-32 bg-pink-500 rounded-full opacity-15 floating-delayed"></div>
        <div class="absolute bottom-20 left-20 w-16 h-16 bg-blue-500 rounded-full opacity-25 floating"></div>
        <div class="absolute bottom-40 right-10 w-24 h-24 bg-indigo-500 rounded-full opacity-20 floating-delayed"></div>
        
        <div class="max-w-7xl mx-auto text-center relative z-10">
            <!-- Main Content -->
            <div class="fade-in">
                <div class="mb-6">
                    <span class="inline-block px-4 py-2 rounded-full glass-effect text-sm font-medium mb-4 slide-up">
                        🚀 Launching Something Amazing
                    </span>
                </div>
                
                <h1 class="text-5xl md:text-7xl lg:text-8xl font-black mb-6 slide-up">
                    Build the
                    <span class="text-gradient block">Future</span>
                    Together
                </h1>
                
                <p class="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed slide-up-delayed">
                    Transform your ideas into reality with cutting-edge technology, innovative design, and unparalleled performance that drives success.
                </p>
                
                <!-- CTA Buttons -->
                <div class="flex flex-col sm:flex-row gap-6 justify-center mb-16 slide-up-delayed">
                    <button class="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg btn-hover pulse-glow">
                        Get Started Free
                    </button>
                    <button class="glass-effect px-8 py-4 rounded-2xl font-semibold text-lg btn-hover border-white/20">
                        Watch Demo
                    </button>
                </div>
            </div>
            
            <!-- Stats Section -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 slide-up-delayed">
                <div class="glass-effect rounded-3xl p-8 stats-card">
                    <div class="text-4xl font-bold text-gradient mb-2">50K+</div>
                    <div class="text-gray-300">Active Users</div>
                </div>
                <div class="glass-effect rounded-3xl p-8 stats-card">
                    <div class="text-4xl font-bold text-gradient mb-2">99.9%</div>
                    <div class="text-gray-300">Uptime</div>
                </div>
                <div class="glass-effect rounded-3xl p-8 stats-card">
                    <div class="text-4xl font-bold text-gradient mb-2">24/7</div>
                    <div class="text-gray-300">Support</div>
                </div>
            </div>
            
            <!-- Feature Preview -->
            <div class="mt-20 slide-up-delayed">
                <div class="glass-effect rounded-3xl p-2 max-w-4xl mx-auto">
                    <div class="bg-gray-800 rounded-2xl p-8 h-64 flex items-center justify-center">
                        <div class="text-center">
                            <div class="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold mb-2">Lightning Fast</h3>
                            <p class="text-gray-400">Experience unmatched performance and speed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div class="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
        </div>
    </section>

    
</body>

  `;
}