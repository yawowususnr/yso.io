import githubLogo from "./assets/github.png";

export default function Home() {
    return (
        <div className="bg-black min-h-screen text-white">
            <div className="flex flex-col items-center pt-3 pt-3">
                <div className="sm:w-4/5 md:w-2/3 lg:w-2/5 mt-8">
                    <div className="text-4xl font-sans font-semibold">
                        Yaw Owusu Snr
                    </div>
                    <br />
                    <div className="text-[#B4B4B4]">
                        Hi there, I'm a software engineer who builds for the web
                        with a design-oriented approach.In addition to coding, I
                        also make YouTube videos, where I focus on tech, and
                        productivity.
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 sm:w-4/5 md:w-2/3 lg:w-2/5 mt-16">
                    <div className="col-span-2 h w-full h-32 bg-card rounded-md bg-card border border-cardbg flex justify-center items-center shadow-md">
                        Welcome to my Personal Website
                    </div>
                    <a
                        href="https://github.com/YawOwusuSnr"
                        className="w-full h-full bg-card border-cardbg border shadow-md rounded-md"
                    >
                        <div className="flex flex-col justify-center mx-6 my-3">
                            <img
                                src={githubLogo}
                                alt=""
                                className="w-8 h-auto mb-3"
                            />
                            <h3 className="text-[#B4B4B4]">
                                My Github @yawowussnr
                            </h3>
                            <p className="">All my projects!</p>
                        </div>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/yaw-owusu-snr/"
                        className="w-full h-full bg-card border-cardbg border shadow-md rounded-md "
                    >
                        <div className="flex flex-col justify-center mx-6 my-6">
                            <img
                                src="https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-um6pcf27.png"
                                alt=""
                                className="w-8 h-auto mb-3"
                            />

                            <h3 className="text-[#B4B4B4]">@yawowususnr</h3>
                            <p className="">My LinkedIn</p>
                            <br />
                            <a
                                href=""
                                className="rounded-2xl bg-[#313131] px-4 py-1 w-20 flex items-center gap-2"
                            >
                                Follow
                                {/* <span className="text-[#B4B4B4]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="size-4"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span> */}
                            </a>
                        </div>
                    </a>
                    <div className="col-span-2 w-full h-full bg-card border-cardbg border shadow-md rounded-md">
                        d
                    </div>
                </div>
            </div>
        </div>
    );
}
