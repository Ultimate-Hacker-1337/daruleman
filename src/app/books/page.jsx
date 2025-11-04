"use client";

import { ShoppingCart, FileDown } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

// ✅ Using image from /public/assets/book.avif
const bookImgPath = "/assets/book.avif";

export default function Books() {
  const books = [
    {
      id: 1,
      title: "اصلاحی مجالس",
      author: "مفتی سید مختار الدین شاہ",
      year: "2015",
      publisher: "مکتبہ تحریک ایمان و تقویٰ",
      price: "PKR 750.00",
      desc: "روحانی بیداری اور خود اصلاحی پر ان کے خطبات کا مجموعہ۔",
      image: bookImgPath,
    },
    {
      id: 2,
      title: "ایمانی صفات (جلد اول)",
      author: "مفتی سید مختار الدین شاہ",
      year: "2018",
      publisher: "مکتبہ تحریک ایمان و تقویٰ",
      price: "PKR 800.00",
      desc: "ایمان کی خصوصیات کو تفصیل سے بیان کرنے والی ایک کتاب۔",
      image: bookImgPath,
    },
    {
      id: 3,
      title: "راہ محبت",
      author: "مفتی سید مختار الدین شاہ",
      year: "2010",
      publisher: "مکتبہ تحریک ایمان و تقویٰ",
      price: "PKR 500.00",
      desc: "محبت اور عقیدت کے صوفیانہ راستے پر ایک پراثر متن۔",
      image: bookImgPath,
    },
    {
      id: 4,
      title: "ذکر اللہ کے فضائل و مسائل",
      author: "مفتی سید مختار الدین شاہ",
      year: "2012",
      publisher: "مکتبہ تحریک ایمان و تقویٰ",
      price: "PKR 600.00",
      desc: "ذکر کی مشق و فضیلت کی تفصیلی کتاب۔",
      image: bookImgPath,
    },
  ];

  return (
    <div className="bg-brand-light-bg min-h-screen py-16 px-4 sm:px-6 lg:px-12">
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h3 className="text-3xl md:text-4xl font-extrabold text-brand-primary-text relative inline-block">
          کتابیں
          <span className="absolute -bottom-2 start-1/2 -translate-x-1/2 w-24 h-1 bg-brand-accent rounded-full"></span>
        </h3>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {books.map((book, idx) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="bg-white rounded-2xl shadow hover:shadow-lg border border-brand-subtle-hover p-6 flex flex-col md:flex-row gap-6"
          >
            {/* Book Image */}
            <div className="w-full md:w-1/3 flex justify-center flex-shrink-0">
              <Image
                src={book.image}
                alt={book.title}
                width={160}
                height={220}
                className="object-cover rounded-lg border border-gray-300"
              />
            </div>

            {/* Book Info */}
            <div className="flex-1 text-right">
              <h3 className="text-xl font-bold text-brand-accent mb-1">
                {book.title}
              </h3>
              <p className="text-sm text-gray-600 mb-1">مصنف: {book.author}</p>
              <p className="text-sm text-gray-600 mb-1">سال: {book.year}</p>
              <p className="text-sm text-gray-600 mb-1">
                ناشر: {book.publisher}
              </p>
              <p className="text-sm text-gray-700 font-semibold mb-2">
                قیمت: {book.price}
              </p>
              <p className="text-gray-700 text-sm mb-4">{book.desc}</p>

              {/* Action Buttons */}
              <div className="flex gap-3 justify-start">
                <button className="flex items-center gap-1 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow hover:bg-green-700">
                  <ShoppingCart size={16} /> خریدیں
                </button>
                <button className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow hover:bg-blue-700">
                  <FileDown size={16} /> پی ڈی ایف ڈاؤن لوڈ
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}