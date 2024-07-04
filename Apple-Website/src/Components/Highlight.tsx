import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { rightImg, watchImg } from '../utils';
import Video from './Video';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Highlights() {
    useEffect(() => {
        console.log("useEffect called");

        gsap.to(".link", {
            opacity: 1,
            y: 0,
            stagger: 0.4,
            delay: 0.6,
            scrollTrigger: {
                trigger: ".link",
                start: "top 90%", // Adjust start position if needed
                end: "top 90%", // Adjust end position if needed
                toggleActions: "play none none none", // Play animation on enter, reset on leave back
            }
        });

        gsap.to('#hHeading', {
            opacity: 1,
            y: 0,
            delay: 0.4,
            ease: "power2.inOut",
            duration: 1,
            scrollTrigger: {
              trigger: '#hHeading',
              start: 'top 90%', // Adjust start position if needed
              end: 'top 90%', // Adjust end position if needed
              toggleActions: "play none none reset", // Play animation on enter, reset on leave back
            },
            onComplete: () => {
              gsap.to('.glow', {
                opacity: 1,
                duration: 0.5,
                repeat: 1,
              });
            }
          });
    }, []);

    return (
        <section className="bg-zinc w-screen overflow-hidden h-full common-padding">
            <div className="w-full lg:w-screen screen-max-width">
                <div className="mb-12 w-full flex flex-col lg:flex-row items-start lg:items-end justify-between">
                    <h1 id='hHeading' className="section-heading opacity-0">Get the highlights.</h1>
                    <div className='flex flex-wrap items-start lg:items-end flex-row gap-5 mt-4 lg:mt-0'>
                        <p className='link opacity-0 flex items-center'>
                            Watch the film <img className='ml-2' src={watchImg} alt="watchImg" />
                        </p>
                        <p className='link opacity-0 flex items-center'>
                            Watch the event <img className="ml-2" src={rightImg} alt="watchImg" />
                        </p>
                    </div>
                </div>

                <Video/>
            </div>
        </section>

    );
}
