import dynamic from "next/dynamic";
import { ElementType } from "react";

export const PageLayout: any = dynamic(() => import("../layouts/PageLayouts"));
export const Text: any = dynamic(() => import("./Text"));
export const Image: any = dynamic(() => import("./ArticleImage"));
export const Seperator: any = dynamic(() => import("./Seperator"));
export const List: any = dynamic(() => import("./List"));
export const LinkTo: any = dynamic(() => import("./LinkTo"));
export const Slider: any = dynamic(() => import("./Slider"));
export const Accordian: any = dynamic(() => import("./Accordian"));
export const VideoPlayer: any = dynamic(() => import("./Video"));
