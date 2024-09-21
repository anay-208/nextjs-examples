# On demand Revalidation

This Project shows how to use on demand revalidation in nextjs, to cache expensive database operations.


This app has 3 routes:
- **/**: Home page with UI revalidate
- **/fullcache**: It shows how to cache api route
- **/fullcache/revalidate**: Revalidates full cache

In **/fullcache**, there will be a console.log every time its revalidated.
If you uncomment the line inside the `GET` function, it'll run every time.
If I'm right, Next.js only caches fetch requests & unstable caches, and not the actual response.
