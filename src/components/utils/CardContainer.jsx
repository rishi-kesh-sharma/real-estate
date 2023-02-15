import tw from "tailwind-styled-components";

const CardContainer = tw.div`
    
    flex
    flex-wrap
    gap-[1rem]
    flex-row 
    flex-wrap
    items-center 
    justify-center 
    px-[1rem] 
    py-[1rem]
    my-[1rem]
    mx-[1rem]

${({ className }) => className}
`;
export default CardContainer;
