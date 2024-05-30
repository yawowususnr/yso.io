import githubLogo from "../assets/github.png";
import vue from "../assets/vue.png";
import reactlogo from "../assets/react.svg";
import terminal from "../assets/terminal.png";
import gear from "../assets/gear.png";

export default function Highlights() {
    return (
        <div className="mb-[700px]">
            <h2 className="text-3xl font-semibold mb-5">
                Learning qHighlights
            </h2>
            <div className="grid grid-cols-2 gap-5">
                <div className=" bg-card border rounded-lg  border-cardbg">
                    <div className="flex gap-4 my-8 mx-5">
                        <img
                            src={vue}
                            alt=""
                            className="max-w-12 w-auto h-auto"
                        />
                        <div className="flex flex-col items-start">
                            <p className="text-graytext font-mono">
                                May 30, 2024
                            </p>
                            <h4 className="font-medium">
                                Learning Vue Framework
                            </h4>
                        </div>
                    </div>
                </div>
                <div className=" bg-card border rounded-lg  border-cardbg">
                    <div className="flex gap-4 my-8 mx-5">
                        <img src={gear} alt="" className="w-12 h-auto" />
                        <div className="flex flex-col items-start">
                            <p className="text-graytext font-mono">
                                March 10, 2024
                            </p>
                            <h4 className="font-medium">Built my first API</h4>
                        </div>
                    </div>
                </div>
                <div className=" bg-card border rounded-lg  border-cardbg">
                    <div className="flex gap-4 my-8 mx-5">
                        <img src={reactlogo} alt="" className="w-12 " />
                        <div className="flex flex-col items-start">
                            <p className="text-graytext font-mono">
                                October 2023
                            </p>
                            <h4 className="font-medium">Learning React </h4>
                        </div>
                    </div>
                </div>
                <div className=" bg-card rounded-lg border border-cardbg">
                    <div className="flex gap-4 my-8 mx-5">
                        <img
                            src={terminal}
                            alt=""
                            className="max-w-12 w-auto h-auto"
                        />
                        <div className="flex flex-col items-start">
                            <p className="text-graytext font-mono">May 2023</p>
                            <h4 className="font-medium">
                                Understanding the CLI
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
