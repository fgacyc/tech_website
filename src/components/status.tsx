import React from "react";

interface StatusProps {
    className?: string
}

const Status: React.FC<StatusProps> = ({className}) => {
    return (
        <a href="https://status.fgacyc.com/status/host-status" className={className} target="_blank">
            <span className={"h-2 w-2 bg-green-500 rounded-full inline-block mr-2"}></span>
            System Status: <span className={"text-green-500"}>Operational</span>
        </a>
    )

}

export default Status