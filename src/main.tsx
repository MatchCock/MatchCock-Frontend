import "./index.css"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router"
import App from "App";
import Tournament from '@pages/Tournament/index'
import Club from "@pages/Club";
import Schedule from "@pages/Schedule";

async function enableMocking() {
  if (!import.meta.env.DEV) return;

  const { worker } = await import("./test/server");

  await worker.start({
    onUnhandledRequest: "bypass",
  });
}

enableMocking();

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<App />} />
          <Route path="/Tournament" element={<Tournament />} />
          <Route path="/Club" element={<Club />} />
          <Route path="/Schedule" element={<Schedule />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
