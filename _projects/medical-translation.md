---
title: Medical Translation AI
date: 2023-06-01 # Tahmini tarih
excerpt: "Advanced English-Turkish medical document translation system using MarianMT architecture and domain-specific fine-tuning."
icon: fas fa-language
tags: [Machine Translation, NMT, MarianMT, Medical NLP, Transformers, Fine-tuning]
layout: project
featured: false
---

<!-- Bu proje "LLMs-in-the-loop" yayınıyla yakından ilgili olduğu için -->
<!-- oradan içerik ödünç alınabilir veya özetlenebilir -->

<!-- Overview -->
<section class="mb-12">
    <h2 class="text-2xl font-bold mb-4">Project Overview</h2>
    <p class="text-gray-700 dark:text-gray-300 mb-4">
        Accurate translation of medical documents (like patient records, research papers, drug information leaflets) is crucial for global healthcare communication and knowledge sharing. This project focused on developing a high-performance Neural Machine Translation (NMT) system specifically for the English-Turkish language pair within the medical domain. The system utilizes the efficient MarianMT architecture, fine-tuned on specialized medical parallel corpora.
    </p>
    <div class="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg mb-6">
        <h3 class="text-lg font-semibold mb-2">Key Features & Goals</h3>
        <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Fine-tuned MarianMT models for English-to-Turkish medical translation.</li>
            <li>Compiled and curated parallel corpora from medical sources (e.g., EMEA documents, PubMed abstracts).</li>
             <li>Explored techniques like back-translation and synthetic data generation (as detailed in the <a href="{{ '/publications/llms-in-the-loop/' | relative_url }}" class="hover:underline">LLMs-in-the-loop paper</a>) to augment training data.</li>
            <li>Focused on improving the translation accuracy of complex medical terminology and maintaining clinical meaning.</li>
            <li>Achieved superior BLEU/METEOR scores compared to general-purpose translation systems on medical test sets.</li>
        </ul>
    </div>
</section>

<!-- Technical Approach -->
<section class="mb-12">
    <h2 class="text-2xl font-bold mb-4">Technical Approach</h2>
    <div class="grid md:grid-cols-2 gap-8">
        <div>
            <h3 class="text-lg font-semibold mb-3">MarianMT Architecture</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
               Leveraged the Marian NMT framework, known for its efficiency and effectiveness, particularly for bilingual translation tasks. Used pre-trained models from the Helsinki-NLP group as a starting point.
            </p>
        </div>
        <div>
            <h3 class="text-lg font-semibold mb-3">Domain-Specific Fine-tuning</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
               Fine-tuned the MarianMT models on a custom-built parallel corpus consisting of English-Turkish medical texts. This adaptation allowed the model to learn medical jargon and typical sentence structures.
            </p>
        </div>
    </div>
     <div class="mt-6">
         <h3 class="text-lg font-semibold mb-3">Data Strategy</h3>
         <p class="text-gray-700 dark:text-gray-300 mb-4">
            Gathered parallel data from publicly available medical sources. Employed data cleaning techniques and explored advanced methods like synthetic data generation using large language models to create high-quality, in-domain training examples, especially for less frequent terms or sentence structures.
        </p>
     </div>
</section>

<!-- Related Research -->
 <section class="mb-12">
     <h2 class="text-2xl font-bold mb-4">Related Research</h2>
     <p class="text-gray-700 dark:text-gray-300 mb-4">
        The methodologies and findings from this project directly contributed to the research published in:
     </p>
      <div class="card p-6 rounded-lg">
         <div class="flex items-center mb-3">
             <i class="fas fa-file-alt text-blue-600 text-xl mr-3"></i>
             <h3 class="text-lg font-semibold"><a href="{{ '/publications/llms-in-the-loop/' | relative_url }}" class="hover:underline">LLMs-in-the-loop Part-1: Expert Small AI Models for Bio-Medical Text Translation</a></h3>
         </div>
         <p class="text-sm text-gray-600 dark:text-gray-400">This paper details the "LLMs-in-the-loop" approach used for data generation and evaluation, showcasing how specialized small models can outperform larger ones in medical translation.</p>
         <div class="mt-4 flex space-x-4">
             <a href="https://arxiv.org/abs/2407.12126" target="_blank" rel="noopener noreferrer" class="flex items-center text-xs text-green-600 hover:underline"><i class="ai ai-arxiv mr-1"></i>arXiv Link</a>
              <a href="{{ '/publications/llms-in-the-loop/' | relative_url }}" class="flex items-center text-xs text-purple-600 hover:underline"><i class="fas fa-info-circle mr-1"></i>Details</a>
         </div>
     </div>
 </section>

<!-- Technologies Used -->
<section>
    <h2 class="text-2xl font-bold mb-4">Technologies Used</h2>
    <div class="flex flex-wrap gap-2">
        <span class="tech-tag">Python</span>
        <span class="tech-tag">PyTorch</span>
        <span class="tech-tag">HuggingFace Transformers</span>
        <span class="tech-tag">MarianMT</span>
        <span class="tech-tag">Machine Translation (NMT)</span>
        <span class="tech-tag">Medical NLP</span>
        <span class="tech-tag">Fine-tuning</span>
        <span class="tech-tag">Parallel Corpora</span>
        <span class="tech-tag">BLEU Score</span>
         <span class="tech-tag">METEOR Score</span>
    </div>
</section>