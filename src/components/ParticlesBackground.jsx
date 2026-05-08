import Particles from "react-tsparticles";

export default function ParticlesBackground() {

    return (
        <Particles
            options={{
                background: {
                    color: {
                        value: "#000000",
                    },
                },

                fpsLimit: 120,

                particles: {

                    number: {
                        value: 80,
                    },

                    color: {
                        value: "#00ffff",
                    },

                    links: {
                        enable: true,
                        color: "#00ffff",
                        distance: 120,
                        opacity: 0.5,
                        width: 1,
                    },

                    move: {
                        enable: true,
                        speed: 1.5,
                    },

                    opacity: {
                        value: 1,
                    },

                    size: {
                        value: 4,
                    },

                    shape: {
                        type: "circle",
                    },
                },

                detectRetina: true,
            }}

            className="absolute inset-0"
        />
    );
}