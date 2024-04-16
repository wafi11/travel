const dataNav = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Category",
    href: "/category",
  },
];

export const Menu = () => {
  return (
    <div className="text-white md:flex gap-6 font-normal text-md hidden">
      {dataNav.map((item) => (
        <button
          key={item.title}
          className="hover:translate-y-2 duration-200 hover:text-gray-700">
          <a href={item.href}>{item.title}</a>
        </button>
      ))}
    </div>
  );
};
