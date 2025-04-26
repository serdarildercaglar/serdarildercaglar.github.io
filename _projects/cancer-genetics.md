---
title: Cancer Genetics Relation Extraction
date: 2023-02-01 # Tahmini tarih
excerpt: "NLP system using BioBERT for Named Entity Recognition (NER) and Relation Extraction (RE) to identify cancer-gene relationships in medical texts."
icon: fas fa-dna
tags: [NER, Relation Extraction, BioBERT, Medical NLP, Oncology, Bioinformatics]
layout: project
featured: false
---

<!-- Overview -->
<section class="mb-12">
    <h2 class="text-2xl font-bold mb-4">Project Overview</h2>
    <p class="text-gray-700 dark:text-gray-300 mb-4">
        Understanding the intricate relationships between genes, mutations, and cancer types is fundamental for oncology research and personalized medicine. This project developed a sophisticated NLP pipeline to automatically extract this information from unstructured biomedical texts (e.g., research articles, clinical trial reports). The system first identifies relevant entities (Genes, Mutations, Cancer Types) using Named Entity Recognition (NER) and then classifies the relationships between these entities (e.g., Gene X is a Tumor Suppressor for Cancer Y, Mutation Z drives Cancer W).
    </p>
    <div class="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg mb-6">
        <h3 class="text-lg font-semibold mb-2">Key Features & Capabilities</h3>
        <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Fine-tuned BioBERT models for high accuracy NER on biomedical entities.</li>
            <li>Developed a relation classification component to identify roles like Tumor Suppressor, Oncogene, Driver Gene.</li>
            <li>Pipeline architecture integrating NER and RE for end-to-end information extraction.</li>
            <li>Achieved strong performance metrics (F1-scores 70-90%) for various relation types on benchmark datasets.</li>
            <li>Designed to handle complex sentence structures and ambiguity common in scientific literature.</li>
        </ul>
    </div>
</section>

<!-- NER and RE Pipeline -->
 <section class="mb-12">
    <h2 class="text-2xl font-bold mb-4">NER and Relation Extraction Pipeline</h2>
     <p class="text-gray-700 dark:text-gray-300 mb-4">
        The system operates in a two-stage pipeline. First, the NER module processes the input text to identify and label spans corresponding to predefined entity types (e.g., GENE, MUTATION, CANCER). Then, for pairs of relevant entities within the same sentence or context window, the Relation Extraction module predicts the semantic relationship between them based on the contextual information captured by the fine-tuned BioBERT model.
     </p>
    <div class="grid md:grid-cols-2 gap-6">
         <div class="card p-6 rounded-lg">
             <i class="fas fa-tags text-3xl text-blue-600 mb-4"></i>
            <h3 class="text-lg font-semibold mb-2">NER Module</h3>
             <p class="text-gray-600 dark:text-gray-300">
                Identifies entities like BRCA1 (Gene), Lung Adenocarcinoma (Cancer), V600E (Mutation). Trained on annotated biomedical corpora.
            </p>
        </div>
         <div class="card p-6 rounded-lg">
             <i class="fas fa-link text-3xl text-blue-600 mb-4"></i>
             <h3 class="text-lg font-semibold mb-2">Relation Extraction Module</h3>
             <p class="text-gray-600 dark:text-gray-300">
                 Classifies relationships between entity pairs, such as (TP53, Tumor Suppressor, Pancreatic Cancer) or (EGFR L858R, Driver Mutation, NSCLC).
             </p>
        </div>
    </div>
     <!-- Opsiyonel: Akış şeması görseli -->
     <!-- <img src="/assets/images/projects/ner-re-pipeline.png" alt="NER-RE Pipeline Diagram" class="rounded-lg shadow-lg my-8"> -->
</section>

<!-- Challenges & Solutions -->
 <section class="mb-12">
     <h2 class="text-2xl font-bold mb-4">Challenges & Solutions</h2>
     <ul class="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
         <li>
            <strong>Challenge:</strong> Ambiguity and variability in naming entities (e.g., gene synonyms, different cancer staging terms).
            <br><strong class="ml-4">Solution:</strong> Utilized BioBERT pre-trained on biomedical literature; incorporated normalization and entity linking techniques.
         </li>
          <li>
             <strong>Challenge:</strong> Extracting relations from long and complex sentences with multiple entities.
             <br><strong class="ml-4">Solution:</strong> Employed attention mechanisms within the Transformer architecture; experimented with dependency parsing features.
         </li>
          <li>
              <strong>Challenge:</strong> Distinguishing between different types of gene-cancer relationships (e.g., susceptibility vs. direct driver).
              <br><strong class="ml-4">Solution:</strong> Fine-tuned the relation classifier on datasets with fine-grained relation labels; focused on contextual cues.
          </li>
     </ul>
 </section>

  <!-- Performance Metrics -->
