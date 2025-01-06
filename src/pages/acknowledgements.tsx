import React, {useEffect, useState} from "react";
import UIHead from "~/components/head";

export default function TermsOfServicePage() {
    const [language, setLanguage] = useState("en");
    useEffect(() => {
        // const lang = navigator.language.split("-")[0]
        // if (!lang) return;
        // console.log("lang", lang)

        setLanguage("en");
    }, []);

    return (
        <div>
            {
                language === "zh"
                    ? <div className="bg-white rounded-lg shadow-md p-8 h-screen overflow-y-scroll">
                        <UIHead title={"FGA TECH - 致谢"}/>
                        <div className="text-2xl font-bold mb-4">致谢</div>

                        <p className="mb-4">在这款应用的开发过程中，我们充满感恩，因为没有上帝的引领和各方的支持，这一切都无法实现。
                        </p>

                        <div className="text-xl font-semibold mb-2">感谢上帝</div>
                        <p className="mb-4">首先，我们感谢上帝，是祂的智慧和恩典引导我们完成了这个项目。祂赐予我们每一位团队成员力量和智慧，让我们克服挑战，并在服事教会的过程中不断创新。</p>

                        <div className="text-xl font-semibold mb-2">感谢 FGA</div>
                        <p className="mb-4">我们衷心感谢 FGA 对这个项目的信任和支持。FGA
                            为我们提供了平台、资源和清晰的愿景，使我们能够将技术与信仰结合起来，为教会大家庭带来祝福。</p>

                        <div className="text-xl font-semibold mb-2">感谢我们的团队</div>
                        <p className="mb-4">最后，我们要向每一位开发团队的成员表达最深的感谢。正是因为你们的奉献与努力，这个项目得以成为现实：</p>

                        <ul>
                            <li><strong>团队领袖：</strong>Kinhou, Kris</li>
                            <li><strong>技术总监：</strong>Innis</li>
                            <li><strong>项目经理：</strong>Dorothea, MunHong</li>
                            <li><strong>移动开发：</strong>Ferrick, ChengYong, Jason, Yannis</li>
                            <li><strong>后端开发：</strong>KaiYang</li>
                            <li><strong>前端开发：</strong>JiaHao, Caleb</li>
                            <li><strong>UI/UX 设计：</strong>Joel, Tiantian, Eason</li>
                        </ul>
                        <p className="my-4">你们每个人都用自己的才干和热情，为这个应用注入了生命。你们的努力使这个项目成为了一项能够祝福更多人的工具。</p>

                        <p style={{fontStyle: 'italic', textAlign: 'center'}} className={"my-8"}>
                            <strong>愿一切荣耀归于上帝！</strong>
                        </p>

                        <blockquote
                            style={{
                                margin: '20px auto',
                                padding: '10px 20px',
                                background: '#f9f9f9',
                                borderLeft: '5px solid #ccc',
                                fontStyle: 'italic',
                            }}
                        >
                            <p style={{textAlign: 'center'}}>
                                “无论你们做什么，或说话或行事，都要奉主耶稣的名，借着祂感谢父神。”
                            </p>
                            <p style={{textAlign: 'right'}}>—— 歌罗西书 3:17</p>
                        </blockquote>
                    </div>

                    : <div className="bg-white rounded-lg shadow-md p-8 h-screen overflow-y-scroll">
                        <UIHead title={"FGA TECH - Acknowledgments"}/>
                        <div className="text-2xl font-bold mb-4">Acknowledgments</div>

                        <p className="mb-4">Throughout the development of this app, we are filled with gratitude because
                            none of this would have been possible without God&#39;s guidance and the support of many.
                        </p>

                        <div className="text-xl font-semibold mb-2">Thanks to God</div>
                        <p className="mb-4">First and foremost, we thank God, whose wisdom and grace have guided us to
                            complete this project. He has given each member of our team the strength and wisdom to overcome
                            challenges and innovate in our service to the church.</p>

                        <div className="text-xl font-semibold mb-2">Thanks to FGA</div>
                        <p className="mb-4">We extend our heartfelt gratitude to FGA for its trust and support in this
                            project. FGA has provided us with the platform, resources, and clear vision needed to integrate
                            technology with faith, blessing our church family in meaningful ways.</p>

                        <div className="text-xl font-semibold mb-2">Thanks to Our Team</div>
                        <p className="mb-4">Finally, we want to express our deepest appreciation to every member of the
                            development team. Your dedication and hard work have made this project a reality:</p>

                        <ul>
                            <li><strong>Team Leaders:</strong> Kinhou, Kris</li>
                            <li><strong>Technical Director:</strong> Innis</li>
                            <li><strong>Project Managers:</strong> Dorothea, MunHong</li>
                            <li><strong>Mobile Developers:</strong> Ferrick, ChengYong, Jason, Yannis</li>
                            <li><strong>Backend Developer:</strong> KaiYang</li>
                            <li><strong>Frontend Developers:</strong> JiaHao, Caleb</li>
                            <li><strong>UI/UX Designers:</strong> Joel, Tiantian, Eason</li>
                        </ul>
                        <p className="my-4">Each of you has contributed your talent and passion, breathing life into this
                            app. Your efforts have turned this project into a tool that can bless many.</p>


                        <p style={{fontStyle: 'italic', textAlign: 'center'}} className={"my-8"}>
                            <strong>May all glory be to God!</strong>
                        </p>


                        <blockquote
                            style={{
                                margin: '20px auto',
                                padding: '10px 20px',
                                background: '#f9f9f9',
                                borderLeft: '5px solid #ccc',
                                fontStyle: 'italic',
                            }}
                        >
                            <p style={{textAlign: 'center'}}>
                                “And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus,
                                giving thanks to God the Father through him.”
                            </p>
                            <p style={{textAlign: 'right'}}>— Colossians 3:17</p>
                        </blockquote>
                    </div>
            }
        </div>
    )
}