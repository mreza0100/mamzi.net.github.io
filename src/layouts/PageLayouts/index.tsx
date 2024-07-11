import { CREATE_SEO_CONFIG, getArticleDetails } from "../../utils/utils";
import { DEFAULT_SEO } from "../../../BLOG_CONSTANTS/_BLOG_SETUP";
import { iSEO } from "../../shared/interfaces";
import Navbar from "../../components/Navbar";
import WithSidebar from "./BlogWithSidebar";
import { useRouter } from "next/router";
import HomeLayout from "./HomeLayout";
import Centered from "./BlogCentered";
import { NextSeo } from "next-seo";
import { useEffect } from "react";
import styled from "styled-components";

interface IBlogLayout {
	children: JSX.Element;
	PAGE_SEO?: iSEO;
	blogwithsidebar?: boolean;
	blogcentered?: boolean;
	home?: boolean;
	ads?: string[];
	titles?: string[];
}

const PageLayout = ({
	children,
	PAGE_SEO,
	blogwithsidebar = false,
	blogcentered = false,
	home = false,
	ads = [],
	titles,
}: IBlogLayout) => {
	// Get article details and destructure for easier access
	const ARTICLE_DETAILS = getArticleDetails();
	const seoDetails = ARTICLE_DETAILS?.seo || PAGE_SEO || DEFAULT_SEO;

	// Create SEO configuration using available details
	const SEO_CONFIG = CREATE_SEO_CONFIG(seoDetails);

	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			const id = router.asPath.split("#")[1];
			const anchor = document.querySelector("#" + id);
			if (anchor) {
				anchor.scrollIntoView({ behavior: "smooth", block: "center" });
			}
		}, 1500);
	});

	// Determine layout based on provided props
	const renderLayout = () => {
		if (blogwithsidebar) {
			return (
				<WithSidebar ads={ads} titles={titles}>
					{children}
				</WithSidebar>
			);
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
		<LayoutStyles>
			<NextSeo {...SEO_CONFIG} />
			<Navbar />
			{renderLayout()}
		</LayoutStyles>
	);
};

const LayoutStyles = styled.div(props => {
	return {
		h1: {
			fontSize: "2.2rem",
			textAlign: "center",
		},
		h2: {
			fontSize: "1.7rem",
			textAlign: "center",
		},
		h3: {
			fontSize: "1.5rem",
			textAlign: "center",
		},
		h4: {
			fontSize: "1.3rem",
			textAlign: "center",
		},
		h5: {
			fontSize: "1.2rem",
			textAlign: "center",
		},
		h6: {
			fontSize: "1.1rem",
			textAlign: "center",
		},
	};
});

export default PageLayout;
