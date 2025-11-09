const COLLECTION_ID = "Maktaba-Mufti-Syed-Mukhtaruddin-Shah";
const IA_API_URL = `https://archive.org/details/${COLLECTION_ID}&output=json`;

export async function GET() {
  try {
    const response = await fetch(IA_API_URL, {
      next: { revalidate: 3600 } 
    });

    if (!response.ok) {
      return new Response(JSON.stringify({ message: 'Failed to fetch data from Internet Archive' }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await response.json();
    
    const archiveFiles = data.files || {};
    const bookList = [];
    let idCounter = 1;
    
    for (const fileName in archiveFiles) {
      if (fileName.endsWith('.pdf') && !fileName.includes('_meta.pdf') && !fileName.includes('_text.pdf')) {
        
        const rawTitle = fileName.replace('.pdf', '').replace(/-/g, ' '); 
        const bookTitle = rawTitle
          .replace('Imani Sifaat Vol 1', 'ایمانی صفات (جلد اول)')
          .replace('Islahi Majalis', 'اصلاحی مجالس')
          .replace('Raah i Mohabbat', 'راہ محبت')
          .replace('Zikrullah Kay Fazail Wa Masail', 'ذکر اللہ کے فضائل و مسائل')
          .replace(/_chocr|_text/g, '')
          .trim();

        bookList.push({
          id: idCounter++,
          title: bookTitle,
          author: "مفتی سید مختار الدین شاہ",
          price: "PKR TBD",
          desc: "تفصیل انٹرنیٹ آرکائیو سے دستیاب نہیں ہے۔",
          image: "/assets/book.avif",
          pdfLink: `https://archive.org/download/${COLLECTION_ID}/${fileName}`,
        });
      }
    }

    return new Response(JSON.stringify(bookList), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Server-side error fetching IA data:", error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}