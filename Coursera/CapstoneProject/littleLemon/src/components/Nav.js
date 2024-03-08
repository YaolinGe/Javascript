export default function Nav() {
    return (
        <nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<Whoops404 />} />
            </Routes>
        </nav>
    ); 
}