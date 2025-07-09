import GlassSidebar from "@/components/admin/layout/GlassSidebar";
import { Toaster } from "react-hot-toast";


export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <GlassSidebar>
    <Toaster position="top-right" />

    {children}</GlassSidebar>;
}
