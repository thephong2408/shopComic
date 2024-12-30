import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Layout1({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
