import GlassSidebar from "@/components/admin/layout/GlassSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <GlassSidebar>{children}</GlassSidebar>;
}
