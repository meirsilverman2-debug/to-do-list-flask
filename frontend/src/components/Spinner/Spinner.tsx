import { Loader } from '@mantine/core';
import "./spinner.css";

export default function Spinner() {
  return <Loader color="rgba(146, 102, 242, 1)" size="lg" type="dots" />;
}