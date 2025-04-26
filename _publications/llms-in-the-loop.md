---
layout: publication # Oluşturduğumuz publication layout'unu kullanacak
title: "LLMs-in-the-loop Part-1: Expert Small AI Models for Bio-Medical Text Translation"
date: 2024-07-29
type: arXiv Paper # Yayın türü (Thesis, Conference Paper, Journal Article vb.)
authors: "Bunyamin Keles, Murat Gunay, Serdar I. Caglar" # Yazarlar
affiliation: "AI Amplified (Aimped) Inc." # Kurum
excerpt: "A novel \"LLMs-in-the-loop\" approach demonstrating that small, specialized models trained on high-quality synthetic data can outperform larger LLMs in medical translation. Covers 6 language pairs." # Ana sayfada gösterilecek özet
icon: fas fa-file-alt # Ana sayfadaki kart için ikon
arxivUrl: https://arxiv.org/abs/2407.12126 # arXiv linki
pdfUrl: https://arxiv.org/pdf/2407.12126 # PDF linki
tags: [Machine Translation, Medical Translation, LLMs-in-the-loop, Expert Small Models, MarianMT, NLP, Synthetic Data, BioMedical NLP] # Etiketler
# order: 1 # Ana sayfadaki sıralama için (isteğe bağlı)
citation: | # Alıntı bilgisi (isteğe bağlı)
  @article{keles2024llms,
    title={{LLMs-in-the-loop Part-1: Expert Small AI Models for Bio-Medical Text Translation}},
    author={Keles, Bunyamin and Gunay, Murat and Caglar, Serdar I.},
    journal={arXiv preprint arXiv:2407.12126},
    year={2024},
    eprint={2407.12126},
    archivePrefix={arXiv},
    primaryClass={cs.CL}
  }
---

Machine translation is indispensable in healthcare for enabling the global dissemination of medical knowledge across languages. However, complex medical terminology poses unique challenges to achieving adequate translation quality and accuracy. This study introduces a novel "LLMs-in-the-loop" approach to develop supervised neural machine translation models optimized specifically for medical texts. While large language models (LLMs) have demonstrated powerful capabilities, this research shows that small, specialized models trained on high-quality in-domain (mostly synthetic) data can outperform even vastly larger LLMs. Custom parallel corpora in six languages were compiled from scientific articles, synthetically generated clinical documents, and medical texts. Our LLMs-in-the-loop methodology employs synthetic data generation, rigorous evaluation, and agent orchestration to enhance performance. We developed small medical translation models using the MarianMT base model. We introduce a new medical translation test dataset to standardize evaluation in this domain. Assessed using BLEU, METEOR, ROUGE, and BERT scores on this test set, our MarianMT-based models outperform Google Translate, DeepL, and GPT-4-Turbo. Results demonstrate that our LLMs-in-the-loop approach, combined with fine-tuning high-quality, domain-specific data, enables specialized models to outperform general-purpose and some larger systems. This research, part of a broader series on expert small models, paves the way for future healthcare-related AI developments, including deidentification and bio-medical entity extraction models. Our study underscores the potential of tailored neural translation models and the LLMs-in-the-loop methodology to advance the field through improved data generation, evaluation, agent, and modeling techniques.