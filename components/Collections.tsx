import { getCollections } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically import react-slick to ensure SSR compatibility
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Collections = async () => {
  const collections = await getCollections();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">Collections</p>
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold">No collections found</p>
      ) : (
        <Slider {...settings} className="w-full">
          {collections.map((collection: CollectionType) => (
            <div key={collection._id} className="flex justify-center">
              <Link href={`/collections/${collection._id}`}>
                <Image
                  src={collection.image}
                  alt={collection.title}
                  width={350}
                  height={200}
                  className="rounded-lg cursor-pointer"
                />
              </Link>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Collections;


