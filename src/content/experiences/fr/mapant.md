---
title: Ingénieur Fullstack | Projet Mapant.fr
employerOrClient: Freelance
link: https://mapant.fr/
image: "@assets/mapant-fr.png"
from: 2024-08-01T00:00:00Z
to: 2024-09-30T00:00:00Z
skills:
  - SvelteKit
  - SvelteJS
  - UnoCSS
  - HTML/CSS
  - Typescript
  - Géomatique
  - Lidar
  - GDAL
  - PDAL
  - Docker
  - Linux
  - SIG
order: 3
---

### 📖 Contexte et enjeux

Dans le cadre du programme LiDAR HD, L’Institut National de l’Information Géographique et Forestière (IGN) produit et diffuse une cartographie 3D de l’intégralité du sol et du sursol de la France en données LiDAR. Ces données ouvrent le champ à des applications cartographiques nouvelles et innovantes.

### 🏗️ Réalisation

Le projet Mapant.fr ambitionne de créer la carte topographique de France la plus précise de tous les temps. Le but est de transformer les données LiDAR accessibles en open data, en une carte à la norme ISOM 2017, la spécification la plus précise pour les cartes topographiques. La carte obtenue permet des applications grand public (randonnées, compétitions outdoor), et aussi professionnelles (notamment dans le milieu forestier avec la cartographie des densités de végétation).

Dans le cadre de ce projet, j'ai développé un logiciel open source : Cassini (cassini-map.com). Pour optimiser le temps de calcul de la carte, il est implémenté grâce au langage de programmation Rust. La seconde partie du projet consiste à la création de l'infrastructure permettant de distribuer le calcul sur plusieurs serveurs.

### 🛠️ Technologies

- Langage Rust
- Bibliothèques géomatiques PDAL et GDAL
- Linux
- Docker
- Stripe (paiements)
