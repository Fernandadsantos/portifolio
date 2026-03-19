export const handleViewPDF = (path: string) => {
  const link = document.createElement("a");
  link.href = path;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.click();
};

export const scrollToBottom = () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
};
