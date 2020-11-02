const isDev = process.env.NODE_ENV !== 'production';

export default isDev ? 'http://localhost:3000' : 'https://nextjs-demo-project-hovbfq0od.vercel.app';
