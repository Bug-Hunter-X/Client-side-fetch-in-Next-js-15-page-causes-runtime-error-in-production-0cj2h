```javascript
// pages/about.js
import { GetServerSideProps } from 'next';

export default function About({ data }) {
  return (
    <div>
      <h1>About Page</h1>
      <p>Data from API: {data.text}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('http://localhost:3000/api/data');
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
```
```javascript
// pages/api/data.js
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello!' });
}
```