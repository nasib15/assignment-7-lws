import Navbar from "@/components/Navbar";

export const metadata = {
  title: "LWS Xstream - Video Streaming",
  description: "This is an video streaming platform where you can watch videos",
};

export default function LangLayout({ children, params: { lang }, modal }) {
  return (
    <>
      {modal}
      <Navbar lang={lang} />
      {children}
    </>
  );
}
