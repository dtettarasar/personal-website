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

- **Docker & Docker Compose** installed
- **Node.js** (optional, if you want to run Nuxt locally, but recommended for tooling)
- **Make** (Required for executing development/production commands via the `Makefile`)

### Installing Make

The project uses a `Makefile` to simplify Docker commands. You must have **Make** installed on your system.

| OS | Installation Instructions |
| :--- | :--- |
| **macOS** | Included with **Xcode Command Line Tools**. If the `make` command fails, run: `xcode-select --install` |
| **Linux** | Usually pre-installed. If not, install the build tools, e.g., on Ubuntu: `sudo apt install build-essential` |
| **Windows** | Recommended via **WSL 2** (Windows Subsystem for Linux), or available through **Git Bash** (included with Git for Windows). |

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

# Install project dependencies (optional but good practice)
npm install 

# Start in Development mode (uses docker-compose.yml and docker-compose.dev.yml)
# This command uses the Makefile for Hot Reload and Mongo Express.
make dev

~~~

**Once running** 

- App available at → http://localhost:3000
- Mongo Express (database UI) → http://localhost:8081

## 🐳 Docker Environments and Deployment

This project uses Docker Compose with two separate configuration files for clear separation:
* **`docker-compose.yml`**: Defines the essential services for **Production** (Nuxt App, MongoDB).
* **`docker-compose.dev.yml`**: A configuration override that adds **Development** features (Hot Reload volumes, Mongo Express).

### ⚙️ Local Development (Hot Reload & DB Admin)

Use the `make dev` command to run the environment locally. It automatically uses both configuration files.

**Command:**

~~~
make dev
~~~

### 🚀 Production Deployment (Secure & Optimized)

In production, Mongo Express is disabled, the Nuxt application is served from its compiled .output files, and code volumes are omitted for security and performance.

You can launch the production environment using the Makefile (recommended for logs) or directly via Docker Compose.

**1. Launch and Attach Logs (Foreground)**

~~~
make prod-log
~~~

*Use this to check for runtime errors, typically during the first deployment.*

**2. Launch in Detached Mode (Background)**

~~~
make prod-no-log
~~~

*Use this for continuous operation on a remote server.*

### 🔄 Other Useful Docker commands

~~~
# List running containers
docker compose ps

# Stream logs from the production stack (use this if prod-no-log is running)
docker compose -f docker-compose.yml logs -f

# Stop and remove containers and volumes for the full DEV stack
# (This includes mongo-express, even if it's currently down)
make down

# Rebuild all images from scratch (uses the DEV stack)
docker compose -f docker-compose.yml -f docker-compose.dev.yml build --no-cache
~~~

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
