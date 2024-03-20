<!-- 在 JavaScript 中配置和初始化 particles.js -->
particlesJS("particles-js", {
    // 粒子的基本配置
    particles: {
        number: {
            value: 80,  // 粒子数量
            density: {
                enable: true,
                value_area: 800,  // 粒子分布密度
            },
        },
        color: {
            value: "#ffffff",  // 粒子颜色
        },
        shape: {
            type: "circle",  // 粒子形状，支持 circle（圆形）等
            stroke: {
                width: 0,
                color: "#000000",
            },
            polygon: {
                nb_sides: 5,
            },
        },
        opacity: {
            value: 0.5,  // 粒子透明度
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3,  // 粒子大小
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,  // 粒子间连线的距离
            color: "#ffffff",  // 粒子间连线的颜色
            opacity: 0.4,  // 粒子间连线的透明度
            width: 1,  // 粒子间连线的宽度
        },
        move: {
            enable: true,
            speed: 6,  // 粒子运动速度
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    // 交互性的配置
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab",  // 鼠标悬停效果
            },
            onclick: {
                enable: true,
                mode: "push",  // 鼠标点击效果
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
});