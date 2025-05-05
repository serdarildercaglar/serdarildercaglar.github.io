---
# index.md
# Layout'u _config.yml'den alacak (default olarak ayarlandı)
# Ekstra front matter gerekirse buraya eklenebilir.
# Örneğin, ana sayfa için özel SEO açıklaması:
# description: Serdar Çağlar'ın AI/ML portföyü. LLM, RAG, MLOps ve NLP projelerini keşfedin.
---

<!-- Hero Section -->
<header class="pt-24 pb-12 px-6 relative overflow-hidden">
    <!-- Background element -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 z-0 opacity-70"></div>
    
    <!-- Decorative dots/grid pattern -->
    <div class="absolute inset-0 z-0 opacity-10">
        <div class="grid-pattern"></div> <!-- CSS-controlled pattern -->
    </div>
    
    <div class="container mx-auto text-center relative z-10">
        <div class="animate-fade-in-up">
            <h1 class="text-5xl font-bold mb-6">
                <span class="gradient-text">{{ site.data.site.title }}</span>
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Architecting and deploying enterprise-scale AI solutions, specializing in Large Language Models (LLMs), RAG architectures, MLOps, and real-time AI systems. Proven track record in healthcare, education, and legal sectors.
            </p>
        </div>
        <div class="flex justify-center space-x-6">
            <a href="#projects" class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition transform hover:-translate-y-1 shadow-md">
                View Projects
            </a>
            <a href="#contact" class="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition transform hover:-translate-y-1 shadow-sm">
                Contact Me
            </a>
        </div>
    </div>
</header>

