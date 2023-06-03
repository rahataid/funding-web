import Anchor from "@ui/anchor";
import { ImageType } from "@utils/types";
import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";
import { useState } from "react";

const Product = ({
    overlay,
    name,
    country,
    totalDonationsUsd,
    category,
    location,
    establishedDate,
    published_at,
    auction_date,
    placeBid,
    id,
    path = "/communities/details",
}) => {
    const [showBidModal, setShowBidModal] = useState(false);
    const handleBidModal = () => {
        setShowBidModal((prev) => !prev);
    };
    return (
        <>
            <div
                className={clsx(
                    "product-style-one",
                    !overlay && "no-overlay",
                    placeBid && "with-placeBid"
                )}
            >
                <div className="card-thumbnail">
                    <Anchor path={`${path}/${id}`}>
                        <Image
                            src={"/images/portfolio/tayaba.png"}
                            alt={"NFT_portfolio"}
                            width={533}
                            height={533}
                        />
                    </Anchor>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <Anchor path={`${path}/${id}`}>
                        <div className="pill">Category</div>
                        <span className="product-name mt-2">{name || 'Community Name'}</span>
                    </Anchor>
                </div>
                <div className="latest-bid">
                    <span>
                        <Image
                            style={{ marginRight: '6px' }}
                            src={'/images/map.png'}
                            width={24}
                            height={24}
                        />
                        {country}
                    </span>
                    <span>
                        <Image
                            src={'/images/budget.png'}
                            width={24}
                            height={24}
                            style={{ marginRight: '6px' }}
                        />
                        {totalDonationsUsd}
                    </span>
                </div>
            </div>
        </>
    );
};

Product.propTypes = {
    overlay: PropTypes.bool,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    latestBid: PropTypes.string.isRequired,
    price: PropTypes.shape({
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,
    likeCount: PropTypes.number.isRequired,
    auction_date: PropTypes.string,
    image: ImageType.isRequired,
    authors: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
            image: ImageType.isRequired,
        })
    ),
    bitCount: PropTypes.number,
    placeBid: PropTypes.bool,
    disableShareDropdown: PropTypes.bool,
    id: PropTypes.number,
};

Product.defaultProps = {
    overlay: false,
};

export default Product;
