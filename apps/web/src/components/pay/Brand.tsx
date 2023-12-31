export default function Brand() {
  const brands = [
    {
      image: "",
      name: "우리가 어떤 민족",
    },
    {
      image: "",
      name: "신사 스토어",
    },
    {
      image: "",
      name: "미라클큐브",
    },
    {
      image: "",
      name: "저긴어때",
    },
    {
      image: "",
      name: "저기요",
    },
  ];

  return (
    <div className="flex flex-col bg-neutral-800 pb-4 pt-6">
      <div className="flex flex-col px-6 pb-4">
        <h2 className="text-xl font-medium text-neutral-200">
          도스페이 인기 브랜드
        </h2>
        <ul className="mt-8 flex flex-col gap-6">
          {brands.map((item, index) => (
            <li key={index} className="flex items-center space-x-3">
              <span className="text-info px-2 font-medium">{index + 1}</span>
              <div className="placeholder avatar">
                <div className="bg-neutral-focus text-neutral-content w-10 rounded-full">
                  <span>1</span>
                </div>
              </div>
              <span className="text-lg font-medium text-neutral-300">
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="divider my-0"></div>
      <button
        className="btn-ghost btn-block btn-lg btn font-medium text-neutral-400"
        type="button"
      >
        더 보기
      </button>
    </div>
  );
}
