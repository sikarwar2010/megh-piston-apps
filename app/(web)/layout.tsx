import Footer from "@/components/navigation/footer";
import Header from "@/components/navigation/header";
import TopBar from "@/components/navigation/topbar";

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>
        <TopBar />
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  );
}
