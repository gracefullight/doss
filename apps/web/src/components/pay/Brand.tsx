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
    <div className="flex flex-col bg-neutral-800 pt-6 pb-4">
      <div className="flex flex-col px-6 pb-4">
        <h2 className="font-medium text-neutral-200 text-xl">
          도스페이 인기 브랜드
        </h2>
        <ul className="mt-8 flex flex-col gap-6">
          {brands.map((item, index) => (
            <li key={item.name} className="flex items-center space-x-3">
              <span className="px-2 font-medium text-info">{index + 1}</span>
              <div className="placeholder avatar">
                <div className="w-10 rounded-full bg-neutral-focus text-neutral-content">
                  <span>1</span>
                </div>
              </div>
              <span className="font-medium text-lg text-neutral-300">
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="divider my-0" />
      <button
        className="btn-ghost btn-block btn-lg btn font-medium text-neutral-400"
        type="button"
      >
        더 보기
      </button>
    </div>
  );
}
