import React from "react";
import Head from "next/head";

interface HeadProps {
    title: string;
}

const UIHead = (props: HeadProps) => {
    const { title } = props;
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/FGA_TECH.png"/>
                <meta property="og:title" content="FGA Technology"/>
                <meta property="og:description"
                      content="Using technological innovation that accelerates the completion of the M100 mission."/>
                <meta property="og:image" content="https://www.fgacyc.tech/FGA_Tech_Square.png"/>
                <meta property="og:url" content="https://www.fgacyc.tech"/>
                <meta property="og:type" content="website"/>
            </Head>
        </>
    )
}

export default UIHead