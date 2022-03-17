import { useRouter } from "next/router";

const CustomLink = ({ href, children, showPointer = true, ...props }) => {
  const router = useRouter();

  return (
    <a
      className="custom-link"
      onClick={(e) => {
        e.preventDefault();
        router.push(href);
      }}
      href={href}
      style={showPointer ? { cursor: "pointer" } : {}}
      {...props}
    >
      {children}
    </a>
  );
};

export default CustomLink;
