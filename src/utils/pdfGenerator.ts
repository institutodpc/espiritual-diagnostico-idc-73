
import { SpiritualProfile, UserData } from "@/types";
import { jsPDF } from "jspdf";
import 'jspdf-autotable';

// Declare the autotable plugin for TypeScript
declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}

export const generateResultPDF = (userData: UserData, profile: SpiritualProfile) => {
  // Create a new PDF document
  const doc = new jsPDF();
  
  // Add title
  doc.setFillColor(128, 0, 128); // Purple background for header
  doc.rect(0, 0, 210, 20, 'F');
  doc.setTextColor(255, 255, 255); // White text
  doc.setFontSize(18);
  doc.text("Diagnóstico Espiritual - Resultado", 105, 12, { align: "center" });
  
  // Reset text color
  doc.setTextColor(0, 0, 0);
  
  // Add user info
  doc.setFontSize(12);
  doc.text(`Nome: ${userData.name}`, 14, 30);
  doc.text(`Data: ${new Date().toLocaleDateString('pt-BR')}`, 14, 38);
  
  // Add profile name
  doc.setFontSize(16);
  doc.setTextColor(128, 0, 128); // Purple text
  doc.text(`Seu Perfil Espiritual Dominante: ${profile.name}`, 105, 50, { align: "center" });
  
  // Add description
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0); // Reset text color
  
  // Handle long texts with line breaks
  const addWrappedText = (text: string, x: number, y: number, maxWidth: number = 180) => {
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y);
    return y + (lines.length * 7); // Return the new Y position
  };
  
  let yPosition = 60;
  
  // Add main description
  doc.setFontSize(12);
  yPosition = addWrappedText(profile.description, 14, yPosition) + 10;
  
  // Add formation section
  doc.setFontSize(14);
  doc.setTextColor(128, 0, 128); // Purple text
  doc.text("🧩 COMO ESSE PERFIL SE FORMA:", 14, yPosition);
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0); // Reset text color
  yPosition = addWrappedText(profile.formation, 14, yPosition + 10) + 10;
  
  // Add refuge section
  doc.setFontSize(14);
  doc.setTextColor(128, 0, 128); // Purple text
  doc.text("🏠 REFÚGIO QUE PROCURA:", 14, yPosition);
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0); // Reset text color
  yPosition = addWrappedText(profile.refuge, 14, yPosition + 10) + 10;
  
  // Check if we need a new page
  if (yPosition > 250) {
    doc.addPage();
    yPosition = 20;
  }
  
  // Add biblical character section
  doc.setFontSize(14);
  doc.setTextColor(128, 0, 128); // Purple text
  doc.text("📖 PERSONAGEM BÍBLICO QUE VIVEU ISSO:", 14, yPosition);
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0); // Reset text color
  yPosition = addWrappedText(profile.biblicalCharacter, 14, yPosition + 10) + 10;
  
  // Add transformation section
  doc.setFontSize(14);
  doc.setTextColor(128, 0, 128); // Purple text
  doc.text("✨ COMO DEUS O TRANSFORMOU:", 14, yPosition);
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0); // Reset text color
  yPosition = addWrappedText(profile.transformation, 14, yPosition + 10) + 10;
  
  // Check if we need a new page
  if (yPosition > 250) {
    doc.addPage();
    yPosition = 20;
  }
  
  // Add common pains section
  doc.setFontSize(14);
  doc.setTextColor(128, 0, 128); // Purple text
  doc.text("💔 DORES EM COMUM:", 14, yPosition);
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0); // Reset text color
  yPosition = addWrappedText(profile.commonPains, 14, yPosition + 10) + 10;
  
  // Add solutions section
  doc.setFontSize(14);
  doc.setTextColor(128, 0, 128); // Purple text
  doc.text("🔥 O QUE PRECISA FAZER PARA SAIR DESSE PERFIL:", 14, yPosition);
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0); // Reset text color
  yPosition = addWrappedText(profile.solutions, 14, yPosition + 10) + 10;
  
  // Add summary section
  if (yPosition > 250) {
    doc.addPage();
    yPosition = 20;
  }
  
  doc.setFontSize(14);
  doc.setTextColor(128, 0, 128); // Purple text
  doc.text("📝 RESUMO:", 14, yPosition);
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0); // Reset text color
  addWrappedText(profile.summary, 14, yPosition + 10);
  
  // Add footer
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(10);
    doc.setTextColor(128, 128, 128); // Gray text
    doc.text(`Diagnóstico Espiritual - Página ${i} de ${totalPages}`, 105, 285, { align: "center" });
  }
  
  // Save the PDF
  doc.save(`diagnostico-espiritual-${userData.name.split(' ')[0]}.pdf`);
};
