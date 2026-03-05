import fs from "fs";
import PDFDocument from "pdfkit";

const news = JSON.parse(fs.readFileSync("public/news.json"));

const doc = new PDFDocument();

doc.pipe(fs.createWriteStream("public/current-affairs.pdf"));

doc.fontSize(22).text("Daily Current Affairs Capsule", { align: "center" });
doc.moveDown();

doc.fontSize(12).text("UPSC • NDA • Defence Exam Preparation", { align: "center" });
doc.moveDown();

news.forEach((item, index) => {
doc.fontSize(14).text("${index + 1}. ${item.title}", { underline: true });
doc.moveDown(0.5);

doc.fontSize(12).text(item.summary);
doc.moveDown(0.5);

doc.fontSize(10).text("Source: ${item.source} | Category: ${item.category}");
doc.moveDown();
});

doc.end();
