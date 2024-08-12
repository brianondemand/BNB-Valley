import React from "react";
import ImageGallery from "@/app/listings/[listingId]/_components/ImageGallery";
import Heading from "@/components/Heading";
import HeartButton from "@/components/HeartButton";
import { getFavorites } from "@/services/favorite";

interface ListingHeadProps {
  title: string;
  country: string | null;
  region: string | null;
  image: string;
  id: string;
}

const ListingHead: React.FC<ListingHeadProps> = async ({
  title,
  country = "",
  region = "",
  image,
  id,
}) => {
  const favorites = await getFavorites();
  const hasFavorited = favorites.includes(id);

  return (
    <>
      <Heading title={title} subtitle={`${region}, ${country}`} backBtn />
          <HeartButton listingId={id} hasFavorited={hasFavorited} />
      <div
        className={`w-full md:h-[450px] sm:h-[300px] bg-gray-100 h-[260px] overflow-hidden rounded-xl relative transition duration-300`}
      >
        <ImageGallery
          title={title}
          image={image}
          id={id}
        />
      </div>
    </>
  );
};

export default ListingHead;
