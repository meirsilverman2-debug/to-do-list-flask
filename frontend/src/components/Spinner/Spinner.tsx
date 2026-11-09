import { Loader } from '@mantine/core';
import "./spinner.css";

export default function Spinner() {
  return <div className='loader-display-section'><div className="lodding-todo-spinner"><Loader color="rgba(146, 102, 242, 1)" size="lg" type="dots" /><h2 className='loader-header'>Loading</h2></div></div> ;
}