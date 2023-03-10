import Link from "next/link";

const BreadcrumbItem = ({ children, href, isCurrent, ...props }) => {
  return (
    <li {...props}>
      <Link
        href={href}
        passHref
        className={isCurrent && "text-blue-500"}
        aria-current={isCurrent ? "page" : "false"}>
        {children}
      </Link>
    </li>
  );
};

export default BreadcrumbItem;
