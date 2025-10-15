import { useEffect, useRef } from 'react'
import ShinyText from "./ShinyText";
import StarBorder from './StarBorder'

const Hero = () => {
    const canvasRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        const setCanvasSize = () => {
            if (sectionRef.current) {
                canvas.width = sectionRef.current.offsetWidth;
                canvas.height = sectionRef.current.offsetHeight;
            }
        };

        setCanvasSize();
        window.addEventListener("resize", setCanvasSize);

        // bouncing stars
        const bounceStars = Array.from({ length: 100 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            dx: (Math.random() - 0.5) * 1.5,
            dy: (Math.random() - 0.5) * 1.5,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.5
        }));

        // Disappearing stars
        const disappearStars = Array.from({ length: 50 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            deltaX: (Math.random() - 0.5) * 200,
            deltaY: (Math.random() - 0.5) * 200,
            size: Math.random() * 2 + 1,
            opacity: 0,
            phase: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.01 + 0.0005
        }));

        // Animation loop
        const animate = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);

            // Bounce
            bounceStars.forEach(star => {
                star.x += star.dx;
                star.y += star.dy;
                if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
                if (star.y < 0 || star.y > canvas.height) star.dy *= -1;

                context.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                context.beginPath();
                context.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                context.fill();
            });

            // Disappear
            disappearStars.forEach(star => {
                star.x += star.deltaX * star.speed;
                star.y += star.deltaY * star.speed;

                // bounce within bounds
                if (star.x < 0 || star.x > canvas.width) star.deltaX *= -1;
                if (star.y < 0 || star.y > canvas.height) star.deltaY *= -1;

                // smooth fade in/out
                star.phase += star.speed * 2;
                star.opacity = 0.5 + 0.5 * Math.sin(star.phase);

                context.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                context.beginPath();
                context.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                context.fill();
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", setCanvasSize);
        };

   }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-32 bg-transparent overflow-hidden flex justify-center items-center"
            >
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
        </section>
    );
}

export default Hero