---
title: F5-TTS Turkish Model Development
date: 2023-05-01 # Tahmini tarih
excerpt: "Creating a high-quality Turkish Text-to-Speech system using the F5-TTS architecture, web-scraped data, and language-specific fine-tuning."
icon: fas fa-microphone
tags: [TTS, F5-TTS, Turkish NLP, Speech Synthesis, Web Scraping, Audio Processing]
layout: project
featured: false
---

<!-- Overview -->
<section class="mb-12">
    <h2 class="text-2xl font-bold mb-4">Project Overview</h2>
    <p class="text-gray-700 dark:text-gray-300 mb-4">
        This project focused on building a custom Text-to-Speech (TTS) model specifically for the Turkish language, leveraging the F5-TTS architecture known for its efficiency and quality. Due to the scarcity of large, high-quality Turkish TTS datasets, a significant part of the project involved developing web scraping pipelines to collect Turkish audio-text pairs from various online sources. The collected data underwent rigorous cleaning, normalization, and processing before being used to fine-tune the F5-TTS model, addressing the unique phonetic and prosodic challenges of Turkish.
    </p>
    <div class="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg mb-6">
        <h3 class="text-lg font-semibold mb-2">Key Achievements</h3>
        <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Developed automated web scraping tools (using Scrapy/Selenium) to gather Turkish audio and corresponding text.</li>
            <li>Created a custom Turkish TTS dataset from scratch, involving extensive cleaning, alignment, and validation.</li>
            <li>Fine-tuned the F5-TTS model, adapting its acoustic model and vocoder for natural Turkish speech synthesis.</li>
            <li>Implemented Turkish-specific text normalization and phonetization pipelines.</li>
             <li>Achieved promising results in terms of Mean Opinion Score (MOS) for naturalness and intelligibility (details to be added).</li>
        </ul>
    </div>
</section>

<!-- Data Acquisition & Processing -->
 <section class="mb-12">
    <h2 class="text-2xl font-bold mb-4">Data Acquisition & Processing</h2>
     <p class="text-gray-700 dark:text-gray-300 mb-4">
        Building a suitable dataset was a core challenge. Our pipeline involved:
    </p>
    <div class="grid md:grid-cols-2 gap-8">
        <div>
            <h3 class="text-lg font-semibold mb-3">Web Scraping & Collection</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Identifying potential sources (news sites, audiobooks, public broadcasts).</li>
                <li>Automated download of audio files and extraction of corresponding text transcripts.</li>
                <li>Handling dynamic web content and anti-scraping measures.</li>
                 <li>Initial filtering based on audio quality and transcript availability.</li>
            </ul>
        </div>
        <div>
            <h3 class="text-lg font-semibold mb-3">Dataset Preparation & Cleaning</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                 <li>Audio segmentation and noise reduction.</li>
                <li>Forced alignment to ensure accurate audio-text synchronization.</li>
                <li>Turkish text normalization (numbers, abbreviations, punctuation).</li>
                <li>Phonetic transcription using Turkish phoneme sets (G2P conversion).</li>
                <li>Manual validation and quality checks on a subset of the data.</li>
            </ul>
        </div>
    </div>
</section>

 <!-- Model & Training -->
<section class="mb-12">
     <h2 class="text-2xl font-bold mb-4">F5-TTS Model & Training</h2>
     <p class="text-gray-700 dark:text-gray-300 mb-4">
        The F5-TTS architecture, known for its Fast, Focused, Flexible, Functional, and Fine-tunable characteristics, was selected. The process involved:
    </p>
     <ul class="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
         <li>Adapting the text processing frontend for Turkish phonemes and linguistic features.</li>
        <li>Fine-tuning the acoustic model (Transformer/CNN based) on the prepared Turkish dataset to learn the mapping from phonemes to mel-spectrograms.</li>
        <li>Training or fine-tuning a neural vocoder (like HiFi-GAN) to convert mel-spectrograms into high-fidelity audio waveforms.</li>
        <li>Experimenting with different hyperparameters, learning rates, and batch sizes for optimal convergence and speech quality.</li>
     </ul>
</section>

 <!-- Turkish Language Challenges in TTS -->
<section class="mb-12">
    <h2 class="text-2xl font-bold mb-4">Turkish Language Specific Challenges Addressed</h2>
    <div class="grid md:grid-cols-2 gap-6">
        <div class="card p-6 rounded-lg">
            <i class="fas fa-language text-3xl text-blue-600 mb-4"></i>
            <h3 class="text-lg font-semibold mb-2">Agglutination & Morphology</h3>
            <p class="text-gray-600 dark:text-gray-300">
                Ensuring correct pronunciation of long words formed by multiple suffixes required accurate phonetization and potentially morphologically aware text processing.
            </p>
        </div>
         <div class="card p-6 rounded-lg">
             <i class="fas fa-assistive-listening-systems text-3xl text-blue-600 mb-4"></i> <!-- İkon değiştirildi -->
            <h3 class="text-lg font-semibold mb-2">Vowel Harmony & Phonetics</h3>
            <p class="text-gray-600 dark:text-gray-300">
                 The model needed to learn subtle phonetic variations dictated by vowel harmony rules to produce natural-sounding Turkish.
            </p>
        </div>
        <div class="card p-6 rounded-lg">
            <i class="fas fa-music text-3xl text-blue-600 mb-4"></i>
            <h3 class="text-lg font-semibold mb-2">Prosody & Intonation</h3>
            <p class="text-gray-600 dark:text-gray-300">
                Capturing the natural rhythm, stress, and intonation patterns of spoken Turkish, which can differ significantly from English.
            </p>
        </div>
         <div class="card p-6 rounded-lg">
             <i class="fas fa-text-slash text-3xl text-blue-600 mb-4"></i> <!-- İkon değiştirildi -->
            <h3 class="text-lg font-semibold mb-2">Text Normalization Complexity</h3>
            <p class="text-gray-600 dark:text-gray-300">
                Handling the expansion of Turkish numerals, dates, abbreviations, and symbols correctly before phonetization.
            </p>
        </div>
    </div>
</section>


<!-- Technologies Used -->
<section>
    <h2 class="text-2xl font-bold mb-4">Technologies Used</h2>
    <div class="flex flex-wrap gap-2">
        <span class="tech-tag">F5-TTS</span>
        <span class="tech-tag">PyTorch</span>
         <span class="tech-tag">Python</span>
        <span class="tech-tag">Web Scraping (Scrapy, Selenium, BeautifulSoup)</span>
        <span class="tech-tag">Audio Processing (Librosa, SoundFile)</span>
        <span class="tech-tag">Text Normalization</span>
        <span class="tech-tag">Phonetization (G2P)</span>
         <span class="tech-tag">Neural Vocoders (e.g., HiFi-GAN)</span>
        <span class="tech-tag">TTS Fine-tuning</span>
        <span class="tech-tag">Speech Synthesis</span>
         <span class="tech-tag">Turkish NLP</span>
    </div>
</section>