// "use client";

// import { useSearchParams } from "next/navigation";
// import { Suspense } from "react";

// // Client-only content with Suspense boundary
// function PdfViewerContent() {
//   const searchParams = useSearchParams();
//   const book = searchParams.get("book") || "کتاب";
//   const price = searchParams.get("price") || "نامعلوم";

//   const pdfPath = "/assets/book.pdf";
//   const whatsappNumber = "+923001234567";

//   const BRAND_ACCENT_TEXT = 'text-brand-accent';
//   const BRAND_PRIMARY_TEXT = 'text-brand-primary-text';
//   const BRAND_BG = 'bg-brand-light-bg';
//   const BRAND_ACCENT = 'text-brand-accent';

//   return (
//     <div className={`h-screen ${BRAND_BG} flex flex-col`}>
//       {/* Title */}
//       <h1 className={`text-center text-sm sm:text-base md:text-lg font-bold ${BRAND_ACCENT} p-2 border-b border-brand-subtle-hover`}>
//         {book}
//       </h1>

//       {/* PDF Viewer - Full height, max 600px width */}
//       <div className="flex-1 overflow-hidden p-1 sm:p-2">
//         <div className="max-w-[600px] mx-auto h-full">
//           <iframe
//             src={`${pdfPath}#toolbar=0&navpanes=0&scrollbar=1&view=fitH`}
//             className="w-full h-full border-0 rounded-lg shadow-xl"
//             title={book}
//             allowFullScreen
//           />
//         </div>
//       </div>

//       {/* Bottom Buy Info */}
//       <div className="bg-white p-2 border-t border-brand-subtle-hover text-right text-s sm:text-sm">
//         <p className="text-gray-700">
//           خریدیں:{" "}
//           <a
//             href={`https://wa.me/${whatsappNumber}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 font-bold"
//           >
//             {whatsappNumber}
//           </a>
//         </p>
//         <p className={`font-bold ${BRAND_ACCENT}`}>قیمت: {price}</p>
//       </div>
//     </div>
//   );
// }

// // Main page with Suspense boundary to fix Next.js build error
// export default function PdfViewer() {
//   return (
//     <Suspense fallback={<div className="flex h-screen items-center justify-center">لوڈ ہو رہا ہے...</div>}>
//       <PdfViewerContent />
//     </Suspense>
//   );
// }




// app/pdf-viewer/page.jsx
"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

// Client-only content with Suspense boundary
function PdfViewerContent() {
    const searchParams = useSearchParams();
    
    const book = searchParams.get("book") || "کتاب";
    const price = searchParams.get("price") || "نامعلوم";
    const pdfPathFromUrl = searchParams.get("pdf");

    const pdfPath = pdfPathFromUrl || "/assets/error_message.pdf"; 
    const whatsappNumber = "+923001234567";

    const BRAND_ACCENT_TEXT = 'text-brand-accent';
    const BRAND_PRIMARY_TEXT = 'text-brand-primary-text';
    const BRAND_BG = 'bg-brand-light-bg';
    const BRAND_ACCENT = 'text-brand-accent';

    const whatsappMessage = `میں ${encodeURIComponent(book)} کتاب خریدنا چاہتا ہوں، قیمت ${encodeURIComponent(price)}۔`;

    return (
        <div className={`h-screen ${BRAND_BG} flex flex-col`}>
            {/* Title */}
            <h1 className={`text-center text-sm sm:text-base md:text-lg font-bold ${BRAND_ACCENT} p-2 border-b border-brand-subtle-hover`}>
                {book}
            </h1>

            {/* PDF Viewer - Full height, max 600px width */}
            <div className="flex-1 overflow-hidden p-1 sm:p-2">
                <div className="max-w-[600px] mx-auto h-full">
                    <iframe
                        // 🔥 Using the dynamically passed PDF link (IA URL) 🔥
                        src={`${pdfPath}#toolbar=0&navpanes=0&scrollbar=1&view=fitH`}
                        className="w-full h-full border-0 rounded-lg shadow-xl"
                        title={book}
                        allowFullScreen
                    />
                </div>
            </div>

            {/* Bottom Buy Info */}
            <div className="bg-white p-2 border-t border-brand-subtle-hover text-right text-s sm:text-sm">
                <p className="text-gray-700">
                    خریدیں:{" "}
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-bold"
                    >
                        {whatsappNumber}
                    </a>
                </p>
                <p className={`font-bold ${BRAND_ACCENT}`}>قیمت: {price}</p>
            </div>
        </div>
    );
}

// Main page with Suspense boundary
export default function PdfViewer() {
    return (
        <Suspense fallback={<div className="flex h-screen items-center justify-center text-xl font-bold">📖 لوڈ ہو رہا ہے...</div>}>
            <PdfViewerContent />
        </Suspense>
    );
}