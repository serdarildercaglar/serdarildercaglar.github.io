---
layout: default # Veya isterseniz liste sayfaları için özel bir layout
title: All Projects
permalink: /projects/ # Bu sayfanın URL'si /projects/ olacak
---

<!-- Project Header -->
<header class="pt-24 pb-12 px-6 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto text-center">
        <h1 class="text-4xl font-bold mb-4">All Projects</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
            A collection of my machine learning, NLP, and AI projects
        </p>
    </div>
</header>

<!-- Projects Grid -->
<main class="py-12 px-6">
    <div class="container mx-auto">
        <!-- Section for Filtering/Sorting (Optional - Future enhancement) -->
        <!--
        <div class="mb-8 text-center">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="NLP">NLP</button>
            <button class="filter-btn" data-filter="RAG">RAG</button>
            ... other tags ...
        </div>
        -->

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {% assign sorted_projects = site.projects | sort: "date" | reverse %}
            {% for project in sorted_projects %}
                {% include project-card.html project=project %}
            {% endfor %}
        </div>
    </div>
</main>