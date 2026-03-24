# Wallhaven Search App

Just like the name of this project, this app is wallpaper discovery application built with **React**, **TypeScript**, and **TanStack**. This project replicates the professional browsing experience of platforms like Wallhaven and Unsplash. Featuring infinite scrolling, metadata overlays, and a search system with filters.

---

## Table of Contents

- [Overview](#overview)
    
- [Key Features](#key-features)
    
- [Tech Stack](#tech-stack)
    
- [Prerequisites](#prerequisites)
    
- [Setup and Installation](#setup-and-installation)
    
- [API Configuration](#api-configuration)
    
- [NSFW and Purity Settings](##nsfw-and-purity-settings)
    

---

## Overview

This application is a modern interface for the Wallhaven API, built for learning purpose to explore more about **TanStack Form** and **Query**. It features a refined UI/UX with skeleton loading states and an Unsplash-style modal for viewing high-res wallpapers. The app handles complex filtering for categories, resolution, and purity with ease.

## Key Features

- **Infinite Scroll:** Automatic loading of subsequent pages using `useInfiniteQuery`.
    
- **Skeleton States:** Zero layout shift during data fetching.
    
- **Responsive Image Cards:** Hover-triggered metadata (views, favorites, resolution) that adapts for touch devices.
    
- **Advanced Search:** Integrated filtering for categories (General, Anime, People) and sorting.
    

## Tech Stack

- **Framework:** React 19+ (Vite)
    
- **Language:** TypeScript
    
- **State Management:** TanStack Form (Form handling), TanStack Query (Server state)
    
- **Styling:** Tailwind CSS + DaisyUI
    

## Prerequisites

- Latest **Bun** (or **Node.js** if you prefer)
    
- **Package Manager:** npm
    
- **Wallhaven API Key:** OPTIONAL for full accessing (NSFW content) and if you want to run this app locally.
    

## Setup and Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/21Chillie/wallhaven-api-frontend.git
    cd wallhaven-api-frontend
    ```
    
2. **Install dependencies:**
        
    ```bash
    bun install
    ```
    
3. **Environment Setup:**
    
    Create a `.env` file in the root directory:
    
    Code snippet
    
    ```bash
    VITE_BUN_ENV=development # or production
    VITE_PROD_BASE_URL=/api
    VITE_API_KEY=your_api_key
    VITE_API_BASE_URL=/api/wallhaven
    ```
    
4. **Run the development server:**
    
    ```bash
    bun run dev
    ```
    

## API Configuration

To get an API key, log in to your account at [wallhaven.cc](https://wallhaven.cc) and navigate to your **Account Settings > API**.

## NSFW and Purity Settings

The application supports three levels of content purity:

1. **SFW (Safe For Work):** Default.
    
2. **Sketchy:** Borderline content.
    
3. **NSFW (Not Safe For Work):** Explicit content.
    

> **Important:** To view **NSFW** content, you **must** provide a valid API key in your `.env` file. Without an API key, the Wallhaven API will strictly filter out all NSFW results even if the parameter is sent in the request.
