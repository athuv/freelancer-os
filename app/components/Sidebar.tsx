const Sidebar = () => {
  return (
    <section className="h-full w-60 border-r p-4">
      <h2 className="mb-6 text-lg font-semibold">FreelancerOS</h2>
      <nav className="space-y-4">
        <p>Dashboard</p>
        <p>Clients</p>
        <p>Projects</p>
        <p>Invoices</p>
        <p>Settings</p>
      </nav>
    </section>
  );
};

export default Sidebar;
