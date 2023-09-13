import { useRouter } from "next/router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { StackLayout } from "~/components/layout";
import { feedbackToastState } from "~/components/stock/investment";

export default function InvestmentFeedback() {
  const router = useRouter();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    adjustTextAreaHeight();
  }, []);

  const adjustTextAreaHeight = () => {
    if (textAreaRef.current) {
      const textArea = textAreaRef.current;
      textArea.style.height = "auto";
      textArea.style.height = `${textArea.scrollHeight}px`;
    }
  };

  const handleInput = (event: FormEvent<HTMLTextAreaElement>) => {
    const inputValue = event.currentTarget.value;
    setFeedback(inputValue);
    adjustTextAreaHeight();
  };

  const handleFeedback = async () => {
    feedbackToastState.visible = true;
    router.back();
  };

  return (
    <StackLayout>
      <div className="flex flex-col p-5">
        <h1 className="text-xl font-bold text-neutral-300">
          투자 모아보기에서 더 알고 싶은 내용, 바라는 점이 있나요?
        </h1>
        <div className="mt-2 text-neutral-400">꼼꼼히 읽어보고 개선할게요.</div>
        <textarea
          ref={textAreaRef}
          onInput={handleInput}
          className="textarea mt-4 w-full resize-none overflow-hidden bg-neutral-800"
          placeholder="답변 적기"
          autoFocus
        ></textarea>
      </div>
      <div className="fixed bottom-0 z-50 flex w-full">
        <button
          className="btn btn-info btn-lg btn-block rounded-none"
          type="button"
          disabled={!feedback}
          onClick={handleFeedback}
        >
          다음
        </button>
      </div>
    </StackLayout>
  );
}
