export default function HeaderIcon({ Icon,active }) {
  return (
    <div className="flex items-center rounded-xl cursor-pointer md:py-4 md:px-8 group md:hover:bg-gray-100">
      <Icon className={` h-4 lg:h-6 md:h-6 text-gray-500 group-hover:text-blue-500 ${active && "text-blue-500  border-blue-500"}`} />
    </div>
  );
}
