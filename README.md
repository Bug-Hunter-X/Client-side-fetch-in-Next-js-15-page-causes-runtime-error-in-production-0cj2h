# Client-side Fetch Error in Next.js 15 Production

This repository demonstrates a common error encountered when using client-side `fetch` calls within Next.js 15 pages. The issue arises when the `fetch` call is made within a page component and attempts to access an API route during the client-side hydration process. While the application functions correctly in development mode, it fails in production with a runtime error.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.  The application should run without errors.
4. Build the application for production using `npm run build`.
5. Run the production server with `npm run start`.
6. Navigate to the `/about` page. You will encounter a runtime error due to the failed `fetch` call.

## Solution

The provided solution demonstrates how to resolve this error by utilizing the `getStaticProps` or `getServerSideProps` function to fetch data server-side before rendering the page.