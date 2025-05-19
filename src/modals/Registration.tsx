import React, { useRef, useEffect, type FC } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../app/user/user.api";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface FormValues {
  name: string;
  surname: string;
  phoneNumber: string;
  carModel: string;
  carWinCode: string;
  carYear: string;
  password: string;
  confirmPassword: string;
}

export const RegistrationModal: FC<Props> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const [handleRegister] = useRegisterMutation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const password = watch("password");

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

  const onSubmit = (data: FormValues) => {
    handleRegister(data)
      .unwrap()
      .then(() => {});
    onClose();
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-3"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-xl p-8 animate-fade-in"
      >
        <h2 className="text-2xl font-bold mb-8 font-sans bg-gradient-to-r from-cyan-500 via-cyan-950 to-cyan-500 text-transparent bg-clip-text">
          Register for Service
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 text-sm md:text-base text-gray-700"
        >
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}

          <input
            {...register("surname", { required: "Surname is required" })}
            placeholder="Surname"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          {errors.surname && (
            <p className="text-red-500 text-sm">{errors.surname.message}</p>
          )}

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
            <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
          )}

          <input
            {...register("carModel", { required: "Car model is required" })}
            placeholder="Car Model"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          {errors.carModel && (
            <p className="text-red-500 text-sm">{errors.carModel.message}</p>
          )}

          <input
            {...register("carWinCode", {
              required: "Car Win Code is required",
            })}
            placeholder="Car Win Code"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          {errors.carWinCode && (
            <p className="text-red-500 text-sm">{errors.carWinCode.message}</p>
          )}

          <select
            {...register("carYear", { required: "Car year is required" })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">Select Car Year</option>
            {years.map((year) => (
              <option key={year} value={String(year)}>
                {year}
              </option>
            ))}
          </select>
          {errors.carYear && (
            <p className="text-red-500 text-sm">{errors.carYear.message}</p>
          )}

          <input
            {...register("password", { required: "Password is required" })}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <input
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}

          <button
            type="submit"
            className="cursor-pointer w-full bg-cyan-600 hover:bg-cyan-700 text-sm md:text-lg py-3 text-white font-semibold bg-gradient-to-r from-cyan-200 to-cyan-500 rounded shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            Submit Registration
          </button>
        </form>

        <button
          onClick={onClose}
          className="mt-5 cursor-pointer w-full bg-cyan-600 hover:bg-cyan-700 text-sm md:text-lg py-3 text-white font-semibold bg-gradient-to-r from-cyan-200 to-cyan-500 rounded shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};
