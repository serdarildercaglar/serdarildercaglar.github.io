---
title: Cancer-Gene Relation Extraction Model
date: 2023-08-15
excerpt: A fine-tuned biobert model for extracting complex relationships between cancer and genes, achieving up to 92% precision. Specialized to detect tumor suppressors, oncogenes, and driver genes in scientific literature.
icon: fas fa-dna
tags: [BERT, Relation Extraction, Biomedical NLP, Cancer Research, NER, HuggingFace]
layout: project
featured: true
order: 2
---
<!-- Overview -->

<section class="mb-12">
    <h2 class="text-2xl font-bold mb-4">Project Overview</h2>
    <p class="text-gray-700 dark:text-gray-300 mb-4">
        This project addresses the critical need for advanced NLP tools in cancer genetics research. I developed a specialized Relation Extraction Model fine-tuned to detect and classify complex relationships between cancer entities and genes in scientific literature. The model works in conjunction with a Named Entity Recognition (NER) system to identify critical genetic factors and their roles in cancer development and progression.
    </p>
    <div class="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg mb-6">
        <h3 class="text-lg font-semibold mb-2">Key Achievements</h3>
        <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Developed a fine-tuned BioBERT model achieving up to 92% precision for specific relation types.</li>
            <li>Created a comprehensive pipeline for cancer-gene relation extraction with 83% overall accuracy.</li>
            <li>Trained model to recognize 11 distinct relation types between cancer and genetic entities.</li>
            <li>Integrated with a specialized NER model for end-to-end information extraction.</li>
            <li>Optimized for detecting critical cancer-related genetic factors: tumor suppressors, oncogenes, and driver genes.</li>
        </ul>
    </div>
</section>

<!-- Model Details -->
<section class="mb-12">
    <h2 class="text-2xl font-bold mb-4">Model Details & Performance</h2>
     <p class="text-gray-700 dark:text-gray-300 mb-4">
        The model was fine-tuned using BioBERT as the base architecture, specializing in biomedical text. It works as part of a pipeline that first identifies named entities (genes, mutations, cancer types) and then classifies the relationships between them. The model demonstrates exceptional performance on critical relation types relevant to cancer genetics research.
    </p>
    <div class="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
         <h3 class="text-lg font-semibold mb-2">Performance Highlights</h3>
         <div class="overflow-x-auto">
             <table class="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
                 <thead>
                     <tr>
                         <th class="py-2 px-4 border-b border-gray-300 dark:border-gray-700 text-left">Relation Type</th>
                         <th class="py-2 px-4 border-b border-gray-300 dark:border-gray-700 text-right">Precision</th>
                         <th class="py-2 px-4 border-b border-gray-300 dark:border-gray-700 text-right">Recall</th>
                         <th class="py-2 px-4 border-b border-gray-300 dark:border-gray-700 text-right">F1-Score</th>
                     </tr>
                 </thead>
                 <tbody>
                     <tr>
                         <td class="py-2 px-4 border-b border-gray-300 dark:border-gray-700">ANTAGONIST</td>
                         <td class="py-2 px-4 border-b border-gray-300 dark:border-gray-700 text-right">0.92</td>
                         <td class="py-2 px-4 border-b border-gray-300 dark:border-gray-700 text-right">0.88</td>
                         <td class="py-2 px-4 border-b border-gray-300 dark:border-gray-700 text-right">0.90</td>
                     </tr>
                     <tr>
                         <td class="py-2 px-4 border-b border-gray-300 dark:border-gray-700">INHIBITOR</td>
                         <td class="py-2 px-4 border-b border-gray-300 dark:border-gray-700 text-right">0.83</td>
                         <td class="py-2 px-4 border-b border-gray-300 dark:border-gray-700 text-right">0.87</td>
                         <td class="py-2 px-4 border-b border-gray-300 dark:border-gray-700 text-right">0.85</td>
                     </tr>
                     <tr>
                         <td class="py-2 px-4 border-b border-gray-300 dark:border-gray-700">AGONIST</td>
                         <td class="py-2 px-4 border-b border-gray-300 dark:border-gray-700 text-right">0.85</td>
                         <td class="py-2 px-4 border-b border-gray-300 dark:border-gray-700 text-right">0.72</td>
                         <td class="py-2 px-4 border-b border-gray-300 dark:border-gray-700 text-right">0.78</td>
                     </tr>
                     <tr>
                         <td class="py-2 px-4 border-b border-gray-300 dark:border-gray-700">INDIRECT-DOWNREGULATOR</td>
                         <td class="py-2 px-4 border-b border-gray-300 dark:border-gray-700 text-right">0.82</td>
                         <td class="py-2 px-4 border-b border-gray-300 dark:border-gray-700 text-right">0.76</td>
                         <td class="py-2 px-4 border-b border-gray-300 dark:border-gray-700 text-right">0.79</td>
                     </tr>
                     <tr>
                         <td class="py-2 px-4 border-b border-gray-300 dark:border-gray-700">Overall Accuracy</td>
                         <td class="py-2 px-4 border-b border-gray-300 dark:border-gray-700 text-right" colspan="3">0.83</td>
                     </tr>
                 </tbody>
             </table>
         </div>
     </div>
