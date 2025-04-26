---
layout: publication
title: "Social Network Analysis of Oncology Theses"
date: 2024-01-15 # Tahmini bir tarih, gerçek tarihle değiştirilebilir
type: Master's Thesis
authors: "Serdar I. Caglar"
affiliation: "Anadolu University (Measurement and Data Analytics)"
excerpt: "Knowledge graph analysis of 1726 Turkish medical thesis abstracts to discover patterns and trends in national cancer research using Neo4j."
icon: fas fa-graduation-cap # Veya fas fa-project-diagram
tags: [Social Network Analysis, Knowledge Graph, Neo4j, Oncology, Medical Informatics, Data Science, Thesis]
# order: 2
---

This Master's thesis project involved performing a Social Network Analysis (SNA) and Knowledge Graph analysis on a corpus of 1,726 Turkish medical thesis abstracts focused on oncology. The primary objective was to uncover hidden patterns, trends, and key areas of focus within the national cancer research landscape in Turkey as reflected in these academic works.

By extracting entities (like genes, cancer types, treatment methods, institutions, researchers) and their relationships from the abstracts using NLP techniques, a knowledge graph was constructed within a Neo4j database.

Network analysis techniques and graph algorithms (such as centrality measures like PageRank, Betweenness, and community detection algorithms like Louvain) were then applied using Cypher queries to analyze the structure of the research network.

Key insights aimed to identify:
*   The most influential or central research topics and keywords.
*   Clusters of related research areas.
*   Temporal trends in research focus over the period covered by the theses.
*   Potential gaps or under-researched connections within the Turkish oncology field based on the thesis data.

The project utilized Python for data processing and NLP, and Neo4j with Cypher for graph storage and analysis.