import { useSession } from "next-auth/react";
import Image from "next/image";
import { formatNumber, getDiscountRate } from "~/utils/number";

export default function GroupShoppingRecommended() {
  const { data: session } = useSession();
  const items = [
    {
      name: "Sample Product 1",
      regularPrice: 10000,
      discountPrice: 9000,
      viewers: 1234,
      imageUrl: "https://picsum.photos/100?random=1",
    },
    {
      name: "Sample Product 2",
      regularPrice: 12000,
      discountPrice: 9500,
      viewers: 2345,
      imageUrl: "https://picsum.photos/100?random=2",
    },
    {
      name: "Sample Product 3",
      regularPrice: 8000,
      discountPrice: 7000,
      viewers: 3456,
      imageUrl: "https://picsum.photos/100?random=3",
    },
    {
      name: "Sample Product 4",
      regularPrice: 15000,
      discountPrice: 12000,
      viewers: 4567,
      imageUrl: "https://picsum.photos/100?random=4",
    },
    {
      name: "Sample Product 5",
      regularPrice: 11000,
      discountPrice: 10000,
      viewers: 5678,
      imageUrl: "https://picsum.photos/100?random=5",
    },
  ];

  return (
    <div className="mt-4 flex flex-col">
      <div className="px-6">
        <h2 className="text-xl font-medium text-neutral-200">{`${session?.user.name}님을 위한 추천`}</h2>
        <div className="mt-4 grid grid-cols-2 gap-x-2 gap-y-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {items.map((product) => (
            <div key={product.name} className="overflow-hidden">
              <Image
                src={product.imageUrl}
                alt={product.name}
                className="rounded-box max-h-48 w-full"
                width={100}
                height={100}
              />
              <div className="flex flex-col gap-1 p-2">
                <div className="flex gap-1 font-medium">
                  <span className="text-error">
                    {getDiscountRate(
                      product.regularPrice,
                      product.discountPrice,
                    )}
                  </span>
                  <span>{`${formatNumber(product.discountPrice)}원`}</span>
                </div>
                <span className="text-sm">{product.name}</span>
                <span className="text-sm text-neutral-400">{`${product.viewers.toLocaleString()}명 구경중`}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="divider mb-0"></div>
      <div className="btn btn-block btn-ghost py-2">상품 더 보기</div>
    </div>
  );
}
