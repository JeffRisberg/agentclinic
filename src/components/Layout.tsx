import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children?: any }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AgentClinic</title>
        <link rel="stylesheet" href="/styles/main.css" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