</section>

<!-- Key Concepts -->
<section class="mb-12">
    <h2 class="text-2xl font-bold mb-4">Key Cancer Genetics Concepts</h2>
    <div class="grid md:grid-cols-3 gap-6">
        <div class="card p-6 rounded-lg shadow-md">
            <i class="fas fa-ban text-3xl text-red-600 mb-4"></i>
            <h3 class="text-lg font-semibold mb-2">Tumor Suppressors</h3>
            <p class="text-gray-600 dark:text-gray-300">
                Genes that regulate cellular growth and inhibit cancer development through DNA repair and cell cycle regulation. When mutated, they lose this protective function, allowing unrestricted cell growth.
            </p>
        </div>
        <div class="card p-6 rounded-lg shadow-md">
            <i class="fas fa-virus text-3xl text-purple-600 mb-4"></i>
            <h3 class="text-lg font-semibold mb-2">Oncogenes</h3>
            <p class="text-gray-600 dark:text-gray-300">
                Genes that control cell growth and division. When mutated or overexpressed, they become drivers of cancer, promoting uncontrolled replication and survival of cancer cells.
            </p>
        </div>
        <div class="card p-6 rounded-lg shadow-md">
            <i class="fas fa-car text-3xl text-blue-600 mb-4"></i>
            <h3 class="text-lg font-semibold mb-2">Driver Genes</h3>
            <p class="text-gray-600 dark:text-gray-300">
                Genes with critical mutations that directly initiate and maintain cancer growth. They are fundamental triggers of disease, forming the foundation of cancer genetics research and targeted therapies.
            </p>
        </div>
    </div>
</section>

<!-- Applications -->
<section class="mb-12">
    <h2 class="text-2xl font-bold mb-4">Applications</h2>
    <div class="grid md:grid-cols-2 gap-6">
        <div class="card p-6 rounded-lg shadow-md">
            <i class="fas fa-microscope text-3xl text-blue-600 mb-4"></i>
            <h3 class="text-lg font-semibold mb-2">Oncology Research</h3>
            <p class="text-gray-600 dark:text-gray-300">
                Accelerates cancer research by automatically extracting gene-cancer relationships from vast scientific literature.
            </p>
        </div>
        <div class="card p-6 rounded-lg shadow-md">
            <i class="fas fa-hospital-user text-3xl text-blue-600 mb-4"></i>
             <h3 class="text-lg font-semibold mb-2">Clinical Decision Support</h3>
            <p class="text-gray-600 dark:text-gray-300">
                Helps clinicians identify potential genetic factors relevant to specific cancer cases for personalized treatment approaches.
            </p>
        </div>
        <div class="card p-6 rounded-lg shadow-md">
            <i class="fas fa-database text-3xl text-blue-600 mb-4"></i>
             <h3 class="text-lg font-semibold mb-2">Knowledge Base Construction</h3>
            <p class="text-gray-600 dark:text-gray-300">
               Automates the creation and maintenance of cancer genetics databases by extracting structured information from research papers.
            </p>
        </div>
        <div class="card p-6 rounded-lg shadow-md">
             <i class="fas fa-pills text-3xl text-blue-600 mb-4"></i>
             <h3 class="text-lg font-semibold mb-2">Drug Discovery</h3>
             <p class="text-gray-600 dark:text-gray-300">
                 Identifies potential therapeutic targets by understanding the functional relationships between genes and cancer types.
             </p>
        </div>
    </div>
</section>


<!-- Technologies Used -->
<section>
    <h2 class="text-2xl font-bold mb-4">Technologies Used</h2>
    <div class="flex flex-wrap gap-2">
        <span class="tech-tag">PyTorch</span>
        <span class="tech-tag">HuggingFace Transformers</span>
        <span class="tech-tag">BioBERT</span>
        <span class="tech-tag">Aimped NLP</span>
        <span class="tech-tag">NLTK</span>
        <span class="tech-tag">Python</span>
        <span class="tech-tag">Biomedical NLP</span>
        <span class="tech-tag">Relation Extraction</span>
        <span class="tech-tag">Named Entity Recognition</span>
    </div>
     <div class="mt-8">
         <a href="https://huggingface.co/aimped/nlp-health-relation-cancer-genetics-base-en" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition">
             <i class="fab fa-hugging-face mr-2"></i>
             <span>View Model on Hugging Face</span>
         </a>
     </div>
</section>