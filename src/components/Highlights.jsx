import githubLogo from "../assets/github.png";

export default function Highlights() {
    return (
        <div className="mb-[700px]">
            <h2 className="text-3xl font-semibold mb-5">Highlights</h2>
            <div className="grid grid-cols-2 gap-5">
                <div className=" bg-card rounded-lg bg-card border border-cardbg">
                    <div className="flex gap-4 my-8 mx-5">
                        <img src={githubLogo} alt="" className="w-12 " />
                        <div className="flex flex-col items-start">
                            <p className="text-graytext font-mono">
                                November 17, 2021
                            </p>
                            <h4 className="font-medium">
                                Understanding graphQL
                            </h4>
                        </div>
                    </div>
                </div>
                <div className=" bg-card rounded-lg bg-card border border-cardbg">
                    <div className="flex gap-4 my-8 mx-5">
                        <img src={githubLogo} alt="" className="w-12 h-auto" />
                        <div className="flex flex-col items-start">
                            <p className="text-graytext font-mono">
                                November 17, 2021
                            </p>
                            <h4 className="font-medium">
                                Developing an ML model
                            </h4>
                        </div>
                    </div>
                </div>
                <div className=" bg-card rounded-lg bg-card border border-cardbg">
                    <div className="flex gap-4 my-8 mx-5">
                        <img src={githubLogo} alt="" className="w-12 " />
                        <div className="flex flex-col items-start">
                            <p className="text-graytext font-mono">
                                November 17, 2021
                            </p>
                            <h4 className="font-medium">Learning React </h4>
                        </div>
                    </div>
                </div>
                <div className=" bg-card rounded-lg bg-card border border-cardbg">
                    <div className="flex gap-4 my-8 mx-5">
                        <img
                            src={githubLogo}
                            alt=""
                            className="max-w-12 w-auto h-auto"
                        />
                        <div className="flex flex-col items-start">
                            <p className="text-graytext font-mono">
                                November 17, 2021
                            </p>
                            <h4 className="font-medium">Understanding JS </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
