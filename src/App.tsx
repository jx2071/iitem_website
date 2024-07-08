import React from 'react';
import './App.css';
import {
    HashRouter,
    Routes,
    Route
} from 'react-router-dom';
import HomePage from "src/pages/Home";
import WorkPage from "src/pages/Work";
import Navbar from "src/components/component/Navbar";
import ProjectOne from "src/pages/projects/ProjectOne";
import Footer from "src/components/component/Footer";
import Contact from 'src/pages/Contact';


function App() {
    let scrollSpeed: number = 0; // Initial scroll speed
    const maxScrollSpeed: number = 50; // Maximum predefined scroll speed
    const deceleration: number = 1.5; // Deceleration rate
    let animationFrameId: number | null = null; // Animation frame id
    let scrollTimer: ReturnType<typeof setTimeout> | null = null;

// Function to handle scroll event with debounce
    function handleScroll(event: WheelEvent): void {
        // Clear previous scroll timer
        if (scrollTimer !== null) {
            clearTimeout(scrollTimer);
        }

        // Set new scroll timer
        scrollTimer = setTimeout(() => {
            // Set scroll speed to max speed on first scroll event
            if (scrollSpeed === 0) {
                scrollSpeed = maxScrollSpeed * Math.sign(event.deltaY);
                startDeceleration();
            }
            // Prevent default scroll behavior
            event.preventDefault();
        }, 100); // Adjust the debounce delay as needed (e.g., 100 milliseconds)
    }

// Start deceleration when wheel stops
    function startDeceleration(): void {

        function decelerate(): void {

            if (scrollSpeed !== 0) {
                const direction = Math.sign(scrollSpeed);
                scrollSpeed -= deceleration * direction;
                if (direction === Math.sign(scrollSpeed)) {
                    window.scrollBy(0, scrollSpeed);
                    animationFrameId = requestAnimationFrame(decelerate);
                } else {
                    scrollSpeed = 0;
                }
            } else {
                cancelAnimationFrame(animationFrameId!);
            }
        }

        animationFrameId = requestAnimationFrame(decelerate);
    }

// Add scroll event listener
    window.addEventListener('wheel', handleScroll);
  return (
    <div className="App">
      <HashRouter basename="/">
        <Navbar />
        <AppRoutes />
          <Footer />
      </HashRouter>
    </div>
  );
}

function AppRoutes(){
    return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="project-one" element={<ProjectOne />} />
        <Route path="contact" element={<Contact />} />
    </Routes>)
}

export default App;
