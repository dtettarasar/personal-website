# 🧭 Personal Website

**Overview**

This the source code of my personal website — a full-stack web application built with **Nuxt 3, MongoDB, and Docker**.
It is designed to showcase both my portfolio and technical skills, while remaining generic enough for anyone to use as a personal CV & portfolio website.

The project can be deployed as-is via Docker or used as a starting point to create a similar Nuxt.js-based application.

## 🧰 Tech Stack

- **Nuxt 3 / Vue 3** — Integrated frontend + backend framework (server-side API)
- **Tailwind CSS** — Fast and modern styling
- **MongoDB** — NoSQL database
- **Mongoose** *(optional)* — ODM to simplify MongoDB model and query management
- **Docker & Docker Compose** — Containerization and orchestration
- **Node.js 18+** — JavaScript runtime environment

## ✨ Features (Work in Progress)

- 🧑‍💼 **Profile Management** — Define and update your personal information directly from the admin interface.
- 💼 **Experience & Skills** — Add, edit, and display your professional background and key skills.
- 🎨 **Portfolio Section** — Showcase your projects and artistic or technical creations (for developers, designers, artists, etc.).
- 📬 **Contact Form** — Configurable form with customizable sender email and automated reply.
- ⚙️ **Back Office** — Manage all content (profile, CV, portfolio, contact form) from a secure admin dashboard.
- 🚀 **SEO-Friendly Architecture (thanks to Nuxt JS)** — Server-side rendering (SSR) for optimized search engine visibility.

## 🧑‍💻 Development Setup

**Prerequisites**

- Docker & Docker Compose installed
- Node.js (optional, if you want to run Nuxt locally)

### Installation

### ⚙️ Environment Variables

The application uses a .env file at the project root.
Example configuration:

~~~
MONGO_INITDB_ROOT_USERNAME=admin
MONGO_INITDB_ROOT_PASSWORD=secure-password1234!!
MONGO_DB_NAME=personal_site
MONGO_DB_URI=mongodb://admin:secure-password1234!!@mongodb:27017/
ME_CONFIG_BASICAUTH_USERNAME=devadmin
ME_CONFIG_BASICAUTH_PASSWORD=devsecret
~~~

~~~
# Clone the repository
git clone https://github.com/dtettarasar/personal-website.git

# Move into the project folder
cd personal-website

# create the .env file and add variables in it using your editor
touch .env

# Start the containers
docker compose up --build
~~~

**Once running** 

- App available at → http://localhost:3000
- Mongo Express (database UI) → http://localhost:8081

#### Important notes

**Mongo Express is reserved for local development.**
It must never be activated in production (risk of security breach).
The service is configured to be deployed only in the development environment.

**The identifiers “devadmin / devsecret” are examples for local use.**
You can change them freely, but keep them simple for your local environment.

**In production**, the application does not depend on Mongo Express.
Only MONGO_INITDB_ROOT_USERNAME, MONGO_INITDB_ROOT_PASSWORD, MONGO_DB_NAME, and MONGO_DB_URI are required.

#### 🚀 Production environment

In production, Mongo Express is disabled for security reasons.
Only the Nuxt app and MongoDB services are started.

**Command:**

```bash
docker compose -f docker-compose.yml up -d
```

This ensures that:

- Only essential containers are running.
- No admin interface is publicly exposed.

You can safely deploy this configuration on your production server or staging environment.

#### 🔄 Other Useful Docker commands

```bash

# List running containers
docker compose ps

# Stream logs from all containers
docker compose logs -f

# Stop and remove containers and volumes
docker compose down -v

# Rebuild all images from scratch
docker compose build --no-cache

```

## 🧩 Planned Features

- 🔐 Authentication system for the back office
- 🧠 Markdown-based content management
- 🖼️ Media upload and image optimization
- 🗃️ Project categories and filtering
- 📨 Mailer service integration (NodeMailer or similar)

## 📅 Project Status

This project is **currently under development**.
The structure and main components are being implemented progressively, and features will be added step by step.

## 💡 About the Author

I’m **Dylan Tettarasar**, a **Fullstack Developer** and former **Web Project Manager**, with a background in **digital marketing and communication**.
My goal with this project is to merge my experience in web management with my growing expertise in development — and to create a personal site that reflects my technical journey and creative side.

## 📄 License

This project is released under the **MIT License** — feel free to fork, modify, and reuse it for your own portfolio.
