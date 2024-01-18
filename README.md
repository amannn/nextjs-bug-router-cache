# nextjs-bug-router-cache

1. Clone and run https://github.com/amannn/nextjs-bug-router-cache in dev mode
2. Open http://localhost:3000/
3. "Index (en)" renders
4. Click "Go to /a"
5. "A (en)" renders
6. Click "Go to /"
7. Click "Change locale to "de""
8. "Index (de)" renders
9. Click "Go to /a"
10. Error

Now the error that you might see can be one of the following:

**A segment mismatch**

<img width="1792" alt="Screenshot 2024-01-18 at 20 29 48" src="https://github.com/vercel/next.js/assets/4038316/7c8ed7df-7967-41f3-a8ef-65fb00195040">


**Incorrectly cached page**

"Index (en)" might render (from Router Cache)

