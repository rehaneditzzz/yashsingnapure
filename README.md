This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.









195223281564967

55iobB36laJDJs8zA4dlZ1qXuz4








Portfolio/
│  │  ├─ app/
│  │  │  ├─ admin/
│  │  │  │  ├─ layout.ts
│  │  │  │  └─ page.ts
│  │  │  ├─ api/
│  │  │  │  ├─ projects/
│  │  │  │  │  └─ route.ts
│  │  │  │  └─ services/
│  │  │  │     └─ route.ts
│  │  │  └─ layout.ts
│  │  ├─ cache-life.d.ts
│  │  └─ package.json
│  ├─ app-build-manifest.json
│  ├─ build-manifest.json
│  ├─ package.json
│  ├─ react-loadable-manifest.json
│  └─ trace
├─ app/
│  ├─ admin/
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ api/
│  │  ├─ projects/
│  │  │  ├─ [id]/
│  │  │  │  └─ route.ts
│  │  │  └─ route.ts
│  │  ├─ services/
│  │  │  ├─ [id]/
│  │  │  │  └─ route.ts
│  │  │  └─ route.ts
│  │  └─ users/
│  │     └─ route.ts
│  ├─ root/
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ components/
│  ├─ admin/
│  │  ├─ layout/
│  │  │  └─ GlassSidebar.tsx
│  │  └─ pages/
│  │     ├─ AdminProjects.tsx
│  │     └─ AdminServices.tsx
│  ├─ bits/
│  │  ├─ BlurText.tsx
│  │  ├─ CircularText.tsx
│  │  ├─ Dock.tsx
│  │  ├─ GradientText.tsx
│  │  ├─ Magnet.tsx
│  │  └─ Shine.tsx
│  ├─ layout/
│  │  ├─ Footer.tsx
│  │  ├─ Hero.tsx
│  │  └─ Navbar.tsx
│  ├─ Pages/
│  │  ├─ About.tsx
│  │  ├─ NotificationProvider.tsx
│  │  ├─ Projects.tsx
│  │  ├─ Service.tsx
│  │  ├─ ServiceList.tsx
│  │  └─ TechStack.tsx
│  └─ ui/
│     ├─ accordion.tsx
│     ├─ alert-dialog.tsx
│     ├─ alert.tsx
│     ├─ avatar.tsx
│     ├─ badge.tsx
│     ├─ breadcrumb.tsx
│     ├─ button.tsx
│     ├─ calendar.tsx
│     ├─ card.tsx
│     ├─ carousel.tsx
│     ├─ checkbox.tsx
│     ├─ collapsible.tsx
│     ├─ dialog.tsx
│     ├─ drawer.tsx
│     ├─ dropdown-menu.tsx
│     ├─ form.tsx
│     ├─ GlassCard.tsx
│     ├─ input-otp.tsx
│     ├─ input.tsx
│     ├─ label.tsx
│     ├─ menubar.tsx
│     ├─ navigation-menu.tsx
│     ├─ pagination.tsx
│     ├─ popover.tsx
│     ├─ resizable.tsx
│     ├─ scroll-area.tsx
│     ├─ select.tsx
│     ├─ separator.tsx
│     ├─ sheet.tsx
│     ├─ sidebar.tsx
│     ├─ skeleton.tsx
│     ├─ slider.tsx
│     ├─ sonner.tsx
│     ├─ textarea.tsx
│     ├─ toggle.tsx
│     └─ tooltip.tsx
├─ hooks/
│  ├─ use-mobile.ts
│  └─ useNotification.ts
├─ lib/
│  ├─ generated/
│  │  └─ prisma/
│  │     ├─ runtime/
│  │     │  ├─ edge-esm.js
│  │     │  ├─ edge.js
│  │     │  ├─ index-browser.d.ts
│  │     │  ├─ index-browser.js
│  │     │  ├─ library.d.ts
│  │     │  ├─ library.js
│  │     │  ├─ react-native.js
│  │     │  ├─ wasm-compiler-edge.js
│  │     │  └─ wasm-engine-edge.js
│  │     ├─ client.d.ts
│  │     ├─ client.js
│  │     ├─ default.d.ts
│  │     ├─ default.js
│  │     ├─ edge.d.ts
│  │     ├─ edge.js
│  │     ├─ index-browser.js
│  │     ├─ index.d.ts
│  │     ├─ index.js
│  │     ├─ package.json
│  │     ├─ query_engine-windows.dll.node
│  │     ├─ schema.prisma
│  │     ├─ wasm.d.ts
│  │     └─ wasm.js
│  ├─ cloudinary.ts
│  ├─ prisma.ts
│  └─ utils.ts
├─ prisma/
│  ├─ migrations/
│  │  ├─ 20250704120641_init/
│  │  │  └─ migration.sql
│  │  ├─ 20250705090107_add_service_model/
│  │  │  └─ migration.sql
│  │  └─ migration_lock.toml
│  └─ schema.prisma
├─ public/
│  ├─ Fonts/
│  │  ├─ Burgundia.otf
│  │  ├─ Gestiva.otf
│  │  ├─ Haloyen.otf
│  │  ├─ Lalissa.ttf
│  │  ├─ Mevara.otf
│  │  ├─ Noracle.otf
│  │  └─ Onesta.ttf
│  ├─ icons/
│  │  ├─ clerk.png
│  │  ├─ css.png
│  │  ├─ docker.png
│  │  ├─ github.png
│  │  ├─ html5.png
│  │  ├─ javascript.png
│  │  ├─ mongodb.png
│  │  ├─ nextdotjs.png
│  │  ├─ nodedotjs.png
│  │  ├─ openai.png
│  │  ├─ postgresql.png
│  │  ├─ prisma.png
│  │  ├─ react.png
│  │  ├─ tailwindcss.png
│  │  └─ typescript.png
│  ├─ images/
│  │  ├─ 1000178703 (1).png
│  │  ├─ clg.png
│  │  ├─ dp.png
│  │  ├─ file_000000001d20622fbbc98d0f874a3d36.png
│  │  ├─ file_00000000918061f8a341b35cc409343b (1).png
│  │  ├─ icon1.jpg
│  │  ├─ icon2.png
│  │  ├─ icon3.png
│  │  ├─ icon4.png
│  │  ├─ icon5.png
│  │  ├─ icon6.png
│  │  ├─ icon7.png
│  │  ├─ icon8.png
│  │  ├─ icon9.png
│  │  ├─ image1.png
│  │  ├─ image2.png
│  │  ├─ jg.jpg
│  │  ├─ jgf.jpg
│  │  ├─ manipulation.jpg
│  │  ├─ photo1.jpg
│  │  ├─ photo2.png
│  │  ├─ photo3.png
│  │  ├─ resizecom_yashyash.jpg
│  │  ├─ retouch.png
│  │  ├─ uff.png
│  │  ├─ ui1.png
│  │  ├─ ui2.png
│  │  ├─ yas.png
│  │  ├─ yash.png
│  │  └─ yashyash.jpg
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ .env
├─ .gitignore
├─ components.json
├─ eslint.config.mjs
├─ next-env.d.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ README.md
└─ tsconfig.json
