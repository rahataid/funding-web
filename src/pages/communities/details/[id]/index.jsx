import SEO from "@components/seo";
import CommunityDetails from "@containers/community-details";
import CommunityIntro from "@containers/community-details/communityIntro";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import Wrapper from "@layout/wrapper";
import { wrapper } from "@redux/store";
import { communityDetails } from "@redux/slices/communities";

const Author = ({ community }) => (
    <Wrapper>
        <SEO pageTitle="Author" />
        <Header />
        <main id="main-content">
            <CommunityIntro community={community} />
            <CommunityDetails community={community} />
        </main>
        <Footer />
    </Wrapper>
);

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ query }) => {
            await store.dispatch(communityDetails(query?.id));
            const community = store.getState().community.community;
            console.log(community);
            const serializedError = store.getState().community.error;
            return {
                props: {
                    community,
                    error: serializedError,
                },
            };
        }
);
export default Author;