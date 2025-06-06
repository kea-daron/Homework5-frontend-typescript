export function Footer(): string {
  return `
  <footer class="gradient-bg footer-pattern text-white relative overflow-hidden">
        <!-- Newsletter Section -->
        <div class="border-b border-white/10">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div class="text-center fade-in-up">
                    <h3 class="text-3xl font-bold mb-4">Stay Updated</h3>
                    <p class="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Subscribe to our newsletter and be the first to know about new products, exclusive deals, and special offers.
                    </p>
                    <div class="max-w-md mx-auto flex gap-4">
                        <input 
                            type="email" 
                            placeholder="Enter your email address"
                            class="newsletter-input flex-1 px-6 py-3 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500"
                        >
                        <button class="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all hover-lift">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Footer Content -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <!-- Company Info -->
                <div class="space-y-6 fade-in-up">
                    <div>
                        <h2 class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            ShopNova
                        </h2>
                        <p class="text-gray-300 mt-4 leading-relaxed">
                            Your trusted destination for premium products, exceptional service, and unbeatable prices. Experience shopping like never before.
                        </p>
                    </div>
                    
                    <!-- Social Media -->
                    <div>
                        <h4 class="font-semibold mb-4">Follow Us</h4>
                        <div class="flex space-x-4">
                            <a href="#" class="social-icon w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="social-icon w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#" class="social-icon w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="social-icon w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700">
                                <i class="fab fa-youtube"></i>
                            </a>
                            <a href="#" class="social-icon w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700">
                                <i class="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Quick Links -->
                <div class="fade-in-up">
                    <h4 class="font-semibold text-lg mb-6">Quick Links</h4>
                    <ul class="space-y-3">
                        <li><a href="#" class="link-hover text-gray-300 hover:text-white">Home</a></li>
                        <li><a href="#" class="link-hover text-gray-300 hover:text-white">Shop</a></li>
                        <li><a href="#" class="link-hover text-gray-300 hover:text-white">Categories</a></li>
                        <li><a href="#" class="link-hover text-gray-300 hover:text-white">Best Sellers</a></li>
                        <li><a href="#" class="link-hover text-gray-300 hover:text-white">New Arrivals</a></li>
                        <li><a href="#" class="link-hover text-gray-300 hover:text-white">Sale</a></li>
                        <li><a href="#" class="link-hover text-gray-300 hover:text-white">About Us</a></li>
                        <li><a href="#" class="link-hover text-gray-300 hover:text-white">Contact</a></li>
                    </ul>
                </div>

                <!-- Customer Service -->
                <div class="fade-in-up">
                    <h4 class="font-semibold text-lg mb-6">Customer Service</h4>
                    <ul class="space-y-3">
                        <li><a href="#" class="link-hover text-gray-300 hover:text-white">Help Center</a></li>
                        <li><a href="#" class="link-hover text-gray-300 hover:text-white">Track Your Order</a></li>
                        <li><a href="#" class="link-hover text-gray-300 hover:text-white">Shipping Info</a></li>
                        <li><a href="#" class="link-hover text-gray-300 hover:text-white">Returns & Exchanges</a></li>
                        <li><a href="#" class="link-hover text-gray-300 hover:text-white">Size Guide</a></li>
                        <li><a href="#" class="link-hover text-gray-300 hover:text-white">FAQs</a></li>
                        <li><a href="#" class="link-hover text-gray-300 hover:text-white">Live Chat</a></li>
                        <li><a href="#" class="link-hover text-gray-300 hover:text-white">Contact Support</a></li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div class="fade-in-up">
                    <h4 class="font-semibold text-lg mb-6">Get in Touch</h4>
                    <div class="space-y-4">
                        <div class="flex items-start space-x-3">
                            <i class="fas fa-map-marker-alt text-blue-400 mt-1"></i>
                            <div>
                                <p class="text-gray-300">123 Commerce Street</p>
                                <p class="text-gray-300">New York, NY 10001</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-3">
                            <i class="fas fa-phone text-green-400"></i>
                            <a href="tel:+1234567890" class="text-gray-300 hover:text-white">+1 (234) 567-8900</a>
                        </div>
                        <div class="flex items-center space-x-3">
                            <i class="fas fa-envelope text-purple-400"></i>
                            <a href="mailto:support@shopnova.com" class="text-gray-300 hover:text-white">support@shopnova.com</a>
                        </div>
                        <div class="flex items-center space-x-3">
                            <i class="fas fa-clock text-orange-400"></i>
                            <div>
                                <p class="text-gray-300">Mon - Fri: 9AM - 8PM</p>
                                <p class="text-gray-300">Sat - Sun: 10AM - 6PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Trust Badges & Payment Methods -->
        <div class="border-t border-white/10">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <!-- Trust Badges -->
                    <div>
                        <h5 class="font-semibold mb-4">Trusted & Secure</h5>
                        <div class="flex flex-wrap gap-4">
                            <div class="trust-badge glass-card px-4 py-2 rounded-lg flex items-center space-x-2">
                                <i class="fas fa-shield-alt text-green-400"></i>
                                <span class="text-sm">SSL Secured</span>
                            </div>
                            <div class="trust-badge glass-card px-4 py-2 rounded-lg flex items-center space-x-2">
                                <i class="fas fa-truck text-blue-400"></i>
                                <span class="text-sm">Free Shipping</span>
                            </div>
                            <div class="trust-badge glass-card px-4 py-2 rounded-lg flex items-center space-x-2">
                                <i class="fas fa-undo text-purple-400"></i>
                                <span class="text-sm">30-Day Returns</span>
                            </div>
                            <div class="trust-badge glass-card px-4 py-2 rounded-lg flex items-center space-x-2">
                                <i class="fas fa-headset text-orange-400"></i>
                                <span class="text-sm">24/7 Support</span>
                            </div>
                        </div>
                    </div>

                    <!-- Payment Methods -->
                    <div class="lg:text-right">
                        <h5 class="font-semibold mb-4">We Accept</h5>
                        <div class="flex flex-wrap justify-start lg:justify-end gap-3">
                            <div class="payment-icon bg-white rounded-lg p-2 w-12 h-8 flex items-center justify-center">
                                <i class="fab fa-cc-visa text-blue-600 text-lg"></i>
                            </div>
                            <div class="payment-icon bg-white rounded-lg p-2 w-12 h-8 flex items-center justify-center">
                                <i class="fab fa-cc-mastercard text-red-500 text-lg"></i>
                            </div>
                            <div class="payment-icon bg-white rounded-lg p-2 w-12 h-8 flex items-center justify-center">
                                <i class="fab fa-cc-amex text-blue-500 text-lg"></i>
                            </div>
                            <div class="payment-icon bg-white rounded-lg p-2 w-12 h-8 flex items-center justify-center">
                                <i class="fab fa-cc-paypal text-blue-600 text-lg"></i>
                            </div>
                            <div class="payment-icon bg-white rounded-lg p-2 w-12 h-8 flex items-center justify-center">
                                <i class="fab fa-apple-pay text-black text-lg"></i>
                            </div>
                            <div class="payment-icon bg-white rounded-lg p-2 w-12 h-8 flex items-center justify-center">
                                <i class="fab fa-google-pay text-green-600 text-lg"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-white/10 bg-black/20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div class="text-gray-400 text-sm">
                        © 2025 ShopNova. All rights reserved. | Made with ❤️ for amazing customers
                    </div>
                    <div class="flex space-x-6 text-sm">
                        <a href="#" class="link-hover text-gray-400 hover:text-white">Privacy Policy</a>
                        <a href="#" class="link-hover text-gray-400 hover:text-white">Terms of Service</a>
                        <a href="#" class="link-hover text-gray-400 hover:text-white">Cookie Policy</a>
                        <a href="#" class="link-hover text-gray-400 hover:text-white">Sitemap</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Scroll to Top Button -->
        <button 
            id="scrollToTop" 
            class="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover-lift opacity-0 transition-all duration-300"
        >
            <i class="fas fa-arrow-up"></i>
        </button>
    </footer>
  `;
}