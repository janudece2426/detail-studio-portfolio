import { AdminStudio } from "@/components/AdminStudio";
import { hasSanityConfig } from "@/sanity/client";

export const dynamic = "force-static";

export default function AdminPage() {
  if (!hasSanityConfig) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#0A0A09",
          color: "#F4ECDC",
          fontFamily:
            "Pretendard, Apple SD Gothic Neo, Malgun Gothic, system-ui, sans-serif",
          padding: "80px 24px",
        }}
      >
        <section style={{ margin: "0 auto", maxWidth: 760 }}>
          <p style={{ color: "#D8B76A", letterSpacing: "0.22em", fontSize: 12 }}>
            DETAIL STUDIO ADMIN
          </p>
          <h1 style={{ marginTop: 24, fontSize: 44, lineHeight: 1.15 }}>
            관리자 연결 준비가 필요합니다.
          </h1>
          <p style={{ marginTop: 24, color: "#BFB5A2", lineHeight: 1.8 }}>
            Sanity 프로젝트 ID와 dataset을 Vercel 환경변수에 넣으면 이 주소가
            포트폴리오 관리자 화면으로 바뀝니다.
          </p>
          <div
            style={{
              marginTop: 36,
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 8,
              padding: 24,
              background: "rgba(255,255,255,0.05)",
            }}
          >
            <p style={{ color: "#D8B76A", fontWeight: 700 }}>필요한 값</p>
            <pre style={{ marginTop: 16, whiteSpace: "pre-wrap", color: "#F4ECDC" }}>
              NEXT_PUBLIC_SANITY_PROJECT_ID{"\n"}
              NEXT_PUBLIC_SANITY_DATASET
            </pre>
          </div>
        </section>
      </main>
    );
  }

  return <AdminStudio />;
}
