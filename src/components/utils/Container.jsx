import tw from "tailwind-styled-components";

const Container = tw.div`
h-auto
w-[90%]
mx-auto
${({ className }) => className}
`;

export default Container;
