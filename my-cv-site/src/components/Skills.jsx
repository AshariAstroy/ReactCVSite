import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiDotnet } from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";


const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <TbBrandCSharp />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiDotnet />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];


// Alternative with image sources

const imageLogos = [
    { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
    { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
    { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

const Skills = () => {
    return (
        <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
                logos={techLogos}
                speed={60}
                direction="left"
                logoHeight={42}
                gap={60}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="#121212"
                ariaLabel="Technology partners"
            />
        </div>
    );
}

export default Skills