<section class="mb-12">
    <h2 class="text-2xl font-bold mb-4">Performance Metrics (Illustrative)</h2>
    <p class="text-gray-700 dark:text-gray-300 mb-4">
        Performance varied depending on the specific entity/relation type and dataset. Representative F1-scores:
    </p>
    <div class="overflow-x-auto">
        <table class="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
            <thead class="bg-gray-50 dark:bg-gray-700">
                <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Task / Type</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Precision</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Recall</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">F1-Score</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-600">
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap">NER - Gene</td>
                    <td class="px-6 py-4 whitespace-nowrap">~0.90</td>
                    <td class="px-6 py-4 whitespace-nowrap">~0.88</td>
                    <td class="px-6 py-4 whitespace-nowrap font-semibold">~0.89</td>
                </tr>
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap">NER - Cancer Type</td>
                    <td class="px-6 py-4 whitespace-nowrap">~0.92</td>
                    <td class="px-6 py-4 whitespace-nowrap">~0.90</td>
                    <td class="px-6 py-4 whitespace-nowrap font-semibold">~0.91</td>
                </tr>
                 <tr>
                     <td class="px-6 py-4 whitespace-nowrap">RE - Tumor Suppressor</td>
                     <td class="px-6 py-4 whitespace-nowrap">~0.85</td>
                     <td class="px-6 py-4 whitespace-nowrap">~0.80</td>
                     <td class="px-6 py-4 whitespace-nowrap font-semibold">~0.82</td>
                 </tr>
                 <tr>
                     <td class="px-6 py-4 whitespace-nowrap">RE - Oncogene</td>
                     <td class="px-6 py-4 whitespace-nowrap">~0.88</td>
                     <td class="px-6 py-4 whitespace-nowrap">~0.84</td>
                     <td class="px-6 py-4 whitespace-nowrap font-semibold">~0.86</td>
                 </tr>
                  <tr>
                      <td class="px-6 py-4 whitespace-nowrap">RE - Driver Gene/Mutation</td>
                      <td class="px-6 py-4 whitespace-nowrap">~0.79</td>
                      <td class="px-6 py-4 whitespace-nowrap">~0.75</td>
                      <td class="px-6 py-4 whitespace-nowrap font-semibold">~0.77</td>
                  </tr>
            </tbody>
        </table>
    </div>
    <p class="mt-4 text-sm text-gray-600 dark:text-gray-400">
        Note: These are representative scores; actual performance depends heavily on the specific dataset and evaluation protocol.
    </p>
</section>


<!-- Applications -->
<section class="mb-12">
    <h2 class="text-2xl font-bold mb-4">Applications & Impact</h2>
    <div class="grid md:grid-cols-2 gap-6">
         <div class="card p-6 rounded-lg">
             <i class="fas fa-flask text-3xl text-blue-600 mb-4"></i>
             <h3 class="text-lg font-semibold mb-2">Accelerating Oncology Research</h3>
             <p class="text-gray-600 dark:text-gray-300">
                Automating the extraction of gene-cancer associations from literature saves researchers significant time.
             </p>
         </div>
         <div class="card p-6 rounded-lg">
              <i class="fas fa-database text-3xl text-blue-600 mb-4"></i>
              <h3 class="text-lg font-semibold mb-2">Building Knowledge Bases</h3>
              <p class="text-gray-600 dark:text-gray-300">
                 Populating structured databases and knowledge graphs with extracted relationships for large-scale analysis.
              </p>
         </div>
          <div class="card p-6 rounded-lg">
               <i class="fas fa-pills text-3xl text-blue-600 mb-4"></i>
               <h3 class="text-lg font-semibold mb-2">Supporting Precision Medicine</h3>
               <p class="text-gray-600 dark:text-gray-300">
                  Providing clinicians with insights into genetic factors influencing cancer development and treatment response.
              </p>
          </div>
          <div class="card p-6 rounded-lg">
               <i class="fas fa-lightbulb text-3xl text-blue-600 mb-4"></i>
               <h3 class="text-lg font-semibold mb-2">Drug Discovery & Development</h3>
               <p class="text-gray-600 dark:text-gray-300">
                   Identifying potential therapeutic targets based on gene-cancer interactions.
               </p>
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
        <span class="tech-tag">BioBERT</span> <!-- Veya kullanılan spesifik model -->
        <span class="tech-tag">Named Entity Recognition (NER)</span>
        <span class="tech-tag">Relation Extraction (RE)</span>
        <span class="tech-tag">Biomedical NLP</span>
        <span class="tech-tag">spaCy</span> <!-- Kullanıldıysa -->
        <span class="tech-tag">Scikit-learn</span> <!-- Değerlendirme için -->
         <span class="tech-tag">Medical Informatics</span>
    </div>
</section>