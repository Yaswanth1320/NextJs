'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import "../Styles/Users.css";

export default function Pagination({count}) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

    const page = searchParams.get("page") || 1;

    const params = new URLSearchParams(searchParams);
    const ITEM_PER_PAGE = 2;

    const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
    const hasNext =
      ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

    const handleChangePage = (type) => {
      type === "prev"
        ? params.set("page", parseInt(page) - 1)
        : params.set("page", parseInt(page) + 1);
      replace(`${pathname}?${params}`);
    };

  return (
    <div className="pagination">
      <button
        className="page-btn"
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        pervious
      </button>
      <button
        className="page-btn"
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        next
      </button>
    </div>
  );
}
