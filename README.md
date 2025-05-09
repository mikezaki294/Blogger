# Blogger

A modern blogging platform built with **Next.js**, **MongoDB**, **Vercel Blob**, and **MUI**. Features blog creation, image uploads, theme toggling, and authentication via Google and GitHub.

---

## 🚀 Live Demo

[https://your-deployment-url.vercel.app](https://your-deployment-url.vercel.app)

---

## ✨ Features

* Google and GitHub authentication via **NextAuth**
* Rich blog editor with **Markdown formatting**
* **Infinite scrolling** blog feed
* Upload cover images using **Vercel Blob**
* **Theme switching** with persistent user preference
* Responsive layout and optimized loading
* Anonymous blog posting supported

---

## 🔧 Tech Stack

* **Framework:** Next.js 14
* **Styling:** Material UI (MUI) + custom themes
* **Authentication:** NextAuth.js
* **Database:** MongoDB with Mongoose
* **Image Upload:** Vercel Blob Storage

---

## 🔐 Environment Variables

Create a `.env.local` file in the root of the project with the following values:

```env
MONGODB_URI=your-mongodb-connection-string
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret
NEXTAUTH_SECRET=your-random-secret
NEXTAUTH_URL=http://localhost:3000
```

> ⚠️ All variables must also be set in your Vercel Project Settings under Environment Variables.

---

## 🛠 Getting Started

1. Clone the repo:

```bash
git clone https://github.com/your-username/blogger.git
cd blogger
```

2. Install dependencies:

```bash
npm install
```

3. Start the dev server:

```bash
npm run dev
```

---

## 🖼 Image Upload via Vercel Blob

This project uses [Vercel Blob](https://vercel.com/docs/storage/vercel-blob) for image uploads.

**Production (on Vercel):**

* Vercel automatically injects a `BLOB_READ_WRITE_TOKEN` at build time.
* Uploaded images are stored and served from your Vercel project's Blob dashboard.

**Local Development:**

1. Generate a personal token:

```bash
npx vercel blob token
```

2. Add it to your `.env.local`:

```env
BLOB_READ_WRITE_TOKEN=your-generated-token
```

---

## ⚠️ Notes

* All blog posts require a **cover image**, a **title**, and at least one **tag**.
* **Anonymous posting** is supported if the user is not logged in.
* JPEG and PNG images under **2MB** are recommended.
* To use **Google Auth**, ensure your OAuth credentials include:
* Github Auth will only work from deployed website URL, not localhosts

  * `http://localhost:3000`
  * `https://blogger-tau-two.vercel.app`
* Blog images are dynamically resized and cropped to maintain consistent layout.

---

## 📂 Folder Structure (Simplified)

```
components/
  blogs/
    BlogCard/
    blogComponents/
    BlogFeed.jsx
    BlogContent.jsx
  blogCreation/
    BlogModal.jsx
    inputComponents/
    structure/

styles/
  customStyles.js
  imageStyles.js
  fullBlogStyles.js

app/
  api/
    blogs/
    upload/
  themes/
```

---

## 📄 License

MIT License — feel free to use and modify.
