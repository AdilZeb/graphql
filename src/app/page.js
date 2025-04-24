'use client';

import { gql, useQuery } from '@apollo/client';

const GET_USER_DATA = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
      quotes {
        id
        quote
        author
      }
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_USER_DATA, {
    variables: { id: "1" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user = data.user;

  return (
    <main className="min-h-screen p-24">
      <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">{user.name}</h2>
        <p>{user.email}</p>
        <ul>
          {user?.quotes?.map((quote) => (
            <li key={quote.id} className="mt-2">
              <h3 className="text-xl font-bold">"{quote.quote}"</h3>
              <p>- {quote.author}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
