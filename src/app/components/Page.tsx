import React from 'react';

import { Header } from './Header';
import './page.css';
import { Button } from './Button';
import { dummyServerAction } from './Page.action';

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();
  const handleServerAction = async () => {
    const response = await dummyServerAction();
    alert(JSON.stringify(response, null, 2));
  }

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section className="storybook-page">
        <h2>Pages in Storybook</h2>
        <p>I am a button that triggers server action:</p>
        <Button label="Trigger server action" onClick={handleServerAction} />
      </section>
    </article>
  );
};
