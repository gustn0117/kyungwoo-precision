import PageHeader from "@/components/PageHeader";
import AboutTabs from "@/components/AboutTabs";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="경우정밀 회사소개"
        desc="1993년 설립부터 30년, 정밀가공 한 분야에 매진해 온 경우정밀의 이야기."
        bg="/factory/exterior.jpg"
        breadcrumbs={[{ label: "회사소개" }]}
      />
      <AboutTabs />
      {children}
    </>
  );
}
