import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/launch'>Launch</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/launch' element={<Launch />} >
                    <Route path='/' element={<LaunchIndex />} />
                    <Route path=':slug' element={<LaunchShoe />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    )
}
const Home = () => {
    return (
        <h1>hello from Home</h1>
    )
}
const Launch = () => {
    return (
        <div>
            <h1>hello from Launch</h1>
            <Outlet />
        </div>
    )
}
const LaunchIndex = () => {
    return (
        <ul>
            {Object.entries(shoes).map(([slug, { name, img }]) => (
                <li key={slug}>
                    <Link to={`/launch/${slug}`}>
                        <h2>{name}</h2>
                        <img src={img} alt={name} />
                    </Link>
                </li>
            ))}
        </ul>
    )
}
const LaunchShoe = () => {
    const { slug } = useParams();
    const shoe = shoes[slug]

    if (!shoe) {
        return <h1>not found</h1>
    }
    const { name, img } = shoe
    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name} />
        </div>
    )
}
const NotFound = () => {
    return (
        <div>
            <h1>Not Found</h1>
            <p>Sorry your page was not found</p>
        </div>
    )
}
const shoes = {
    "Air-Jordan-3-Retro-SE-Shoe": {
        name: "Air Jordan 3 Retro SE",
        img: "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/e79ddbdf-f2e7-4081-b350-de479b9e9f3a/air-jordan-3-retro-se-shoe-gt1c9k.jpg"
    },
    "Air-Jordan-XXXIV-Low-Basketball-Shoe": {
        name: "Air Jordan XXXIV Low",
        img: "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/5ea87070-0dde-4034-8f72-bc201e45dbe7/air-jordan-xxxiv-low-basketball-shoe-H8F29f.jpg"
    },
}

export default App
