import { createElement } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export function TooltipDemo({ sampleText }) {
    return (
        <a className="widget-hello-world" data-tooltip-id="12345" data-tooltip-content="Hello!">
            Hello {sampleText}
            <Tooltip id="12345" />
        </a>
    );
}
