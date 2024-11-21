## Introduction

This is a Short URL Generator service that let's you create Short URLs for your longer URLs. You can also set an expiry date for a Short URL while generating it.

## How it works

- Whenever you submit a new URL, it will generate a random unique 6 character string using the built in `crypto.randomBytes()` function in Nodejs.
- It will then save a new entry to the database with the original url, generated unique string and the specified expiry date.
- After the creation of the unique string, whenever you visit the `/{unique-string}` route in the website, it will make a database query to fetch the original url using the unique string parameter and considering that the link hasn't expired yet, it will redirect you to the original URL.
- If the link is expired or you have entered a wrong parameter, it will show you a NOT Found page.

## Screenshots

![image](https://github.com/user-attachments/assets/1d5270ec-292b-4f20-ab67-ea03f1be957b)

![image](https://github.com/user-attachments/assets/453bd90d-29dc-460c-a95a-5242ca578ea1)

![image](https://github.com/user-attachments/assets/87a8fa23-0627-4cc8-b329-70218c5527b6)


## Getting Started

First add your postgres database credentials in `.env` file in project root

```
DATABASE_URL=<your database connection string>
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
