export default function ModalLayout({ children, modal }) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
