import Layout from "../components/Layout.tsx";

export default function Home() {
  return (
    <Layout>
      <main class="flex-1 flex-col gap-10">
        <header class="flex-col gap-3">
          <h1 class="text-5xl font-semibold text-slate-500 dark:text-gray-500">
            Kita
          </h1>
        </header>
        <article class="flex-col gap-2">
          <p>
            Kita contains Georgian German dictionaries and additional resources.
          </p>
        </article>
       <footer class="mt-auto justify-center">
          <address class="flex-col gap-2 items-center">
            <a href="mailto:contact@kita.ge">contact@kita.ge</a>
            <a href="https://matrix.to/#/@kita.ge:matrix.org">
              @kita.ge:matrix.org
            </a>
          </address>
        </footer>
      </main>
    </Layout>
  );
}
