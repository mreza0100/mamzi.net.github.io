import { NextSeo } from "next-seo";
import { DEFAULT_SEO } from "../../../BLOG_CONSTANTS/_BLOG_SETUP";
import Navbar from "../../components/Navbar";
import { iSEO } from "../../shared/interfaces";
import { CREATE_SEO_CONFIG, getArticleDetails } from "../../utils/utils";
import Centered from "./BlogCentered";
import WithSidebar from "./BlogWithSidebar";
import HomeLayout from "./HomeLayout";

interface IBlogLayout {
	children: JSX.Element;
	PAGE_SEO?: iSEO;
	blogwithsidebar?: boolean;
	blogcentered?: boolean;
	home?: boolean;
	ads?: string[];
}

const PageLayout = ({
	children,
	PAGE_SEO,
	blogwithsidebar = false,
	blogcentered = false,
	home = false,
	ads = [],
}: IBlogLayout) => {
	// Get article details and destructure for easier access
	const ARTICLE_DETAILS = getArticleDetails();
	const seoDetails = ARTICLE_DETAILS?.seo || PAGE_SEO || DEFAULT_SEO;

	// Create SEO configuration using available details
	const SEO_CONFIG = CREATE_SEO_CONFIG(seoDetails);

	// Determine layout based on provided props
	const renderLayout = () => {
		if (blogwithsidebar) {
			return <WithSidebar ads={ads}>{children}</WithSidebar>;
		}
		if (blogcentered) {
			return <Centered>{children}</Centered>;
		}
		if (home) {
			return <HomeLayout>{children}</HomeLayout>;
		}
		return <HomeLayout>{children}</HomeLayout>;
	};

	return (
		<>
			<NextSeo {...SEO_CONFIG} />
			<Navbar />
			{renderLayout()}
		</>
	);
};

export default PageLayout;
