```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error because 'fetch' is not available by default
  fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data));

  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
```
```javascript
// pages/api/data.js
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello!' });
}
```