
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
  
  // Set document properties
  doc.setProperties({
    title: 'Diagnóstico Espiritual - ' + userData.name,
    subject: 'Perfil: ' + profile.name,
    author: 'Diagnóstico Espiritual IDC',
    creator: 'Diagnóstico Espiritual'
  });
  
  // Define margins
  const margin = 15;
  const pageWidth = doc.internal.pageSize.width;
  const contentWidth = pageWidth - (margin * 2);
  
  // Add header
  doc.setFillColor(103, 58, 183); // A more muted purple
  doc.rect(0, 0, pageWidth, 30, 'F');
  
  // Add ornamental design element
  doc.setFillColor(156, 39, 176); // Secondary purple
  doc.circle(pageWidth - 20, 15, 8, 'F');
  doc.setFillColor(233, 30, 99); // Pink accent
  doc.circle(pageWidth - 30, 20, 5, 'F');
  
  // Add title
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text("Diagnóstico Espiritual", margin, 17);
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text("Resultados Personalizados", margin, 24);
  
  // Add user info section
  doc.setDrawColor(220, 220, 220);
  doc.setFillColor(248, 248, 255); // Very light purple/lavender
  doc.roundedRect(margin, 40, contentWidth, 30, 3, 3, 'FD');
  
  doc.setTextColor(103, 58, 183);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text("Informações Pessoais:", margin + 5, 50);
  
  doc.setTextColor(60, 60, 60);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`Nome: ${userData.name}`, margin + 5, 58);
  doc.text(`Data: ${new Date().toLocaleDateString('pt-BR')}`, margin + 5, 65);
  
  // Add profile section header
  let yPos = 85;
  
  doc.setTextColor(103, 58, 183);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text(`Seu Perfil Espiritual: ${profile.name}`, pageWidth/2, yPos, { align: "center" });
  
  // Add decorative line
  yPos += 5;
  doc.setDrawColor(233, 30, 99); // Pink accent
  doc.setLineWidth(0.5);
  doc.line(pageWidth/2 - 50, yPos, pageWidth/2 + 50, yPos);
  
  // Add description
  yPos += 15;
  doc.setTextColor(60, 60, 60);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  // Handle long texts with line breaks and better spacing
  const addSectionText = (title, text, icon, yPosition) => {
    // Add section title with icon
    doc.setTextColor(103, 58, 183);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(`${icon} ${title}`, margin, yPosition);
    
    // Add section content
    doc.setTextColor(60, 60, 60);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    
    // Split text into lines that fit within content width
    const lines = doc.splitTextToSize(text, contentWidth);
    doc.text(lines, margin, yPosition + 7);
    
    // Return new Y position after this section
    return yPosition + 7 + (lines.length * 4.5) + 10;
  };
  
  // First add profile description
  const descriptionLines = doc.splitTextToSize(profile.description, contentWidth);
  doc.text(descriptionLines, margin, yPos);
  
  yPos += (descriptionLines.length * 4.5) + 15;
  
  // Create light purple background for each section
  const addSectionWithBackground = (title, text, icon, yPosition) => {
    // Calculate height needed for text
    const lines = doc.splitTextToSize(text, contentWidth - 10);
    const textHeight = lines.length * 4.5 + 15; // Text height plus padding
    
    // Check if we need a new page
    if (yPosition + textHeight > 270) {
      doc.addPage();
      yPosition = 20;
    }
    
    // Add background
    doc.setDrawColor(220, 220, 220);
    doc.setFillColor(248, 248, 255);
    doc.roundedRect(margin - 5, yPosition - 5, contentWidth + 10, textHeight, 3, 3, 'FD');
    
    // Add content
    return addSectionText(title, text, icon, yPosition);
  };
  
  // Add all sections with improved formatting
  yPos = addSectionWithBackground("COMO ESSE PERFIL SE FORMA", profile.formation, "🧩", yPos);
  yPos = addSectionWithBackground("REFÚGIO QUE PROCURA", profile.refuge, "🏠", yPos);
  yPos = addSectionWithBackground("PERSONAGEM BÍBLICO QUE VIVEU ISSO", profile.biblicalCharacter, "📖", yPos);
  yPos = addSectionWithBackground("COMO DEUS O TRANSFORMOU", profile.transformation, "✨", yPos);
  yPos = addSectionWithBackground("DORES EM COMUM", profile.commonPains, "💔", yPos);
  yPos = addSectionWithBackground("O QUE PRECISA FAZER PARA SAIR DESSE PERFIL", profile.solutions, "🔥", yPos);
  yPos = addSectionWithBackground("RESUMO", profile.summary, "📝", yPos);
  
  // Add footer to all pages
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    
    // Add page number
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(`Página ${i} de ${totalPages}`, pageWidth - margin, 290, { align: "right" });
    
    // Add footer graphic
    if (i === totalPages) {
      doc.setDrawColor(103, 58, 183); // Purple
      doc.setLineWidth(0.5);
      doc.line(margin, 280, pageWidth - margin, 280);
      
      doc.setFontSize(8);
      doc.setTextColor(103, 58, 183);
      doc.text("Diagnóstico Espiritual IDC - www.sejadigno.com", pageWidth/2, 286, { align: "center" });
    }
  }
  
  // Save the PDF
  doc.save(`diagnostico-espiritual-${userData.name.split(' ')[0]}.pdf`);
};
