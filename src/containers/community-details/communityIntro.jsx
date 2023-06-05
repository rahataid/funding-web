import ShareModal from "@components/modals/share-modal";
import { ASSET_VIEW } from "@config";
import { ImageType } from "@utils/types";
import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";
import { useState } from "react";

const AuthorIntroArea = ({ className, space, community }) => {
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const shareModalHandler = () => setIsShareModalOpen((prev) => !prev);

    const coverImage = community.cover
        ? `${ASSET_VIEW}/${community?.walletAddress}/${community?.cover}`
        : "/images/bg/bg-img.jpg";

    return (
        <>
            <ShareModal
                show={isShareModalOpen}
                handleModal={shareModalHandler}
            />
            <div className="rn-author-bg-area position-relative ptb--150">
                <Image
                    src={coverImage}
                    alt="Slider BG"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                />
            </div>
            <div
                className={clsx(
                    "rn-author-area",
                    space === 1 && "mb--30 mt_dec--120",
                    className
                )}
            >
                <div className="container">
                    <div className="row padding-tb-50 align-items-center d-flex">
                        <div className="col-lg-12">
                            <div className="author-wrapper">
                                <div className="author-inner">
                                    <div className="user-thumbnail">
                                        <Image
                                            src={
                                                community?.logo ||
                                                "/images/portfolio/rahat.jpeg"
                                            }
                                            width={140}
                                            height={140}
                                        />
                                    </div>
                                    <div className="rn-author-info-content">
                                        <h4 className="title">
                                            {community?.name
                                                ? community.name
                                                : "Community Name"}
                                        </h4>
                                        {/* {community?.walletAddress} */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

AuthorIntroArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
    data: PropTypes.shape({
        name: PropTypes.string,
        twitter: PropTypes.string,
        image: ImageType,
    }),
};
AuthorIntroArea.defaultProps = {
    space: 1,
};

export default AuthorIntroArea;
