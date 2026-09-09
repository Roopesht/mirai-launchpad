import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@/lib/theme/ThemeProvider'
import { Header } from '@/components/layout/Header'
import { HomePage } from '@/pages/HomePage'
import { ResumePage } from '@/pages/ResumePage'
import { ProjectsPage } from '@/pages/ProjectsPage'
import { ProjectDetailPage } from '@/pages/ProjectDetailPage'
import { BlogPage } from '@/pages/BlogPage'
import { BlogPostPage } from '@/pages/BlogPostPage'
import { CustomizePage } from '@/pages/CustomizePage'
import { ThemePreviewPage } from '@/pages/ThemePreviewPage'
import { HomePreviewPage } from '@/pages/HomePreviewPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/customize" element={<CustomizePage />} />
            <Route path="/theme-preview" element={<ThemePreviewPage />} />
            <Route path="/home-preview" element={<HomePreviewPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
