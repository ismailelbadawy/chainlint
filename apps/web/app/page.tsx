import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
        <div className="grid">
          <p>Ismail is Learning Tailwind</p>
        </div>
        <div className="grid">
          <p>Now let's dive into shadcn/ui</p>
          <Button appName="AI Contract Analysis" className="btn">Click me</Button>
        </div>
    </div>
  );
}
