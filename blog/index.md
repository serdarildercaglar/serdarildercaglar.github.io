---
layout: default # Veya blog listesi için özel bir layout
title: Blog Archive
permalink: /blog/ # Bu sayfanın URL'si /blog/ olacak
---

<!-- Blog Header -->
<header class="pt-24 pb-12 px-6 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto text-center">
        <h1 class="text-4xl font-bold mb-4">{{ page.title }}</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
            Insights on Machine Learning, NLP, and AI Development
        </p>
    </div>
</header>

<!-- Blog Posts Grid -->
<main class="py-12 px-6">
    <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blogPostGrid">
             {% assign sorted_posts = site.posts | reverse %}
             {% for post in sorted_posts %}
                 {% include blog-card.html post=post %}
            {% endfor %}
        </div>
    </div>
</main>