import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { GithubPage } from './pages/GithubPage'

export const PageRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage></HomePage>}></Route>
                <Route path='githubpage' element={<GithubPage></GithubPage>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default PageRouter;