import { useRouter } from "next/router";

const CustomLink = ({ href, children, showPointer = true, ...props }) => {
  const router = useRouter();

  return (
    <div
      className="custom-link"
      onClick={() => {
        router.push(href);
      }}
      style={showPointer ? { cursor: "pointer" } : {}}
      {...props}
    >
      {children}
    </div>
  );
};

export default CustomLink;
