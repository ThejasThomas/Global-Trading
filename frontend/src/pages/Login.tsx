"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Mail, Lock, CheckCircle, AlertCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/auth/authservice";

interface LoginStatus {
  type: "success" | "error" | null;
  message: string;
}

const Login = () => {
  const [loginStatus, setLoginStatus] = useState<LoginStatus>({
    type: null,
    message: "",
  });
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        console.log("Login data:", values);

        const res = await login({ ...values, loginType: "user" });
        const { data } = res;
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");

        setLoginStatus({
          type: "success",
          message: "Login successful! Redirecting...",
        });

        setTimeout(() => {
          navigate('/');
        }, 1500);
      } catch (err: any) {
        setLoginStatus({
          type: "error",
          message:
            err?.response?.data?.message || "Login failed. Please try again.",
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 p-5 relative overflow-hidden">
      {/* Background gradient overlay */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(30px, -30px); }
          50% { transform: translate(0, -60px); }
          75% { transform: translate(-30px, -30px); }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
      `}</style>
      <div className="absolute top-[-50%] right-[-50%] w-[800px] h-[800px] rounded-full bg-white/10 blur-[80px] animate-float z-0"></div>

      <div className="grid grid-cols-1 gap-10 max-w-md w-full z-10 items-center">
        {/* Form Container */}
        <div className="bg-white/95 backdrop-blur-[10px] rounded-3xl p-[50px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-white/30">
          <div className="w-full">
            {/* Header */}
            <div className="text-center mb-[45px]">
              <div className="flex justify-center mb-5">
                <div className="w-[60px] h-[60px] rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center font-bold text-2xl text-white shadow-[0_10px_25px_rgba(102,126,234,0.4)]">
                  TC
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                Welcome Back
              </h1>
              <p className="text-sm text-gray-600">
                Sign in to TapClone Technologies
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-5 mb-[25px]"
            >
              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 font-semibold text-sm text-gray-800 uppercase tracking-wider"
                >
                  <Mail size={18} className="text-purple-600" />
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  className={`px-4 py-3.5 border-2 rounded-xl text-base transition-all bg-gray-50 text-gray-900 placeholder-gray-600 focus:outline-none focus:border-purple-600 focus:bg-white focus:ring-4 focus:ring-purple-100 ${formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-200"}`}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-sm text-red-500 font-medium">
                    {formik.errors.email}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="flex items-center gap-2 font-semibold text-sm text-gray-800 uppercase tracking-wider"
                >
                  <Lock size={18} className="text-purple-600" />
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className={`px-4 py-3.5 border-2 rounded-xl text-base transition-all bg-gray-50 text-gray-900 placeholder-gray-600 focus:outline-none focus:border-purple-600 focus:bg-white focus:ring-4 focus:ring-purple-100 ${formik.touched.password && formik.errors.password ? "border-red-500" : "border-gray-200"}`}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="text-sm text-red-500 font-medium">
                    {formik.errors.password}
                  </p>
                )}
              </div>

              {/* Status Messages */}
              {loginStatus.type === "error" && (
                <style>{`
                  @keyframes slideIn {
                    from {
                      opacity: 0;
                      transform: translateY(-10px);
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                  .animate-slideIn {
                    animation: slideIn 0.3s ease;
                  }
                `}</style>
              )}
              {loginStatus.type === "error" && (
                <div className="flex items-center gap-3 p-3 rounded-xl text-sm font-medium bg-red-50 text-red-900 border border-red-300 animate-slideIn">
                  <AlertCircle size={18} />
                  <span>{loginStatus.message}</span>
                </div>
              )}
              {loginStatus.type === "success" && (
                <div className="flex items-center gap-3 p-3 rounded-xl text-sm font-medium bg-green-50 text-green-700 border border-green-300 animate-slideIn">
                  <CheckCircle size={18} />
                  <span>{loginStatus.message}</span>
                </div>
              )}

              {/* Login Button */}
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="px-8 py-3.5 bg-gradient-to-br from-purple-500 to-purple-700 text-white border-0 rounded-xl text-base font-semibold cursor-pointer transition-all shadow-[0_10px_25px_rgba(102,126,234,0.4)] flex items-center justify-center gap-2.5 uppercase tracking-wider hover:enabled:-translate-y-0.5 hover:enabled:shadow-[0_15px_35px_rgba(102,126,234,0.5)] active:enabled:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed mt-3"
              >
                {formik.isSubmitting ? (
                  <>
                    <span className="inline-block w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Logging in...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            {/* Sign Up Link */}
            <p className="text-center text-gray-600 text-sm mb-0">
              Don&apos;t have an account?{" "}
              <Link
                to="/register"
                className="text-purple-600 no-underline font-semibold transition-all relative hover:text-purple-700 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-500 after:to-purple-700 after:transition-all hover:after:w-full"
              >
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
