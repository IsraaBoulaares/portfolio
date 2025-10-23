---

# Omar Chouchane - Developer Portfolio

#### A modern, responsive portfolio website showcasing my skills as a Software Developer. Built with Next.js 15, React 19, and Tailwind CSS, featuring a clean design and smooth animations.

---

# Demo :movie_camera:

 <img width="1860" height="765" alt="Screenshot 2025-07-10 164602" src="https://github.com/user-attachments/assets/45c39855-dfde-4d3b-b353-e5fc2ee55c36" />


## View live preview <img width="1860" height="765" alt="Screenshot 2025-07-10 164602" src="https://github.com/user-attachments/assets/83feaae2-311e-4556-869b-2000e1cbcb3c" />
 <!-- Add your deployment URL here -->

---

## Table of Contents :scroll:

- [Sections](#sections-bookmark)
- [Demo](#demo-movie_camera)
- [Installation](#installation-arrow_down)
- [Getting Started](#getting-started-dart)
- [Usage](#usage-joystick)
- [Deployment](#deployment-rocket)
- [Tutorials](#tutorials-wrench)
  - [Gmail App Password Setup](#gmail-app-password-setup)
  - [Create a Telegram Bot](#create-a-telegram-bot)
  - [Fetching Blog from dev.to](#fetching-blog-from-devto)
- [Packages Used](#packages-used-package)

---

# Sections :bookmark:

- HERO SECTION
- ABOUT ME
- EXPERIENCE
- SKILLS
- PROJECTS (PrepAI, Eventy, SafeCatch, DMA9)
- EDUCATION
- LINKEDIN POSTS (Replaced traditional blog)
- CONTACT (FormSpree integration)

---

# Tech Stack :computer:

## Frontend

- **Next.js 15.1.1** - React framework with App Router
- **React 19.0.0** - UI library with latest features
- **Tailwind CSS** - Utility-first CSS framework
- **SASS/SCSS** - Enhanced styling capabilities

## Animations & UI

- **Lottie React** - Smooth animations
- **React Icons** - Comprehensive icon library
- **React Fast Marquee** - Scrolling text effects
- **React Toastify** - User notifications

## Communication & Forms

- **FormSpree** - Contact form handling
- **Axios** - HTTP client for API requests
- **Nodemailer** - Email functionality (optional)

## Development Tools

- **ESLint** - Code linting
- **Sharp** - Image optimization
- **PostCSS & Autoprefixer** - CSS processing

---

# Installation :arrow_down:

### You will need to download Git and Node to run this project

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

#### Make sure you have the latest version of both Git and Node on your computer.

```bash
node --version
git --version
```

## <br />

# Getting Started :dart:

### Fork and Clone the repo

```bash
git clone https://github.com/OmarChouchane/Portfolio.git

cd Portfolio
```

### Install packages from the root directory

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

### Running with Docker Compose

1. **Build Docker Image and Run Container**:

   ```bash
   docker-compose up --build
   ```

2. **Access the Application**:
   Visit [http://localhost:3000](http://localhost:3000) in your web browser to view the running application.

---

### Building the Docker Image

1. **Build the Docker Image using Dockerfile.dev**:

   ```bash
   docker build -t nextjs-app -f Dockerfile.dev .
   ```

2. **Running the Docker Container**:

   ```bash
   docker run -p 3000:3000 nextjs-app
   ```

3. **Access the Application**:
   Visit [http://localhost:3000](http://localhost:3000) in your web browser to view the running application.

---

# Usage :joystick:

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# FormSpree (for contact form)
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id_here

# Optional: Analytics
NEXT_PUBLIC_GTM=your_google_tag_manager_id

# Optional: Email functionality (if using Nodemailer)
EMAIL_ADDRESS=your_email@gmail.com
GMAIL_PASSKEY=your_gmail_app_password

# Optional: Telegram notifications
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
```

## Customization

### Personal Information

Edit `utils/data/personal-data.js`:

```javascript
export const personalData = {
  name: "Omar Chouchane",
  profile: "/profile.png",
  designation: "Software Developer",
  description: "I'm Omar Chouchane, a passionate Software Developer...",
  email: "omar.chouchane@insat.ucar.tn",
  phone: "+21652834833",
  address: "Monastir, Tunisia - 5000",
  github: "https://github.com/OmarChouchane",
  facebook: "https://www.facebook.com/ch.omar.1428921",
  linkedIn: "https://www.linkedin.com/in/omar-chouchane/",
  resume: "/Omar_Chouchane_Resume.pdf",
};
```

### Projects

Update your projects in `utils/data/projects-data.js`

### LinkedIn Posts

Modify LinkedIn posts in `utils/data/linkedin-posts.js`

### Skills & Experience

Update `utils/data/skills.js` and `utils/data/experience.js`

---

# Deployment :rocket:

## Prerequisites Before Deployment

1. **✅ Update FormSpree ID** in `contact-form.jsx`
2. **✅ Add your resume PDF** to `/public/` directory
3. **✅ Update all personal information** in data files
4. **✅ Test contact form** functionality
5. **✅ Verify all images** are in place

## Deploying to Vercel (Recommended):

1. **Sign up or log in** to [Vercel](https://vercel.com/).
2. Click on **"New Project"**.
3. Import your **GitHub repository**.
4. Configure environment variables:
   - `NEXT_PUBLIC_FORMSPREE_ID` (required for contact form)
   - Add any other optional environment variables
5. Click **Deploy**. Vercel will auto-detect Next.js and build your app.
6. Your portfolio will be live at `https://your-project-name.vercel.app`

## Deploying to Netlify:

1. **Sign up or log in** to [Netlify](https://www.netlify.com/).
2. Click **"New site from Git"**.
3. Connect your **GitHub** account and select your repo.
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Add environment variables in **Site Settings > Environment**.
6. Click **Deploy Site**.

---

# Tutorials :wrench:

## FormSpree Setup (Contact Form)

1. **Sign up** at [FormSpree.io](https://formspree.io/)
2. **Create a new form** in your dashboard
3. **Copy the form ID** (e.g., `xvgrekgy`)
4. **Update** the form ID in `contact-form.jsx`:
   ```javascript
   const res = await axios.post(
     "https://formspree.io/f/YOUR_FORM_ID_HERE",
     userInput
   );
   ```
5. **Test the form** - FormSpree will send emails to your registered email

## Resume PDF Setup

1. **Add your resume** as `Omar_Chouchane_Resume.pdf` in `/public/` directory
2. **Verify the download** works properly
3. **Update filename** in `personal-data.js` if needed:
   ```javascript
   resume: "/your-resume-filename.pdf";
   ```

## LinkedIn Posts Integration

The portfolio displays static LinkedIn posts instead of fetching from dev.to:

1. **Edit** `utils/data/linkedin-posts.js`
2. **Add your posts** with cover images
3. **Place images** in `/public/image/` directory
4. **Update post data** with your actual LinkedIn content

---

# Key Features :star:

- **Modern Tech Stack**: Next.js 15 + React 19 + Tailwind CSS
- **Responsive Design**: Mobile-first approach with smooth animations
- **LinkedIn Integration**: Custom LinkedIn posts section
- **Direct Resume Download**: PDF download functionality
- **Contact Form**: FormSpree integration for easy contact handling
- **Project Showcase**: Featuring PrepAI, Eventy, SafeCatch, and DMA9
- **Performance Optimized**: Image optimization and lazy loading
- **SEO Ready**: Meta tags and structured data

---

# Contact :mailbox:

**Omar Chouchane**  
📧 omar.chouchane@insat.ucar.tn  
📱 +21652834833  
📍 Monastir, Tunisia  
🔗 [LinkedIn](https://www.linkedin.com/in/omar-chouchane/)  
🔗 [GitHub](https://github.com/OmarChouchane)

---

# License :page_facing_up:

This project is open source and available under the [MIT License](LICENSE).

---
