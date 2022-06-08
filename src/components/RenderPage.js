import React, { useState } from 'react';
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";


export default function RenderPage() {

    const [page, setPage] = useState(["AboutMe", "Projects", "Contacts"]);

    return (
        <div>
            <AboutMe />
            <Projects />
            <Contacts />
        </div>
    );
}