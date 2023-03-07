import { ComponentChildren } from "preact";
import { Head } from "$fresh/runtime.ts";

export default function Layout(
  { children }: { children: ComponentChildren },
) {
  return (
    <body class="max-w-screen-md mx-auto px-2 pb-4 flex-col gap-4 bg-white dark:bg-gray-900 text-slate-800 dark:text-gray-300">
      <MyHead />
      <Navigation />
      <div class="flex-1 min-h-0 flex-col">
        {children}
      </div>
    </body>
  );
}

function MyHead() {
  return (
    <Head>
      <title>Kita</title>
      <meta
        content="Georgian German dictionaries and resources"
        name="Kita"
      />
      <link rel="stylesheet" href="/reset.css" />
    </Head>
  );
}

function Navigation() {
  return (
    <nav class="border-b border-slate-300 dark:border-gray-700 text-slate-500 dark:text-gray-500">
      <ul class="flex-1 px-2 py-2 gap-3 justify-around">
        <li class="py-2 font-bold">
          <a href="//verbs.kita.ge/" class="cursor-pointer">Verbs</a>
        </li>
        <li class="py-2 font-bold">
          <a href="//dict.kita.ge/" class="cursor-pointer">Dict</a>
        </li>
      </ul>
    </nav>
  );
}
