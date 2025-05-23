
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface PasswordResetPopupProps {
  children: React.ReactNode;
}

const PasswordResetPopup = ({ children }: PasswordResetPopupProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log("Form submitted:", formData);
    setOpen(false); // 비밀번호 변경 버튼 클릭 시 팝업 닫기
  };

  const handleClose = () => {
    setOpen(false); // X 버튼 클릭 시 팝업 닫기
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-[671px] p-0 border border-zinc-400 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        <section className="flex overflow-hidden flex-col items-center pt-5 pr-20 pb-32 pl-5 text-base leading-none text-gray-900 bg-white max-md:pr-5 max-md:pb-24">
          <button 
            onClick={handleClose}
            className="self-start" 
            aria-label="Close"
          >
            <X className="w-[31px] h-[31px] text-gray-900" />
          </button>

          <h1 className="mt-12 ml-16 text-3xl font-semibold tracking-tighter leading-none text-center text-neutral-800 max-md:mt-10">
            비밀번호 재설정
          </h1>

          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
            <div className="mt-12 ml-16 max-w-full tracking-normal whitespace-nowrap bg-white rounded-lg border-2 border-solid border-zinc-400 w-[400px] max-md:mt-10">
              <div className="px-3 py-2 -ml-0.5 bg-white rounded-lg border-2 border-solid border-zinc-400 max-md:pr-5">
                ID
              </div>
            </div>

            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              value={formData.password}
              onChange={handleChange}
              className="py-2 pr-3 pl-3.5 mt-4 ml-16 max-w-full tracking-normal whitespace-nowrap bg-white rounded-lg border-2 border-solid border-zinc-400 w-[400px] max-md:pr-5"
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="비밀번호 확인"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="px-3 py-2 mt-4 ml-16 max-w-full tracking-normal bg-white rounded-lg border-2 border-solid border-zinc-400 w-[400px] max-md:pr-5"
            />

            <button
              type="submit"
              className="px-16 pt-2 pb-3.5 mt-8 ml-16 max-w-full font-medium leading-5 text-black bg-sky-500 rounded-lg w-[400px] hover:bg-sky-600 transition-colors max-md:px-5"
            >
              비밀번호 변경
            </button>
          </form>
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default PasswordResetPopup;
