import React, { useReducer } from "react";
import Head from "next/head";
// import styles from "../styles/Home.module.css";
import DropZone from "@/components/utils/Dropzone";
import { Container } from "@chakra-ui/react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_IN_DROP_ZONE":
      return { ...state, inDropZone: action.inDropZone };
    case "ADD_FILE_TO_LIST":
      console.log(action);
      return { ...state, fileList: state.fileList.concat(action.files) };
    default:
      return state;
  }
};

export default function Page5() {
  const [data, dispatch] = useReducer(reducer, {
    inDropZone: false,
    fileList: [],
  });

  return (
    <Container className={" flex flex-col"}>
      <h1 className={""}>Drop Your Property Images</h1>
      <DropZone data={data} dispatch={dispatch} />
    </Container>
  );
}

// reducer function to handle state changes

// destructuring state and dispatch, initializing fileList to empty array
