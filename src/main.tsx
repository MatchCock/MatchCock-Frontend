import "./index.css"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router"
import App from "App";
import Tournament from '@pages/Tournament/index'
import Club from "@pages/Club";
import Schedule from "@pages/Schedule";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index path="/MatchCock-Frontend" element={<App />} />
          <Route path="/MatchCock-Frontend/Tournament" element={<Tournament />} />
          <Route path="/MatchCock-Frontend/Club" element={<Club />} />
          <Route path="/MatchCock-Frontend/Schedule" element={<Schedule />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
