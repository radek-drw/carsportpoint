import { AdminProvider, useAdmin } from '@context/AdminContext';

import Logo from '../../common/Logo.jsx';

import AdminLogin from './AdminLogin.js';
import AdminDashboard from './AdminDashboard/AdminDashboard.jsx';

const AdminContent = () => {
  const { isLoggedIn } = useAdmin();
  return (
    <section className="absolute left-0 top-0 z-50 flex min-h-screen w-full items-center justify-center bg-gray-100">
      {isLoggedIn ? <AdminDashboard /> : <AdminLogin />}
    </section>
  );
};

const AdminPage = () => {
  return (
    <AdminProvider>
      <AdminContent />
      <Logo isClickable className="absolute left-3 top-2 z-50 w-56" />
    </AdminProvider>
  );
};

export default AdminPage;
