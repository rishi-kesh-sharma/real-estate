import tw from "tailwind-styled-components";

const Card = tw.div`
 
 
 w-[310px]
 px-[1rem]
 py-[1rem]
 rounded-md
 flex
 flex-col
 justify-center
 items-center
 gap-[1rem]
 shadow
 transition-all
 t
 ${({ className }) => className}
`;
export default Card;
