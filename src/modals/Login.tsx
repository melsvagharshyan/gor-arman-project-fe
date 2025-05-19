import React, { useRef, useEffect, type FC } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../app/user/user.api";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: any) => void;
}

interface LoginFormValues {
  phoneNumber: string;
  password: string;
}

export const LoginModal: FC<Props> = ({ isOpen, onClose, onLoginSuccess }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const [handleLogin] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    if (isOpen) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isOpen]);

  const onSubmit = (data: LoginFormValues) => {
    handleLogin(data)
      .unwrap()
      .then((response) => {
        const { user } = response;

        const { password, ...safeUser } = user;

        localStorage.setItem("user", JSON.stringify(safeUser));
        onLoginSuccess(user);
        onClose();
      })
      .catch((error) => {
        console.error("Login failed", error);
      });
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-3"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 animate-fade-in"
      >
        <h2 className="text-2xl font-bold mb-8 font-sans bg-gradient-to-r from-cyan-500 via-cyan-950 to-cyan-500 text-transparent bg-clip-text">
          Login
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 text-sm md:text-base text-gray-700"
        >
          <div>
            <input
              {...register("phoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Only numbers are allowed",
                },
              })}
              type="tel"
              inputMode="numeric"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-cyan-600 hover:bg-cyan-700 text-sm md:text-lg py-3 text-white font-semibold bg-gradient-to-r from-cyan-200 to-cyan-500 rounded shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            Login
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-5 cursor-pointer w-full bg-cyan-600 hover:bg-cyan-700 text-sm md:text-lg py-3 text-white font-semibold bg-gradient-to-r from-cyan-200 to-cyan-500 rounded shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};
