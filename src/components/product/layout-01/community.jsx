import Image from "@components/image/Image";
import PlaceBidModal from "@components/modals/placebid-modal";
import Anchor from "@ui/anchor";
import { ImageType } from "@utils/types";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useState } from "react";

const Product = ({
    overlay,
    name,
    budget,
    description,
    logo,
    placeBid,
    id,
    path = "/communities",
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
                <div>
                    <Anchor path={`${path}/${id}`}>
                        <Image
                            src={logo || "/images/portfolio/tayaba.png"}
                            alt={name}
                            ratio="6/4"
                            // height={533}
                            // width={533}
                        />
                    </Anchor>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <Anchor path={`${path}/${id}`}>
                        <span className="product-name mt-5">{name}</span>
                    </Anchor>
                    <p className="product-name mt-5">
                        {budget != "undefined" ? budget : "N/A"}
                    </p>
                </div>
                <span className="latest-bid">{description}</span>
            </div>
            <PlaceBidModal show={showBidModal} handleModal={handleBidModal} />
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