<!-- About Section -->
<section id="about" class="py-20 px-6 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12">About Me</h2>
        <div class="grid md:grid-cols-2 gap-12 items-start">
            <div>
                <!-- About metni buraya eklenecek. Şimdilik placeholder: -->
                <p class="text-lg mb-6">
                    As an {{ site.data.site.title }}, I possess proven expertise in architecting and deploying enterprise-scale AI solutions, specializing in LLMs, RAG architectures, MLOps, and real-time AI systems.
                </p>
                <p class="text-lg mb-6">
                    My background includes leading ML engineering at Aimped (USA, Remote, 2023-2024), driving innovation in biomedical NLP at Nioyatech (2020-2023), and delivering high-impact solutions across healthcare, education, and legal sectors. Currently, I am contributing my expertise as a <strong>Senior Data Scientist (Contract) at DopingTech</strong> (Since approx. Aug/Sep 2023).
                </p>
                 <p class="text-lg mb-6">
                    I hold a <strong>completed Master's degree (2024)</strong> in Measurement and Data Analytics from Anadolu University and actively contribute to the open-source community, particularly with Turkish and Spanish language models on Hugging Face (>1000 downloads).
                 </p>

                <!-- Core Expertise (skills.json'dan alınacak) -->
                {% if site.data.skills.core %}
                <div class="mb-8">
                    <h3 class="text-xl font-semibold mb-4">Core Expertise</h3>
                     <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                                {% for skill in site.data.skills.core limit:8 %} {# Veya tümünü listele #}
                                    <li><i class="fas fa-check text-green-500 mr-2"></i>{{ skill }}</li>
                                {% endfor %}
                                <!-- Gerekirse sabit eklemeler: -->
                                <li><i class="fas fa-check text-green-500 mr-2"></i>Machine Learning Engineering</li>
                                <li><i class="fas fa-check text-green-500 mr-2"></i>Team Leadership</li>
                            </ul>
                        </div>
                         <div>
                            <h4 class="font-medium mb-2">Domain Experience</h4>
                             <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                                <li><i class="fas fa-briefcase-medical text-blue-500 mr-2"></i>Healthcare & Biomedical</li>
                                <li><i class="fas fa-graduation-cap text-blue-500 mr-2"></i>Education Technology</li>
                                <li><i class="fas fa-balance-scale text-blue-500 mr-2"></i>Legal Sector</li>
                                <li><i class="fas fa-cogs text-blue-500 mr-2"></i>General Technology</li>
                             </ul>
                        </div>
                     </div>
                </div>
                {% endif %}

                <!-- Technical Proficiency (skills.json'dan alınacak) -->
                {% if site.data.skills.technologies %}
                 <h3 class="text-xl font-semibold mb-4">Technical Proficiency</h3>
                <div class="flex flex-wrap gap-2">
                    {% for tech in site.data.skills.technologies %}
                    <span class="tech-tag">{{ tech }}</span>
                    {% endfor %}
                     <!-- Gerekirse sabit eklemeler: -->
                    <span class="tech-tag">Scikit-learn</span> <span class="tech-tag">KServe</span> <span class="tech-tag">AWS (EC2, S3, SageMaker, Bedrock)</span> <span class="tech-tag">Redis</span> <span class="tech-tag">Neo4j</span> <span class="tech-tag">Speech Recognition/Synthesis</span> <span class="tech-tag">Stream Processing</span> <span class="tech-tag">WebSocket</span>
                </div>
                {% endif %}

                <!-- Download CV Button -->
                <div class="mt-8">
                    <a href="{{ '/assets/cv/cv-serdar-caglar.pdf' | relative_url }}" class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition" download>
                        <i class="fas fa-download mr-2"></i>
                        <span>Download CV</span>
                    </a>
                </div>
            </div>
            <div class="hidden md:block">
                <!-- Profil Resmi -->
                <img src="{{ '/assets/images/profile.jpg' | relative_url }}" alt="{{ site.data.site.name }} - {{ site.data.site.title }}" class="rounded-lg shadow-lg mb-8">
                 <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                     <h3 class="text-xl font-semibold mb-4">Education & Research</h3>
                     <ul class="space-y-3 text-gray-600 dark:text-gray-300">
                         <li><i class="fas fa-graduation-cap text-blue-500 mr-2"></i><strong>M.S., Measurement and Data Analytics</strong><br>Anadolu University (2024)</li>
                         <li><i class="fas fa-graduation-cap text-blue-500 mr-2"></i><strong>B.S., Education</strong><br>Gaziosmanpaşa University (2004-2008)</li>
                         <!-- Yayınlar bölümünden link çekilebilir veya sabit bırakılabilir -->
                         <li><i class="fas fa-file-alt text-blue-500 mr-2"></i><strong>Published Research:</strong> <a href="https://arxiv.org/abs/2407.12126" target="_blank" rel="noopener noreferrer" class="hover:underline">LLMs-in-the-loop... (arXiv:2407.12126)</a></li>
                         <li><i class="fab fa-github text-blue-500 mr-2"></i><strong>Open Source:</strong> <a href="{{ site.data.site.social.huggingface }}" target="_blank" rel="noopener noreferrer" class="hover:underline">Turkish & Spanish Models on Hugging Face (1000+ downloads)</a></li>
                     </ul>
                 </div>
            </div>
        </div>
    </div>
</section>

<!-- Featured Projects Section -->
<section id="projects" class="py-20 px-6">
    <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12">Signature Projects</h2>
        <div class="grid md:grid-cols-3 gap-8">
            {% assign featured_projects = site.projects | where: "featured", true | sort: "order" %}
            {% for project in featured_projects limit:3 %}
                {% include project-card.html project=project %}
            {% endfor %}
        </div>
        <div class="text-center mt-12">
            <a href="{{ '/projects/' | relative_url }}" class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                View All Projects
            </a>
        </div>
    </div>
</section>

<!-- Publications Section -->
<section id="publications" class="py-20 px-6 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12">Publications & Research</h2>
        <div class="max-w-3xl mx-auto space-y-6">
            {% assign sorted_publications = site.publications | sort: "date" | reverse %}
            {% for pub in sorted_publications %}
                <div class="card p-6 rounded-lg">
                    <div class="flex items-center mb-3">
                        <i class="{{ pub.icon | default: 'fas fa-file-alt' }} text-blue-600 text-2xl mr-4"></i>
                        <span class="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded font-medium">{{ pub.type | default: "Publication" }}</span>
                    </div>
                    <h3 class="text-xl font-bold mb-3">
                        <a href="{{ pub.url | relative_url }}" class="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">{{ pub.title }}</a>
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                        {{ pub.excerpt | strip_html | normalize_whitespace | truncatewords: 40 }}
                    </p>
                    <div class="mb-4 text-xs text-gray-500 dark:text-gray-400 space-y-1">
                        {% if pub.authors %}
                            <p><i class="fas fa-users mr-2 w-4 text-center"></i>Authors: {{ pub.authors }}</p>
                        {% endif %}
                         {% if pub.affiliation %}
                            <p><i class="fas fa-building mr-2 w-4 text-center"></i>{{ pub.affiliation }}</p>
                        {% endif %}
                         {% if pub.date %}
                            <p><i class="fas fa-calendar-alt mr-2 w-4 text-center"></i>{{ pub.date | date: "%B %d, %Y" }}</p>
                         {% endif %}
                    </div>
                    <div class="flex flex-wrap gap-3">
                        {% if pub.pdfUrl %}
                            <a href="{{ pub.pdfUrl }}" target="_blank" rel="noopener noreferrer" class="flex items-center text-xs text-red-600 hover:underline"><i class="fas fa-file-pdf mr-1"></i>Read PDF</a>
                        {% endif %}
                         {% if pub.arxivUrl %}
                            <a href="{{ pub.arxivUrl }}" target="_blank" rel="noopener noreferrer" class="flex items-center text-xs text-green-600 hover:underline"><i class="ai ai-arxiv mr-1"></i>arXiv Link</a>
                        {% endif %}
                        <a href="{{ pub.url | relative_url }}" class="flex items-center text-xs text-purple-600 hover:underline"><i class="fas fa-info-circle mr-1"></i>Details</a>
                    </div>
                </div>
            {% endfor %}
        </div>
         <!-- İsteğe bağlı: Tüm yayınları göster linki -->
        <!--
        <div class="text-center mt-12">
            <a href="{{ '/publications/' | relative_url }}" class="inline-block bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition">
                View All Publications
            </a>
        </div>
        -->
    </div>
</section>

<!-- Blog Section -->
<!-- Blog Section -->
<section id="blog" class="py-20 px-6 bg-white dark:bg-gray-900">
    <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12">Latest Blog Posts</h2>
        <div class="grid md:grid-cols-3 gap-8">
            {% comment %} En yeniden eskiye sırala {% endcomment %}
            {% assign latest_posts = site.posts | reverse %}

            {% comment %} İlk 3'ü al {% endcomment %}
            {% for post in latest_posts limit:3 %}
                {% include blog-card.html post=post %}
            {% endfor %}
        </div>
        <div class="text-center mt-12">
            <a href="{{ '/blog/' | relative_url }}" class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                View All Posts
            </a>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contact" class="py-20 px-6 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto max-w-4xl">
        <h2 class="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div class="grid md:grid-cols-2 gap-12">
            <!-- Contact Information -->
            <div>
                <h3 class="text-xl font-semibold mb-6">Contact Information</h3>
                <p class="text-lg mb-8">
                    I'm always interested in hearing about new projects and opportunities. Let's connect!
                </p>
                <div class="space-y-4">
                     <div class="flex items-center">
                        <i class="fas fa-envelope text-blue-600 text-xl w-8"></i>
                        <a href="mailto:{{ site.email }}" class="hover:text-blue-600">{{ site.email }}</a>
                    </div>
                     <div class="flex items-center">
                        <i class="fas fa-map-marker-alt text-blue-600 text-xl w-8"></i>
                        <span>{{ site.data.site.location }}</span>
                    </div>
                    <div class="flex items-center">
                        <i class="fas fa-globe text-blue-600 text-xl w-8"></i>
                        <span>Available for remote collaboration worldwide</span>
                    </div>
                </div>
                <!-- Social Links -->
                <div class="mt-8">
                    <h4 class="font-semibold mb-4">Connect with me</h4>
                    <div class="flex space-x-6">
                        {% if site.social.links.linkedin %}
                        <a href="{{ site.social.links.linkedin }}" target="_blank" rel="noopener noreferrer" class="text-3xl hover:text-blue-600" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                        {% endif %}
                        
                        {% if site.social.links.github %}
                        <a href="{{ site.social.links.github }}" target="_blank" rel="noopener noreferrer" class="text-3xl hover:text-blue-600" aria-label="GitHub"><i class="fab fa-github"></i></a>
                        {% endif %}
                        
                        {% if site.social.links.medium %}
                        <a href="{{ site.social.links.medium }}" target="_blank" rel="noopener noreferrer" class="text-3xl hover:text-blue-600" aria-label="Medium"><i class="fab fa-medium"></i></a>
                        {% endif %}
                        
                        {% if site.social.links.arxiv %}
                        <a href="{{ site.social.links.arxiv }}" target="_blank" rel="noopener noreferrer" class="text-3xl hover:text-blue-600" aria-label="arXiv"><i class="ai ai-arxiv"></i></a>
                        {% endif %}
                        
                        {% if site.social.links.huggingface %}
                        <a href="{{ site.social.links.huggingface }}" target="_blank" rel="noopener noreferrer" class="text-3xl hover:text-blue-600" aria-label="Hugging Face">🤗</a>
                        {% endif %}
                    </div>
                </div>
            </div>
            <!-- Contact Form -->
            <div>
                <h3 class="text-xl font-semibold mb-6">Send a Message</h3>
                <!-- Formspree formu -->
                <form id="contactForm" action="https://formspree.io/f/mjkwkwqj" method="POST" class="space-y-4">
                    <div>
                        <label for="name" class="block text-sm font-medium mb-1">Name</label>
                        <input type="text" id="name" name="name" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium mb-1">Email</label>
                        <input type="email" id="email" name="_replyto" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div>
                        <label for="subject" class="block text-sm font-medium mb-1">Subject</label>
                        <input type="text" id="subject" name="_subject" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div>
                        <label for="message" class="block text-sm font-medium mb-1">Message</label>
                        <textarea id="message" name="message" rows="4" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"></textarea>
                    </div>
                    <!-- Honeypot field (optional but recommended for spam) -->
                    <input type="text" name="_gotcha" style="display:none">
                    <!-- Redirect URL (optional) -->
                    <!-- <input type="hidden" name="_next" value="//{{ site.domain }}/thankyou"> -->
                    <button type="submit" class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed">
                        <span id="submitButtonText">Send Message</span>
                        <i class="fas fa-spinner fa-spin ml-2 hidden" id="submitSpinner"></i>
                    </button>
                    <div id="formMessage" class="text-center mt-4 hidden"></div> <!-- Mesaj alanı main.js tarafından yönetilecek -->
                </form>
            </div>
        </div>
    </div>
</section>