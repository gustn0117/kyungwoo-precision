"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

type FormState = {
  name: string; company: string; phone: string; email: string;
  category: string; subject: string; message: string; agree: boolean;
};

export default function InquiryForm() {
  const [f, setF] = useState<FormState>({
    name: "", company: "", phone: "", email: "",
    category: "정밀 가공 견적", subject: "", message: "", agree: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const handle = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const v = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
    setF((p) => ({ ...p, [k]: v as never }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    if (!f.name || !f.phone || !f.message) {
      setErr("성함, 연락처, 문의 내용은 필수 입력입니다.");
      return;
    }
    if (!f.agree) {
      setErr("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }
    setSubmitting(true);

    const subject = encodeURIComponent(`[홈페이지 문의] ${f.category} - ${f.subject || f.name}`);
    const body = encodeURIComponent(
      `■ 분류: ${f.category}\n` +
      `■ 성함: ${f.name}\n` +
      `■ 회사: ${f.company || "-"}\n` +
      `■ 연락처: ${f.phone}\n` +
      `■ 이메일: ${f.email || "-"}\n` +
      `■ 제목: ${f.subject || "-"}\n` +
      `\n${f.message}\n`
    );

    setTimeout(() => {
      window.location.href = `mailto:${SITE.contact.email}?subject=${subject}&body=${body}`;
      setSubmitting(false);
      setDone(true);
    }, 500);
  };

  if (done) {
    return (
      <div className="card p-10 text-center">
        <div className="mx-auto grid place-items-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-bold text-ink">메일 클라이언트가 열렸습니다</h3>
        <p className="mt-2 text-sm text-ink-muted">
          메일 발송 후, 빠른 시일 내에 담당자가 연락드리겠습니다.
          <br />
          급하신 경우 <a href={`tel:${SITE.contact.phone}`} className="text-brand font-semibold">{SITE.contact.phone}</a>으로 전화 주세요.
        </p>
        <button
          onClick={() => { setDone(false); setF({ name: "", company: "", phone: "", email: "", category: "정밀 가공 견적", subject: "", message: "", agree: false }); }}
          className="mt-6 btn-outline"
        >
          새 문의 작성
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="성함" required>
          <input value={f.name} onChange={handle("name")} className="input" placeholder="홍길동" />
        </Field>
        <Field label="회사명">
          <input value={f.company} onChange={handle("company")} className="input" placeholder="(선택)" />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="연락처" required>
          <input type="tel" value={f.phone} onChange={handle("phone")} className="input" placeholder="010-0000-0000" />
        </Field>
        <Field label="이메일">
          <input type="email" value={f.email} onChange={handle("email")} className="input" placeholder="(선택) you@example.com" />
        </Field>
      </div>

      <Field label="문의 분류">
        <select value={f.category} onChange={handle("category")} className="input">
          <option>정밀 가공 견적</option>
          <option>자동차 지그 표준품 문의</option>
          <option>샤프트 / 환봉 가공 문의</option>
          <option>다웰핀 / 로케이션핀 문의</option>
          <option>제관물 / 브라켓트 문의</option>
          <option>기타 일반 문의</option>
        </select>
      </Field>

      <Field label="제목">
        <input value={f.subject} onChange={handle("subject")} className="input" placeholder="(선택) 문의 제목" />
      </Field>

      <Field label="문의 내용" required>
        <textarea
          value={f.message}
          onChange={handle("message")}
          rows={7}
          className="input resize-y"
          placeholder="가공 부품 종류, 수량, 납기 희망일, 첨부 도면 유무 등을 자유롭게 작성해주세요."
        />
      </Field>

      <label className="flex items-start gap-2.5 cursor-pointer text-sm text-ink-soft">
        <input
          type="checkbox"
          checked={f.agree}
          onChange={handle("agree")}
          className="mt-0.5 w-4 h-4 accent-brand"
        />
        <span>
          개인정보 수집·이용에 동의합니다. 수집된 정보는 문의 답변 목적으로만 사용되며,
          답변 완료 후 즉시 파기됩니다.
        </span>
      </label>

      {err && (
        <div className="rounded-lg bg-red-50 text-red-700 text-sm px-4 py-3 border border-red-100">
          {err}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          disabled={submitting}
          className="btn-primary flex-1 justify-center disabled:opacity-60"
        >
          {submitting ? "처리 중..." : "문의 보내기"}
        </button>
        <a
          href={`tel:${SITE.contact.phone}`}
          className="btn-outline flex-1 justify-center"
        >
          전화 상담 ({SITE.contact.phone})
        </a>
      </div>

      <p className="text-xs text-ink-muted">
        ※ 도면 등 첨부파일이 필요하신 경우, 하단 이메일 또는 카카오톡으로 직접 보내주세요.
      </p>
    </form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-ink">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
