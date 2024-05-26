import Map from "./Map";
import githubLogo from "./assets/github.png";
import icon from "./assets/icon.png";
import iconbetter from "./assets/removebg.png";
import Highlights from "./components/Highlights";
import linkedIn from './assets/linkedin480.png'

export default function Home() {
    return (
        <div className="bg-black min-h-screen text-white">
            <div className="flex flex-col items-center pt-3 pt-3">
                <div className="sm:w-4/5 md:w-2/3 lg:w-2/5 mt-8">
                    <div className="my-10 flex items-end">
                        <div className="w-2/3">
                            <h2 className="text-5xl font-bold">Hey, I'm Yaw</h2>
                            <br />
                            <div className="text-[#dddddd] text-xl">
                                I'm a software developer who makes open-source
                                projects and writes about life, code, design,
                                and more. Welcome to my digital diary.
                            </div>
                        </div>
                        <div>
                            <img
                                className="rounded-full max-w-44 w-auto h-auto bg-card"
                                src={iconbetter}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 sm:w-4/5 md:w-2/3 lg:w-2/5 mt-16">
                    <div className="col-span-2 h w-full bg-cardalt rounded-l-lg border border-cardbg flex justify-center items-center shadow-md">
                        {/* Welcome to my Personal Website */}
                        <img
                            src="https://streak-stats.demolab.com?user=Yawowususnr&locale=en&mode=daily&theme=github_dark&hide_border=false&border_radius=5&order=3"
                            height="150"
                            alt="streak graph"
                        />
                    </div>
                    <a
                        href="https://github.com/YawOwusuSnr"
                        className="w-full h-full bg-cardalt border-cardbg border shadow-md rounded-r-lg"
                    >
                        <div className="flex flex-col justify-center m-6">
                            <img
                                src={githubLogo}
                                alt=""
                                className="w-8 h-auto mb-3"
                            />
                            <h3 className="text-graytext">My Github</h3>
                            <p className="">All my projects!</p>
                            <br />
                            <a
                                href="https://www.linkedin.com/in/yaw-owusu-snr/"
                                className="rounded-2xl bg-[#313131] px-4 py-1 w-20 flex items-center gap-2"
                            >
                                Follow
                            </a>
                        </div>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/yaw-owusu-snr/"
                        className="w-full h-full bg-cardalt border-cardbg border shadow-md rounded-l-lg "
                    >
                        <div className="flex flex-col justify-center mx-6 my-6">
                            <img
                                src={linkedIn}
                                alt=""
                                className="w-12 h-auto mb-2"
                            />

                            <h3 className="text-[#B4B4B4]">@yawowususnr</h3>
                            <p className="">My LinkedIn</p>
                            <br />
                            <a
                                href="https://www.linkedin.com/in/yaw-owusu-snr/"
                                className="rounded-2xl bg-[#313131] px-4 py-1 w-20 flex items-center gap-2"
                            >
                                Follow
                            </a>
                        </div>
                    </a>
                    <div className="col-span-2 w-full h-52 bg-card border-cardbg border shadow-md rounded-r-lg">
                        <Map lat={37.2296} lng={-80.4139} zoom={2} pitch={4} />
                    </div>
                </div>

                <div className="sm:w-4/5 md:w-2/3 lg:w-2/5 mt-32">
                    <h3 className="text-2xl font-semibold">
                        About this portfolio
                    </h3>
                    <p className="mt-5">
                        This portfolio showcases my journey and capabilities as
                        a software engineer, with a focus on web development,
                        DevOps, and machine learning. Built with an intention to
                        demonstrate my technical skills, this site is powered by
                        a combination of cutting-edge technologies.
                    </p>
                    <h3 className="text-2xl font-semibold mt-8">
                        My Tech Stack
                    </h3>
                    <div className="flex justify-center mb-4">
                        <img
                            className="mt-8"
                            height={300}
                            src="https://skillicons.dev/icons?i=py,js,java,html,docker,react,tensorflow,express,nodejs,flask,mongodb,ts,aws,bash,c&perline=5"
                        />
                    </div>
                    <h3 className="text-2xl font-semibold my-4 flex items-center gap-2">
                        My Projects
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                            color="bg-card"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                            />
                        </svg>
                    </h3>
                    <div className=" h w-full bg-card rounded-lg bg-card border border-cardbg flex items-center shadow-md mb-10">
                        <div className="w-2/3 h-32 text-sm">
                            <p className="m-4 text-graytext">
                                I created a web scraper with BeautifulSoup to
                                collect 2000+ data points from a gym website,
                                storing them in MongoDB via Mongoose. Integrated
                                React with Chart.js for dynamic attendance
                                visualizations and developed models to email
                                users when gym capacity is low.
                            </p>
                        </div>
                        <div className="border-l border-cardbg w-1/3 h-32 flex flex-col items-center justify-center">
                            {/* <img
                                src={githubLogo}
                                alt=""
                                className="w-8 h-auto mb-3"
                            /> */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-12"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z"
                                    clipRule="evenodd"
                                />
                            </svg>

                            <p>Check it out!</p>
                        </div>
                    </div>
                    <Highlights />
                </div>
            </div>
        </div>
    );
}
