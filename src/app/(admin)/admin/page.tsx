import DashboardClient from '@/components/layouts/admin/dashboard/DashboardClient';
import { getDashboardStats } from '@/services/dashboard.service';

export const dynamic = 'force-dynamic';

const AdminDashboardPage = async () => {
  const dashboardData = await getDashboardStats();

  return <DashboardClient data={dashboardData} />;
};

export default AdminDashboardPage;
